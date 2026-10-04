# Swapnil Sharad Mergu — Portfolio

Static portfolio website (HTML, CSS, JavaScript) for **Swapnil Sharad Mergu**, Software Engineer based in Overland Park, KS.

## Preview locally

Open `index.html` in a browser, or run a simple local server:

```bash
# Python
python -m http.server 5500

# Node
npx serve .
```

Then visit `http://localhost:5500`.

## Deploy on GitHub Pages

1. Create a new GitHub repository (e.g. `portfolio` or `your-username.github.io`).
2. Push this project to the repo.
3. In GitHub: **Settings → Pages → Build and deployment**.
4. Set **Source** to **Deploy from a branch**.
5. Choose branch `main` (or `master`) and folder `/ (root)`.
6. Save — your site will be live at:
   - `https://<username>.github.io/<repo>/`  
   - or `https://<username>.github.io/` if the repo is named `<username>.github.io`

## Structure

```
├── index.html
├── css/styles.css
├── js/main.js
└── assets/
    ├── logo2.png
    ├── project1.png
    ├── project2.png
    ├── project3.png
    └── resume.pdf
```

## Features

- Responsive layout (mobile + desktop)
- Dark / light theme toggle
- Smooth scroll navigation
- Animated loader, counters, and scroll reveals
- Work experience tab switching
- Resume download
