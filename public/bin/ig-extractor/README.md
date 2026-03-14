# 📱 Instagram Screenshot Extractor

Batch extract clean photos from Instagram screenshot images by removing UI elements (status bar, buttons, captions).

---

## ✨ Features

- ✅ **Batch processing** - Process hundreds of screenshots at once
- ✅ **Multiprocessing** - Fast parallel processing (~50-100 images/second)
- ✅ **Multiple detection methods** - Color, edge, and ratio-based detection
- ✅ **Preserves quality** - Original image quality maintained
- ✅ **Auto-detection** - Automatically tries all methods and picks best result
- ✅ **Preview mode** - Test on small sample before full batch

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
pip install Pillow numpy
```

### 2. Organize screenshots
```
screenshots/
├── IMG_0001.jpg
├── IMG_0002.png
└── Screenshot_2025-01-15.png
```

### 3. Run extraction
```bash
# Test first with 5 images
python instagram_image_extractor.py -i ./screenshots -o ./extracted --preview 5

# Full batch extraction
python instagram_image_extractor.py -i ./screenshots -o ./extracted

# Force JPG output at 90% quality
python instagram_image_extractor.py -i ./screenshots -o ./extracted -f jpg -q 90
```

---

## 🎯 How It Works

Instagram screenshots have predictable layout:

```
┌──────────────────────┐
│ Status bar           │  ← Removed
│ Username / avatar    │  ← Removed
├──────────────────────┤
│                      │
│    ACTUAL PHOTO      │  ← EXTRACTED
│                      │
├──────────────────────┤
│ ♡ 💬 ↗ 🔖           │  ← Removed
│ 123 likes            │  ← Removed
│ Caption text...      │  ← Removed
└──────────────────────┘
```

---

## 🔧 Detection Methods

| Method | Best For | Description |
|--------|----------|-------------|
| `auto` | General use (default) | Tries all methods, picks best |
| `color` | Light mode screenshots | Detects photo by color variance |
| `edge` | Dark mode screenshots | Uses gradient analysis |
| `ratio` | When others fail | Uses fixed Instagram ratios |

**Usage:**
```bash
# Auto-detect (default)
python instagram_image_extractor.py -i ./screenshots -o ./extracted

# Specific method for dark mode
python instagram_image_extractor.py -i ./screenshots -o ./extracted --method edge
```

---

## ⚡ Performance

### Automatic multiprocessing
- Auto-detects CPU cores
- Processes ~50-100 images/second on 8-core CPU

```bash
# Auto-detect workers (recommended)
python instagram_image_extractor.py -i ./screenshots -o ./extracted

# Manual workers
python instagram_image_extractor.py -i ./screenshots -o ./extracted -w 4
```

### For thousands of images
```bash
# Process in batches
for dir in screenshots_batch_*/; do
    python instagram_image_extractor.py -i "$dir" -o "./extracted/${dir}"
done
```

---

## 📊 Output Structure

```
extracted/
├── IMG_0001_extracted.jpg
├── IMG_0002_extracted.png
└── Screenshot_2025-01-15_extracted.png
```

Original filename + `_extracted` suffix

---

## 💡 Recommended Workflow

1. **Preview first** - Test on small sample
   ```bash
   python instagram_image_extractor.py -i ./screenshots -o ./extracted --preview 10
   ```

2. **Check results** - Visually inspect extracted images

3. **Adjust if needed** - Try different method for dark mode
   ```bash
   python instagram_image_extractor.py -i ./screenshots -o ./extracted --method edge
   ```

4. **Full run** - Remove `--preview` flag
   ```bash
   python instagram_image_extractor.py -i ./screenshots -o ./extracted
   ```

5. **Re-run failures** - Move failed images, try different method

---

## ⚠️ Troubleshooting

| Problem | Solution |
|---------|----------|
| Too much UI left in crop | Try `--method edge` |
| Photo cut off | Try `--method ratio` |
| Dark mode screenshots fail | Use `--method edge` |
| Stories/Reels not working | Script designed for feed posts only |
| Out of memory | Reduce workers: `--workers 2` |

---

## 🛠️ Files

- `instagram_image_extractor.py` - Main extraction script with CLI
- `ig_extract.py` - Core extraction library

---

## 📝 Usage Examples

### Basic extraction
```bash
python instagram_image_extractor.py -i ./screenshots -o ./extracted
```

### Preview mode (test first)
```bash
python instagram_image_extractor.py -i ./screenshots -o ./extracted --preview 5
```

### Dark mode screenshots
```bash
python instagram_image_extractor.py -i ./screenshots -o ./extracted --method edge
```

### Custom output format
```bash
python instagram_image_extractor.py -i ./screenshots -o ./extracted -f jpg -q 95
```

### Limit workers
```bash
python instagram_image_extractor.py -i ./screenshots -o ./extracted --workers 4
```

---

## 📄 License

Personal use only. Extracted images belong to original creators.

---

**Tip:** Always preview first with `--preview 10` to check extraction quality!
