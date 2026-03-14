"""
Sort new photos into folder structure matching old sorted photos.

Maps new photos (hash-named) to old sorted folders using media_id from JSON metadata.
Creates: old_photos_ceklin_razvrstane_nove/
  01-pocetak/photos/ + metadata/
  02-sredina/photos/ + metadata/
  03-kraj/photos/ + metadata/
  nerazvrstane/photos/ + metadata/
"""

import json
import os
import shutil

BASE = os.path.dirname(os.path.abspath(__file__))
NEW_PHOTOS_DIR = os.path.join(BASE, "old_photos_ceklin", "photos")
META_DIR = os.path.join(BASE, "old_photos_ceklin", "metadata")
OLD_SORTED_DIR = os.path.join(BASE, "old_photos_ceklin_razvrstane_stare")
OUTPUT_DIR = os.path.join(BASE, "old_photos_ceklin_razvrstane_nove")

# Folder name mapping from old subfolder paths to new category names
FOLDER_MAP = {
    "01-pocetak": "01-pocetak",
    "02-sredina": "02-sredina",
    "03-kraj": "03-kraj",
}


def build_old_index():
    """Build mapping: media_id -> category folder name (01-pocetak, 02-sredina, 03-kraj)."""
    index = {}
    for root, dirs, files in os.walk(OLD_SORTED_DIR):
        for f in files:
            name = os.path.splitext(f)[0]
            rel = os.path.relpath(root, OLD_SORTED_DIR)
            # rel looks like "01-pocetak\old_photos_ceklin_pocetak"
            category = rel.split(os.sep)[0]  # "01-pocetak"
            index[name] = category
    return index


def sort_photos():
    old_index = build_old_index()
    print(f"Old index: {len(old_index)} files mapped")

    # Create output directories
    for folder in ["01-pocetak", "02-sredina", "03-kraj", "nerazvrstane"]:
        os.makedirs(os.path.join(OUTPUT_DIR, folder, "photos"), exist_ok=True)
        os.makedirs(os.path.join(OUTPUT_DIR, folder, "metadata"), exist_ok=True)

    stats = {"01-pocetak": 0, "02-sredina": 0, "03-kraj": 0, "nerazvrstane": 0}

    meta_files = [f for f in os.listdir(META_DIR) if f.endswith(".json")]
    print(f"Processing {len(meta_files)} metadata files...")

    for mf in sorted(meta_files):
        meta_path = os.path.join(META_DIR, mf)
        with open(meta_path, "r", encoding="utf-8") as fp:
            data = json.load(fp)

        media_id = data.get("media_id", "")
        post_id = data.get("post_id", "")

        # Determine photo filename (strip .json from metadata filename)
        photo_name = mf.removesuffix(".json")
        photo_path = os.path.join(NEW_PHOTOS_DIR, photo_name)

        if not os.path.exists(photo_path):
            print(f"  WARNING: Photo not found: {photo_name}")
            continue

        # Try to find category: first by media_id, then by post_id_media_id
        category = None
        if media_id in old_index:
            category = old_index[media_id]
        elif f"{post_id}_{media_id}" in old_index:
            category = old_index[f"{post_id}_{media_id}"]

        if category is None:
            category = "nerazvrstane"

        # Copy photo and metadata
        dest_photo = os.path.join(OUTPUT_DIR, category, "photos", photo_name)
        dest_meta = os.path.join(OUTPUT_DIR, category, "metadata", mf)

        shutil.copy2(photo_path, dest_photo)
        shutil.copy2(meta_path, dest_meta)
        stats[category] += 1

    print("\nResults:")
    for folder, count in stats.items():
        print(f"  {folder}: {count} photos")
    print(f"  Total: {sum(stats.values())}")


if __name__ == "__main__":
    sort_photos()
