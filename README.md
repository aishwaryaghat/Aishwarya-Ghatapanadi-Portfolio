# Aishwarya Ghatapanadi — Portfolio

Personal software engineering portfolio featuring professional experience, selected projects, technical skills, education, and contact information.

**Live website:** https://aishwarya-ghatapanadi.netlify.app/

## Stack

Semantic HTML, responsive CSS, and vanilla JavaScript. No dependency installation or compilation is required.

## Run locally

From the repository directory:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000.

## Features

- Responsive desktop and mobile layouts.
- Light and dark themes with a saved preference.
- Project category filters and detailed case-study dialogs.
- Recruiter summary with a print action.
- Downloadable professional profile and contact links.
- Keyboard navigation, accessible labels, and reduced-motion styles.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page content, navigation, and recruiter summary |
| `styles.css` | Layout, themes, responsive rules, and print styles |
| `app.js` | Case studies, filtering, dialogs, theme, and navigation controls |
| `assets/favicon.svg` | Site icon |
| `netlify.toml` | Static hosting configuration |

## Updating the portfolio

Edit page content in `index.html`, project case studies in the `projects` object in `app.js`, and presentation in `styles.css`. Replace the downloadable PDF in `assets/` at its existing path to update all download links.

## Deployment

Connect this repository to Netlify, select `main` as the production branch, leave the build command empty, and use `.` as the publish directory. The included `netlify.toml` declares the publish directory.

## Checks

```sh
node --check app.js
```

Preview the site locally to check project filters, case-study dialogs, theme switching, navigation, PDF downloads, and the recruiter summary.
