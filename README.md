# Nathan Kujava — personal portfolio

A static portfolio for https://nathankujava.dev, hosted from this repository with GitHub Pages. Open `index.html` locally; no installation or build is required.

## Design

The layout is inspired by Eric Wadkins's portfolio: a full-height photographic introduction, fixed navigation, blue and gold accents, and vertically arranged portfolio sections. Nathan's headshot, biography, research, education, project descriptions, figures, and videos supply the content.

The page includes About, Selected Projects, Research & Experience, Publications / Writing, Education, and Contact. Native HTML disclosures hold detailed project and coursework information. Content and disclosures work without JavaScript; the small script adds the mobile menu, scroll-aware navigation, and direct-link handling. Reduced-motion preferences are respected.

## Files

- `index.html`: Content, metadata, and semantic page structure.
- `style.css`: Responsive layout, colors, typography, and print styles.
- `script.js`: Navigation and deep-link enhancements.
- `PXL_20260824_014411149.jpg`: Original beach photograph, retained locally.
- `headshot.png`: Headshot displayed in the circular About image.
- `assets/projects/`: Existing localization figures.
- `assets/education/`: Peking University cohort photo.
- `CNAME`: Existing custom domain configuration.

Google Fonts provides Montserrat and Source Sans 3, with system fallbacks. YouTube embeds load lazily from the privacy-enhanced domain. The local `resume.pdf` remains ignored by Git and is not linked or published.

## Editing and checking

Edit text directly in `index.html`. Keep element IDs stable so navigation and direct links continue to work. Each project's native `<details>` contains its technical description and associated media. Update the descriptive alt text and captions when replacing images.

Run `node --check script.js` to check JavaScript syntax. For local HTTP preview, run `python -m http.server 8000` and open `http://localhost:8000`. Check the menu at narrow widths, keyboard navigation, disclosures, anchor links, and media before publishing.

Deploy through the repository's existing GitHub Pages workflow. This redesign does not change the domain or hosting configuration.

## Landing photograph

`assets/images/madison-winter.jpg`: [Madison city skyline in winter](https://commons.wikimedia.org/wiki/File:Gfp-wisconsin-madison-city-skyline-in-the-winter.jpg) by Yinan Chen, released into the public domain. The photograph shows the Capitol skyline across a frozen lake. CSS crops it to the viewport and adds a dark overlay. Photo credit appears in the footer.

The previous aerial image remains in `assets/images/madison-aerial.jpg`: [Wisconsin State Capitol Aerial](https://commons.wikimedia.org/wiki/File:Wisconsin_State_Capitol_Aerial.jpg) by Lectrician2, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
