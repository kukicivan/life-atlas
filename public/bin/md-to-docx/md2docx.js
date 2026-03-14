#!/usr/bin/env node
/**
 * MD → DOCX konverter za knjige
 * Upotreba: node md2docx.js ulaz.md izlaz.docx "Naziv Publikacije" [a4|a5]
 * Konfiguracija: md2docx.config.json (u istom folderu)
 */

const fs   = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle,
  WidthType, ShadingType, VerticalAlign, PageNumber,
} = require('docx');

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const CONFIG_PATH = path.join(path.dirname(process.argv[1]), 'md2docx.config.json');
const CFG = fs.existsSync(CONFIG_PATH)
  ? JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'))
  : {};

const FONT      = CFG.font || 'Times New Roman';
const PUB_NAME  = CFG.publicationName || 'Publikacija';
const MD_FILE   = process.argv[2];
const DOCX_FILE = process.argv[3];
const FORMAT    = (process.argv[4] || CFG.defaultFormat || 'a4').toLowerCase();

const PAGE_CFG  = (CFG.page || {})[FORMAT] || { width: 11906, height: 16838, margin: 1440 };
const MARGIN    = PAGE_CFG.margin;
const PAGE_W    = PAGE_CFG.width;
const PAGE_H    = PAGE_CFG.height;
const CONTENT_W = PAGE_W - 2 * MARGIN;

const BODY      = CFG.body    || { sizePt: 12, afterDxa: 180, lineRule: 'auto' };
const H         = CFG.headings|| { h1:{sizePt:16,beforeDxa:240,afterDxa:120}, h2:{sizePt:14,beforeDxa:240,afterDxa:240}, h3:{sizePt:13,beforeDxa:160,afterDxa:240} };
const TBL       = CFG.table   || { borderColor:'666666', borderSizePt:4, headerFill:'EEEEEE', altRowFill:'F7F7F7', cellPadding:{top:60,bottom:60,left:50,right:50}, spacerLineDxa:60, spacerAfterDxa:25 };
const HDR       = CFG.header  || { sizePt:10, italic:true, align:'right' };
const FTR       = CFG.footer  || { sizePt:10, align:'center' };

const SINGLE_LINE = { value: 240, rule: BODY.lineRule || 'auto' };
const TABLE_LINE  = { value: 240, rule: 'exact' };
// ─────────────────────────────────────────────────────────────────────────────

// ── Inline MD parser ──────────────────────────────────────────────────────────
function parseInline(text) {
  const runs = [];
  const re   = /(\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|\*(.+?)\*)/g;
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) runs.push({ text: text.slice(last, m.index), bold: false, italics: false });
    if      (m[2]) runs.push({ text: m[2], bold: true,  italics: true  });
    else if (m[3]) runs.push({ text: m[3], bold: true,  italics: false });
    else if (m[4]) runs.push({ text: m[4], bold: false, italics: true  });
    last = re.lastIndex;
  }
  if (last < text.length) runs.push({ text: text.slice(last), bold: false, italics: false });
  return runs.length ? runs : [{ text, bold: false, italics: false }];
}

function makeRuns(text, sizePt, extra = {}) {
  return parseInline(text).map(r => new TextRun({
    font: FONT, size: sizePt * 2,
    bold:    extra.bold    || r.bold    || false,
    italics: extra.italics || r.italics || false,
    ...extra, text: r.text,
  }));
}

// ── Body paragraph ────────────────────────────────────────────────────────────
function bodyPara(text) {
  return new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    spacing:   { before: 0, after: BODY.afterDxa, line: SINGLE_LINE.value, lineRule: SINGLE_LINE.rule },
    children:  makeRuns(text, BODY.sizePt),
  });
}

// ── Headings ──────────────────────────────────────────────────────────────────
const HEADING_LEVEL = { 1: HeadingLevel.HEADING_1, 2: HeadingLevel.HEADING_2, 3: HeadingLevel.HEADING_3 };

function heading(text, level) {
  const cfg = H[`h${level}`];
  return new Paragraph({
    heading:   HEADING_LEVEL[level],
    alignment: AlignmentType.LEFT,
    spacing:   { before: cfg.beforeDxa, after: cfg.afterDxa, line: SINGLE_LINE.value, lineRule: SINGLE_LINE.rule },
    children:  [new TextRun({ text, font: FONT, size: cfg.sizePt * 2, bold: true })],
  });
}

// ── Table ─────────────────────────────────────────────────────────────────────
function isNumeric(str) {
  return /^\d[\d\s.,\-]*$/.test(str.trim());
}

function cellPara(text, align, bold = false) {
  return new Paragraph({
    alignment: align,
    spacing:   { before: 0, after: 0, line: TABLE_LINE.value, lineRule: TABLE_LINE.rule },
    children:  [new TextRun({ text: text.trim(), font: FONT, size: (TBL.sizePt || BODY.sizePt) * 2, bold })],
  });
}

const CELL_BORDER = (() => {
  const b = { style: BorderStyle.SINGLE, size: TBL.borderSizePt, color: TBL.borderColor };
  return { top: b, bottom: b, left: b, right: b };
})();

