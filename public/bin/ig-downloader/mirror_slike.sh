#!/bin/bash
# ============================================================
# MIRROR SLIKE - Kopira strukturu foldera samo sa slikama
# ============================================================
# Izvorni folder: FAJLOVI
# Odredisni folder: SLIKE_MIRROR
# Formati: jpg, jpeg, png, gif, bmp, tif, tiff, webp, svg, ico, raw, psd
# ============================================================

SOURCE="/c/Users/Kule/Desktop/VASKO/FAJLOVI"
DEST="/d/SLIKE_MIRROR"

# Ekstenzije slika (case-insensitive matching)
IMAGE_EXTENSIONS="jpg|jpeg|png|gif|bmp|tif|tiff|webp|svg|ico|raw|psd|cr2|nef|arw"

# Brojaci
copied=0
skipped=0
dirs_created=0

echo "============================================"
echo "  MIRROR SLIKE - Pocetak kopiranja"
echo "============================================"
echo "Izvor:    $SOURCE"
echo "Odrediste: $DEST"
echo ""

# Kreiraj odredisni folder ako ne postoji
mkdir -p "$DEST"

# Pronadji sve fajlove sa slikovnim ekstenzijama i kopiraj ih
find "$SOURCE" -type f | while IFS= read -r file; do
    # Preskoci ovu skriptu
    if [[ "$file" == *"mirror_slike.sh" ]]; then
        continue
    fi

    # Izvuci ekstenziju (lowercase)
    ext="${file##*.}"
    ext_lower=$(echo "$ext" | tr '[:upper:]' '[:lower:]')

    # Provjeri da li je slika
    if echo "$ext_lower" | grep -qiE "^($IMAGE_EXTENSIONS)$"; then
        # Izracunaj relativnu putanju
        rel_path="${file#$SOURCE/}"
        dest_file="$DEST/$rel_path"
        dest_dir=$(dirname "$dest_file")

        # Kreiraj folder ako ne postoji
        if [ ! -d "$dest_dir" ]; then
            mkdir -p "$dest_dir"
            dirs_created=$((dirs_created + 1))
            echo "[FOLDER] $dest_dir"
        fi

        # Kopiraj fajl
        cp "$file" "$dest_file"
        copied=$((copied + 1))
        echo "[KOPIJA] $rel_path"
    else
        skipped=$((skipped + 1))
    fi
done

echo ""
echo "============================================"
echo "  ZAVRSENO!"
echo "============================================"
echo "Kopirano slika:    $copied"
echo "Preskoceno fajlova: $skipped"
echo "Kreiranih foldera:  $dirs_created"
echo "Odrediste: $DEST"
echo "============================================"
