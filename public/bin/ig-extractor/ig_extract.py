#!/usr/bin/env python3
"""
Instagram Screenshot Image Extractor
=====================================
Extracts the main photo from Instagram post screenshots,
removing all UI chrome (header, likes, comments, icons, caption).

Handles light mode, dark mode, B&W photos, and light-colored scenes.

Usage:
    python ig_extract.py -i ./screenshots -o ./extracted
    python ig_extract.py -i ./screenshots -o ./extracted --preview 5
    python ig_extract.py -i ./screenshots -o ./extracted --dark
"""

import os
import sys
import argparse
import time
from pathlib import Path
from concurrent.futures import ProcessPoolExecutor, as_completed

try:
    from PIL import Image
    import numpy as np
except ImportError:
    print("Install dependencies: pip install Pillow numpy")
    sys.exit(1)


def detect_top_ui(arr, h, w, dark_mode=False):
    """
    Find where the top Instagram UI ends (status bar, username/avatar header).
    Uses strict threshold + rolling average to distinguish real UI from light photos.
    """
    if dark_mode:
        row_pct = np.mean(np.all(arr < 20, axis=2), axis=1)
    else:
        row_pct = np.mean(np.all(arr > 245, axis=2), axis=1)

    # First 5 rows must be clearly UI (>85% white at strict threshold)
    if np.mean(row_pct[:5]) < 0.85:
        return 0

    # Rolling average to smooth through avatar/icon gaps in header
    window = 20
    rolling = np.convolve(row_pct, np.ones(window) / window, mode='valid')

    for y in range(0, min(len(rolling), h // 3)):
        if rolling[y] < 0.30:
            return y + window // 2
    return 0


def detect_bottom_ui(arr, h, w, dark_mode=False):
    """
    Find where the bottom Instagram UI starts (icons, likes, caption).
    Uses strict threshold + rolling average to handle light-colored photos.
    """
    if dark_mode:
        row_pct = np.mean(np.all(arr < 20, axis=2), axis=1)
    else:
        row_pct = np.mean(np.all(arr > 245, axis=2), axis=1)

    # Last 5 rows must be clearly UI
    if np.mean(row_pct[-5:]) < 0.85:
        return h

    window = 20
    rolling = np.convolve(row_pct, np.ones(window) / window, mode='valid')

    for y in range(len(rolling) - 1, h // 3, -1):
        if rolling[y] < 0.30:
            return y + window // 2
    return h


def extract_image(input_path, output_path, dark_mode=False, quality=95):
    """Extract the main image from a single Instagram screenshot."""
    try:
        img = Image.open(input_path).convert('RGB')
        arr = np.array(img)
        h, w = arr.shape[:2]

        top = detect_top_ui(arr, h, w, dark_mode)
        bottom = detect_bottom_ui(arr, h, w, dark_mode)

        # Cut a few extra px from bottom to avoid UI remnants
        bottom = max(0, bottom - 5)

        # Sanity check: extracted region must be at least 30% of image height
        if (bottom - top) < h * 0.3:
            return {'file': str(input_path), 'status': 'skipped',
                    'reason': f'region too small ({bottom - top}px)'}

        # First crop: remove top/bottom UI
        cropped = img.crop((0, top, w, bottom))
        # Final trim: 3px from all sides
        cw, ch = cropped.size
        cropped = cropped.crop((3, 3, cw - 3, ch - 3))

        ext = Path(output_path).suffix.lower()
        save_kw = {}
        if ext in ('.jpg', '.jpeg'):
            save_kw = {'quality': quality, 'optimize': True}
        elif ext == '.png':
            save_kw = {'optimize': True}
        elif ext == '.webp':
            save_kw = {'quality': quality}

        cropped.save(output_path, **save_kw)

        return {
            'file': str(input_path),
            'status': 'ok',
            'original': f'{w}x{h}',
            'cropped': f'{cropped.size[0]}x{cropped.size[1]}',
            'top': top,
            'bottom': bottom,
        }
    except Exception as e:
        return {'file': str(input_path), 'status': 'error', 'reason': str(e)}


def _process(args):
    return extract_image(*args)


def batch_extract(input_dir, output_dir, dark_mode=False, quality=95,
                  workers=None, output_format=None, preview=0):
    input_dir = Path(input_dir)
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    extensions = {'.jpg', '.jpeg', '.png', '.webp', '.bmp', '.tiff'}
    files = sorted([
        f for f in input_dir.iterdir()
        if f.is_file() and f.suffix.lower() in extensions
    ])

    if not files:
        print(f"No images found in {input_dir}")
        return

    if preview > 0:
        files = files[:preview]
        print(f"Preview mode: first {preview} images\n")

    total = len(files)
    mode_str = "dark" if dark_mode else "light"
    print(f"Found {total} images | Mode: {mode_str} | Quality: {quality}")
    print(f"Output: {output_dir}\n")

    tasks = []
    for f in files:
        ext = f'.{output_format}' if output_format else f.suffix
        out = output_dir / f'{f.stem}_extracted{ext}'
        tasks.append((str(f), str(out), dark_mode, quality))

    results = {'ok': 0, 'skipped': 0, 'error': 0}
    errors = []
    start = time.time()

    if workers == 1 or total <= 3:
        for i, task in enumerate(tasks, 1):
            r = extract_image(*task)
            results[r['status']] += 1
            if r['status'] == 'error':
                errors.append(r)
            name = Path(r['file']).name
            status = r['status']
            extra = f" ({r['cropped']})" if status == 'ok' else f" - {r.get('reason', '')}" if r.get('reason') else ""
            print(f"  [{i}/{total}] {name}: {status}{extra}")
    else:
        with ProcessPoolExecutor(max_workers=workers) as ex:
            futures = {ex.submit(_process, t): t for t in tasks}
            done = 0
            for future in as_completed(futures):
                done += 1
                r = future.result()
                results[r['status']] += 1
                if r['status'] == 'error':
                    errors.append(r)
                pct = done * 100 // total
                print(f"\r  {done}/{total} ({pct}%) | OK:{results['ok']} Skip:{results['skipped']} Err:{results['error']}",
                      end='', flush=True)
            print()

    elapsed = time.time() - start
    print(f"\nDone in {elapsed:.1f}s ({total / max(elapsed, 0.1):.1f} img/s)")
    print(f"  OK: {results['ok']}  Skipped: {results['skipped']}  Errors: {results['error']}")

    if errors:
        print("\nErrors:")
        for e in errors[:20]:
            print(f"  {Path(e['file']).name}: {e.get('reason', '?')}")


def main():
    p = argparse.ArgumentParser(
        description='Extract images from Instagram screenshots',
        epilog="""
Examples:
  python ig_extract.py -i ./screenshots -o ./extracted
  python ig_extract.py -i ./screenshots -o ./extracted --preview 5
  python ig_extract.py -i ./screenshots -o ./extracted --dark
  python ig_extract.py -i ./screenshots -o ./extracted -f jpg -q 90
        """,
        formatter_class=argparse.RawDescriptionHelpFormatter
    )
    p.add_argument('-i', '--input', required=True, help='Input directory')
    p.add_argument('-o', '--output', required=True, help='Output directory')
    p.add_argument('--dark', action='store_true', help='Dark mode screenshots')
    p.add_argument('-q', '--quality', type=int, default=95, help='JPEG quality (default: 95)')
    p.add_argument('-w', '--workers', type=int, default=None, help='Parallel workers (default: auto)')
    p.add_argument('-f', '--format', default=None, choices=['jpg', 'png', 'webp'], help='Force output format')
    p.add_argument('--preview', type=int, default=0, help='Process only N images for testing')
    args = p.parse_args()

    batch_extract(
        input_dir=args.input,
        output_dir=args.output,
        dark_mode=args.dark,
        quality=args.quality,
        workers=args.workers,
        output_format=args.format,
        preview=args.preview,
    )


if __name__ == '__main__':
    main()