function makeTable(headers, rows) {
  const colCount  = headers.length;
  const colW      = Math.floor(CONTENT_W / colCount);
  const colWidths = Array(colCount).fill(colW);
  colWidths[colCount - 1] += CONTENT_W - colW * colCount;
  const pad = TBL.cellPadding;

  const hdrRow = new TableRow({
    tableHeader: true,
    children: headers.map((h, i) => new TableCell({
      borders:       CELL_BORDER,
      shading:       { fill: TBL.headerFill, type: ShadingType.CLEAR },
      margins:       { top: pad.top, bottom: pad.bottom, left: pad.left, right: pad.right },
      width:         { size: colWidths[i], type: WidthType.DXA },
      verticalAlign: VerticalAlign.CENTER,
      children:      [cellPara(h, AlignmentType.LEFT, true)],
    })),
  });

  const dataRows = rows.map((row, ri) => new TableRow({
    children: row.map((cell, ci) => {
      const txt   = cell.trim();
      const align = AlignmentType.LEFT;
      return new TableCell({
        borders:  CELL_BORDER,
        shading:  { fill: 'FFFFFF', type: ShadingType.CLEAR },
        margins:  { top: pad.top, bottom: pad.bottom, left: pad.left, right: pad.right },
        width:    { size: colWidths[ci], type: WidthType.DXA },
        children: [cellPara(txt, align)],
      });
    }),
  }));

  return new Table({
    width:        { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: colWidths,
    rows:         [hdrRow, ...dataRows],
  });
}

function spacer(after = false) {
  const line = after ? (TBL.spacerAfterDxa || TBL.spacerLineDxa) : TBL.spacerLineDxa;
  return new Paragraph({
    spacing: { before: 0, after: 0, line: line, lineRule: 'exact' },
    children: [],
  });
}

// ── MD table parser ───────────────────────────────────────────────────────────
function parseMdTable(lines) {
  const headers = lines[0].replace(/^\||\|$/g, '').split('|').map(h => h.trim());
  const rows = lines.slice(2)
    .filter(l => l.includes('|'))
    .map(l => {
      const cells = l.replace(/^\||\|$/g, '').split('|').map(c => c.trim());
      while (cells.length < headers.length) cells.push('');
      return cells.slice(0, headers.length);
    });
  return { headers, rows };
}

// ── Document styles ───────────────────────────────────────────────────────────
function buildStyles() {
  return {
    default: { document: { run: { font: FONT, size: BODY.sizePt * 2 } } },
    paragraphStyles: [1, 2, 3].map(lvl => {
      const cfg = H[`h${lvl}`];
      return {
        id: `Heading${lvl}`, name: `Heading ${lvl}`,
        basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run:       { font: FONT, size: cfg.sizePt * 2, bold: true, color: '000000' },
        paragraph: { spacing: { before: cfg.beforeDxa, after: cfg.afterDxa, line: 240, lineRule: 'auto' }, outlineLevel: lvl - 1 },
      };
    }),
  };
}

// ── Header / Footer ───────────────────────────────────────────────────────────
const ALIGN_MAP = { left: AlignmentType.LEFT, center: AlignmentType.CENTER, right: AlignmentType.RIGHT };

function buildHeader() {
  return new Header({
    children: [new Paragraph({
      alignment: ALIGN_MAP[HDR.align] || AlignmentType.RIGHT,
      spacing:   { before: 0, after: 0 },
      children:  [new TextRun({ text: PUB_NAME, font: FONT, size: HDR.sizePt * 2, italics: HDR.italic })],
    })],
  });
}

function buildFooter() {
  return new Footer({
    children: [new Paragraph({
      alignment: ALIGN_MAP[FTR.align] || AlignmentType.CENTER,
      spacing:   { before: 0, after: 0 },
      children:  [new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: FTR.sizePt * 2 })],
    })],
  });
}

// ── Main parser ───────────────────────────────────────────────────────────────
function parseMd(mdText) {
  const lines    = mdText.split('\n');
  const children = [];
  let i = 0;

  while (i < lines.length) {
    const stripped = lines[i].trim();

    if (!stripped) { i++; continue; }

    if (stripped.startsWith('### ')) { children.push(heading(stripped.slice(4), 3)); i++; continue; }
    if (stripped.startsWith('## '))  { children.push(heading(stripped.slice(3), 2)); i++; continue; }
    if (stripped.startsWith('# '))   { children.push(heading(stripped.slice(2), 1)); i++; continue; }

    if (stripped.startsWith('|')) {
      const tblLines = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tblLines.push(lines[i].trim()); i++;
      }
      if (tblLines.length >= 3) {
        const { headers, rows } = parseMdTable(tblLines);
        children.push(spacer());
        children.push(makeTable(headers, rows));
        children.push(spacer(true));
      }
      continue;
    }

    let paraText = stripped; i++;
    while (i < lines.length) {
      const nxt = lines[i].trim();
      if (!nxt || nxt.startsWith('#') || nxt.startsWith('|')) break;
      paraText += ' ' + nxt; i++;
    }
    children.push(bodyPara(paraText));
  }

  return children;
}

// ── Build & save ──────────────────────────────────────────────────────────────
function main() {
  if (!MD_FILE || !DOCX_FILE) {
    console.error('Upotreba: node md2docx.js ulaz.md izlaz.docx "Naziv Publikacije" [a4|a5]');
    process.exit(1);
  }
  if (!fs.existsSync(MD_FILE)) {
    console.error(`Greška: '${MD_FILE}' ne postoji.`);
    process.exit(1);
  }

  const children = parseMd(fs.readFileSync(MD_FILE, 'utf8'));

  const doc = new Document({
    styles: buildStyles(),
    sections: [{
      properties: {
        page: {
          size:   { width: PAGE_W, height: PAGE_H },
          margin: { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN },
        },
      },
      headers: { default: buildHeader() },
      footers: { default: buildFooter() },
      children,
    }],
  });

  Packer.toBuffer(doc).then(buf => {
    fs.writeFileSync(DOCX_FILE, buf);
    console.log(`OK: ${DOCX_FILE}`);
  });
}

main();
