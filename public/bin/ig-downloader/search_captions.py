#!/usr/bin/env python3
"""
Quick comment search - reads the *_comments.xlsx produced by instagram_downloader.py

Usage:
  python search_captions.py              -> list all photos (compact)
  python search_captions.py DU3pQBV     -> search by partial filename (no extension needed)
  python search_captions.py DU3pQBV.jpg -> also works with extension
  python search_captions.py ceklin      -> matches anything in filename

sc.bat is a shortcut so you can type: sc DU3pQBV
"""

import sys
from pathlib import Path
from collections import defaultdict

try:
    import openpyxl
except ImportError:
    print("ERROR: openpyxl not installed. Run: pip install openpyxl")
    sys.exit(1)

# ============================================================================

LINE = "-" * 70
BOLD = "=" * 70


def find_excel_files():
    """Auto-discover all *_comments.xlsx files under instagram_downloads/"""
    base = Path("instagram_downloads")
    if not base.exists():
        return []
    return sorted(base.glob("*/*_comments.xlsx"))


def load_rows(excel_files):
    """Read all rows from all Excel files into a list of dicts."""
    all_rows = []
    for path in excel_files:
        try:
            wb = openpyxl.load_workbook(path, read_only=True, data_only=True)
            ws = wb.active
            headers = None
            for row in ws.iter_rows(values_only=True):
                if headers is None:
                    headers = [str(h) for h in row]
                    continue
                if any(cell is not None for cell in row):
                    all_rows.append(dict(zip(headers, row)))
            wb.close()
        except Exception as e:
            print(f"WARNING: Could not read {path}: {e}")
    return all_rows


def normalise(term):
    """Strip common image extensions for flexible matching."""
    for ext in (".jpg", ".jpeg", ".png", ".webp"):
        if term.lower().endswith(ext):
            return term[: -len(ext)]
    return term


def search_rows(rows, term):
    """Return rows whose image_filename contains the (normalised) term."""
    needle = normalise(term).lower()
    return [r for r in rows if needle in normalise(str(r.get("image_filename", ""))).lower()]


def group_by_image(rows):
    """Group rows by image_filename; preserve insertion order."""
    groups = defaultdict(list)
    for row in rows:
        groups[str(row.get("image_filename", ""))].append(row)
    return groups


def print_photo(filename, rows):
    r = rows[0]
    caption = str(r.get("caption") or "")
    post_url = str(r.get("post_url") or "")
    post_date = str(r.get("post_date") or "")
    likes = r.get("likes", "")

    print(BOLD)

    # Metadata
    print(f"  File   : {filename}")
    if post_url:
        print(f"  URL    : {post_url}")
    if post_date:
        print(f"  Date   : {post_date}    Likes: {likes}")

    # Comments, or caption when there are none
    comments = [r for r in rows if r.get("comment_text")]
    if comments:
        print(f"\n  Comments ({len(comments)}):")
        for c in comments:
            author = c.get("comment_author") or "?"
            text   = str(c.get("comment_text") or "")
            cdate  = str(c.get("comment_date") or "")
            preview = text[:200] + ("..." if len(text) > 200 else "")
            date_tag = f"  [{cdate}]" if cdate and cdate != "None" else ""
            print(f"    @{author}{date_tag}: {preview}")
    else:
        if caption:
            print()
            for line in caption.splitlines():
                print(f"  {line}")
        else:
            print("\n  (no comments)")


def cmd_search(rows, term):
    matches = search_rows(rows, term)
    if not matches:
        print(f"\n  No results for '{term}'")
        print(f"  Tip: try a shorter part of the filename, e.g. first 6 chars of the shortcode")
        return

    groups = group_by_image(matches)
    for filename, photo_rows in groups.items():
        print_photo(filename, photo_rows)

    print(BOLD)
    print(f"  Found {len(groups)} photo(s) matching '{term}'")
    print(BOLD)


def cmd_list(rows, limit=20):
    groups = group_by_image(rows)
    total = len(groups)
    shown = 0

    print(f"\n  {total} photo(s) in index  (showing first {min(limit, total)})\n")
    print(f"  {'#':<5} {'Filename':<40} {'Comments':>8}  Caption preview")
    print(LINE)

    for filename, photo_rows in groups.items():
        if shown >= limit:
            break
        comment_count = sum(1 for r in photo_rows if r.get("comment_text"))
        caption = str(photo_rows[0].get("caption") or "")
        cap_preview = caption[:45] + ("..." if len(caption) > 45 else "")
        shown += 1
        print(f"  {shown:<5} {filename:<40} {comment_count:>8}  {cap_preview}")

    if total > limit:
        print(f"\n  ... and {total - limit} more. Use a search term to filter.")
    print()


# ============================================================================

def main():
    excel_files = find_excel_files()
    if not excel_files:
        print("\n  No *_comments.xlsx found under instagram_downloads/")
        print("  Run instagram_downloader.py first with download_comments = True\n")
        sys.exit(1)

    rows = load_rows(excel_files)
    if not rows:
        print("\n  Excel file(s) found but contain no data.\n")
        sys.exit(1)

    if len(sys.argv) > 1:
        term = " ".join(sys.argv[1:])
        cmd_search(rows, term)
    else:
        print()
        print(BOLD)
        print("  INSTAGRAM COMMENT SEARCH".center(70))
        print(f"  Loaded {len(rows)} rows from {len(excel_files)} file(s)".center(70))
        print(BOLD)
        print()
        print("  Usage:")
        print("    sc <partial_filename>     search by filename (no extension needed)")
        print("    sc                        list all photos")
        print()
        cmd_list(rows)


if __name__ == "__main__":
    main()
