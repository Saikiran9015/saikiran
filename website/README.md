# Simple Static Website

This is a minimal static website scaffold (HTML/CSS/JS).

Files created:
- website/index.html
- website/styles.css
- website/script.js

Quick preview (Python 3):

```powershell
cd "c:\Users\abbus\Downloads\Saikiran\website"
python -m http.server 8000
```

Open http://localhost:8000 in your browser.

Alternative (Node):

```powershell
cd "c:\Users\abbus\Downloads\Saikiran\website"
npx http-server -p 8000
```

Next steps you might want:
- Hook a contact form to a server or service.
- Add images and assets in an `assets/` folder.
- Deploy to GitHub Pages, Netlify, or Vercel.

Images:
- Replace the placeholder SVGs in the `assets/` folder with your own images.
- Paths used in the site:
	- `assets/hero.svg` — hero image shown at the top
	- `assets/feat1.svg`, `assets/feat2.svg`, `assets/feat3.svg` — feature icons

If your images are JPG/PNG, keep the same filenames or update `index.html` to point to the new filenames.

Gallery:
- The `assets/` folder already contains three JPEG photos; a `Gallery` section has been added to `index.html` to display them.
- If you add more images to `assets/`, update `index.html` or run the included `import-images.ps1` (not present yet) to copy files into `assets/`.

Author:
- This site was created for and by Saikiran. References to `Saikiran` appear in the site header and footer.
