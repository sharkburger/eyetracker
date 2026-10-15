# Eye Tracker Atlas

An English and Chinese review of publicly documented eye-tracking hardware: **50 devices and product families, 27 brands, and 7 application categories**.

- **[English website](https://sharkburger.github.io/eyetracker/en.html)**
- **[中文网站](https://sharkburger.github.io/eyetracker/)**
- [中文说明](README.md)

Every record includes a product image, introduction, applications, editorial selection notes, specification conditions, source date, and original-source links. The header language switch retains the current section or device-profile link.

## Features

Search device descriptions, filter by category, brand, or information status, and compare 2–4 devices side by side. Detailed profiles support links such as `en.html#device=neon`. The site works on desktop and mobile screens.

English downloads: [JSON](devices.en.json) · [CSV](devices.en.csv). Chinese downloads: [JSON](devices.json) · [CSV](devices.csv).

Basic device summaries and original-source links remain readable without JavaScript. Interactive filtering, comparisons, and detailed profiles require JavaScript.

## Scope and evidence

Sources checked: **October 15, 2026**. Manufacturer product pages, developer documentation, support materials, and official discontinuation notices are prioritized. Editorial notes are analysis of published information, not a standardized hands-on hardware comparison. The atlas does not assign scores or imply independent validation of vendor claims.

Entries include product families and are not a count of 50 distinct hardware SKUs. Coverage is broad but not exhaustive. Historical SMI and Eye Tribe ranges, custom OEM modules, regional manufacturers, clinical vestibular or nystagmus systems, scleral search coils, EOG instruments, and webcam software platforms are not comprehensively covered. Software platforms are not counted as standalone hardware.

Read each `specNote` alongside `hz`: rates may be maximum values or specific operating modes. Blank values mean this edition makes no numerical claim. Display refresh rate, scene-camera frame rate, and gaze-sampling rate are distinct. An available official page does not establish current inventory or continuing support.

## Files and maintenance

- `index.html`, `app.js`, `devices.json`, `devices.csv`: Chinese edition.
- `en.html`, `app.en.js`, `devices.en.json`, `devices.en.csv`: English edition.
- `style.css`, `language.js`, `assets/`: shared styling, language links, and images.
- [Image credits](CREDITS.en.md): original images, source pages, and attribution.

The site is static and has no runtime dependencies, external CDN, or build requirement. GitHub Pages publishes from the root of the `main` branch. `.nojekyll` disables Jekyll processing.

When editing content, update both language datasets, their CSV exports, and each HTML page’s embedded `dataset` and pre-rendered cards. Keep device IDs, factual specifications, image references, and source URLs aligned across languages. Product images and original sources are shared; the English edition translates editorial content without re-measuring hardware.

## Image rights

Product images and trademarks remain the property of their respective owners. Third-party images are not represented as openly licensed. Original image URLs and source pages are retained for attribution and traceability. Rights holders can request an attribution correction or removal through [Issues](https://github.com/sharkburger/eyetracker/issues).
