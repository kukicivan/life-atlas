# Instagram Photo Downloader

Downloads photos from an Instagram profile using **gallery-dl** with cookie-based auth.
No passwords, no session files.

---

## Quick start

```
1. Create .venv and install dependencies  (see below)
2. Export cookies from Chrome             (see below)
3. Edit config.json
4. Double-click run.bat  (or: .venv\Scripts\python instagram_downloader.py)
```

---

## 1. Create virtual environment & install dependencies

**Windows**
```cmd
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
```

**Linux / macOS**
```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

---

## 2. Export cookies from Chrome

1. Install **[Get cookies.txt LOCALLY](https://chromewebstore.google.com/detail/get-cookiestxt-locally/cclelndahbckbenkjhflpdbgdldlbecc)** extension
2. Log into Instagram in Chrome (not Incognito), open the target profile
3. Click the extension icon > **Export** > save as `www.instagram.com_cookies.txt`
4. Place it in the same folder as `instagram_downloader.py`

> Cookies expire when you log out of Instagram. Re-export if downloads stop working.

---

## 3. Configure

Copy the example and edit `config.json`:

```cmd
copy config.example.json config.json
```

```json
{
    "cookies_file":      "./www.instagram.com_cookies.txt",
    "target_profile":    "profile_to_download",
    "max_photos":        5,
    "skip_videos":       true,
    "download_folder":   "./instagram_downloads",
    "download_comments": false
}
```

| Key | Description |
|---|---|
| `cookies_file` | Path to the exported cookies file |
| `target_profile` | Instagram username to download |
| `max_photos` | Max photos to download (`0` = all) |
| `skip_videos` | Skip video files |
| `download_folder` | Base output folder |
| `download_comments` | `true` = fetch comments and save to Excel |

---

## 4. Run

**Windows** — double-click **`run.bat`**, or from a terminal:
```cmd
python instagram_downloader.py
```

**Linux / macOS**
```bash
python instagram_downloader.py
```

---

## Output structure

```
instagram_downloads/
└── profile_name/
    ├── photos/              ← downloaded images
    ├── metadata/            ← one .json per image (gallery-dl metadata)
    └── profile_name_comments.xlsx   ← when download_comments = True
```

---

## Comments (Excel)

Set `"download_comments": True` and run. The script fetches comment text via the API
and writes one Excel row per comment, so you can filter by `image_filename` in Excel
to see all comments for a specific photo.

| Column | Content |
|---|---|
| `image_filename` | e.g. `ABC123_1.jpg` — filter this to find a photo |
| `shortcode` | Post shortcode |
| `post_url` | Direct link to the post |
| `caption` | Post caption |
| `likes` | Like count |
| `post_date` | Upload date |
| `comment_author` | Commenter username |
| `comment_text` | Full comment text |
| `comment_date` | Comment date |

---

## Quick search in terminal

Use `sc.bat` to search comments without opening Excel:

**CMD**
```cmd
sc                   ← list all photos (filename, comment count, caption preview)
sc DU3pQBV           ← search by partial filename — no extension needed
sc DU3pQBV.jpg       ← with extension also works
```

**PowerShell** — `sc` is a built-in alias for `Set-Content`, so prefix with `.\`:
```powershell
.\sc
.\sc DU3pQBV
```

Reads the same Excel file, prints results instantly. Useful for large sets.

---

## Troubleshooting

| Error | Fix |
|---|---|
| `Cookie file not found` | Re-export cookies and place file next to the script |
| Posts not downloading / 401 | Cookies expired — re-export from Chrome |
| Private profile fails | Make sure you follow the profile and cookies are fresh |
| Comments empty in Excel | Run again with `download_comments = True` |
