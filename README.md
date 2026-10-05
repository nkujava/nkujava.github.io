# Nathan Kujava — personal academic website

Site URL: https://nkujava.github.io/

Repository: https://github.com/nkujava/nkujava.github.io

A single-page academic homepage made with HTML, CSS, and a small inline script.
No installation, framework, or build step is required.

The design uses traditional serif type, browser-style blue links, and compact
sections. Desktop uses a full-width, proportional 40/60 split: photo and contact
information on the left, with the name centered above section tabs on the right.
The right column scrolls independently while the left column stays in place.
The plain underlined section controls display one category at a time. They use
native radio controls: Tab to the selected category, then use arrow keys to switch.
Projects has a second row of controls for Localization, Mid-Level Planner, and
Simulator, visible only while Projects is selected. The inline script resets
Projects to Localization whenever the main Projects control is activated and
returns the desktop content column to the top when switching projects.
Without JavaScript, section and project selection still work, but the selected
project persists when returning to Projects.
Research & Experience combines the research and experience entries, with subtabs
for People and Robots, Rosenberg Lab, and Wisconsin Autonomous. It defaults to
People and Robots whenever opened. Publications appear with People and Robots.
Use Tab and arrow keys for these controls; without JavaScript, the selected
subtab persists when returning to Research & Experience.
The left column can scroll if needed on short screens to keep contact links
accessible. On smaller screens, the page scrolls normally in a single column,
with the photo and contact appearing before the name and tabbed content.
The visual references are [Isabella Scott's homepage](https://people.math.wisc.edu/~iscott6/)
and [Zev Chonoles's academic website guide](https://math.uchicago.edu/~chonoles/miscellany/making-a-website/).

## Files and local viewing

```text
Website/
├── index.html   # Page content, metadata, links, and inline initials favicon
├── style.css    # Typography, spacing, link states, and responsive layout
├── README.md    # Editing and publishing instructions
├── PXL_20260824_014411149.jpg  # Photo above the contact details
├── resume.pdf   # Private local copy, ignored by Git and not published
├── .nojekyll    # Serve the static website without Jekyll processing
├── assets/projects/  # Localization comparison image; add other plots and data here
└── .gitignore   # Common OS and editor temporary files
```

Double-click `index.html` to open it in your browser. After editing and saving,
refresh the browser to see your changes. The stylesheet loads directly from the
same directory. No local server is needed.

The photo keeps its original proportions and scales to the column width. To
replace it, update the image filename, descriptive `alt` text, and intrinsic
`width` / `height` in the HTML's `PHOTO` comment block. Include the image file
when committing and pushing the website.

The `resume.pdf` beside `index.html` is a private local copy of the supplied
`Nathan_Kujava_Resume.pdf`. It is ignored by Git and is not published.
There is no resume link on the website.

## Edit your information

The website content has been adapted from the supplied resume. All page text is
written directly in `index.html`, so you can open it in a text editor, make changes,
save, and refresh your browser. Updating the PDF does not automatically update
the HTML, or vice versa.

1. **About and Education:** introduction and skills are in `ABOUT` and `SKILLS`.
   The separate Education tab contains `EDUCATION`, with Madison details ready
   to expand and a PKU summer-program overview linked to the official curriculum.
   Keep published program offerings distinct from personal activities and accomplishments.
   The page title and meta description are in the `<head>`.
2. **Research:** the Rosenberg Lab and People and Robots Laboratory entries
   include your roles, dates, and research contributions.
3. **Projects and experience:** edit the localization, mid-level planner, and
   midplanner simulator projects and the
   Wisconsin Autonomous role. Add real repository or project links when available.
4. **Publications / Writing (inside People and Robots):** the CHI 2027 paper is described as submitted.
   Add its title, authors, and public link when available, and update its status
   if it changes. A citation template is provided in an HTML comment.
5. **Contact:** email is displayed as `[first name]kujava@gmail.com`, with no
   `mailto:` link or complete address in the HTML. This discourages simple
   harvesting but does not guarantee protection against scraping.
6. **Profiles:** the left Contact section links only to
   `linkedin.com/in/nathan-kujava-180a94351/`. Update it there if the profile URL changes.
7. **Resume:** replace the private local `resume.pdf` when you have a new version.
   Keep it out of Git; the sidebar does not include a resume link.

The citation and project evidence templates contain bracketed examples and
placeholder paths inside HTML comments; these are not displayed on the page.

## Add project images, videos, and data

Each project has a **Results and supporting material** subsection. Search for
`LOCALIZATION RESULTS` or `MID-LEVEL PLANNER RESULTS` in `index.html` to edit it.
The simulator case study embeds the YouTube recording `YoG1P2SROU0` under Demo.
At `SIMULATOR RESULTS`, update both the iframe source and the direct YouTube link
when replacing the recording. The player uses the shared responsive video styling.
The contribution paragraph credits Adrian Luo for the simulator and road generation.

1. Put your screenshots, plots, CSV files, or PDF reports in `assets/projects/`.
   Use simple filenames such as `localization-trajectory.png` or
   `planner-results.csv`.
2. Inside the relevant project, copy an existing figure or uncomment an `IMAGE TEMPLATE`.
   Set `src` to the real relative path, write descriptive `alt` text, and add a
   caption explaining the scenario, axes/units, test conditions, and result.
   Images scale to the text column without cropping. You can add intrinsic
   `width` and `height` attributes matching the file's dimensions to reserve space.
3. Uncomment the `DATA TEMPLATE` to add measured results and a CSV download.
   Change the metric, units, value, table caption, and file link. Duplicate table
   rows for additional measurements. For PDF reports, use a normal link to the
   PDF and label it clearly. Add files before enabling their links.
4. Keep captions clear about what was measured;
   a demo video alone does not establish every performance metric.

The localization project includes `assets/projects/localization-trajectory.png`
and `assets/projects/localization-parking-lot.png`, each showing the estimated
trajectory in red and the GPS trajectory in blue. Both portrait figures display
at up to 440px wide, keep their original proportions, and link to their
full-resolution images. Copy a `<figure>` block to add another comparison,
then update the image path, dimensions, alt text, and caption.

The mid-level planner includes the supplied **Wisconsin Autonomous AV 2025**
video. To replace it, change the video ID `buRxjcsR3aQ` in both the iframe URL
and the YouTube link, then update the title and caption. The player is responsive,
loads lazily, and does not autoplay. No JavaScript is added to the site's files.

The page still opens directly from disk. YouTube playback requires an internet
connection, and its embedded player may reject `file://` pages because they do
not send an HTTP referrer. The “Watch the AV test on YouTube” link is always
available. To check the embed locally, run `python -m http.server 8000` in this
folder and visit `http://localhost:8000/`, or view the deployed GitHub Pages site.
See [YouTube's player error documentation](https://developers.google.com/youtube/iframe_api_reference#onError)
for embedding restrictions and missing-referrer error 153.

## Maintain the page

- Major sections have uppercase HTML comments such as `<!-- ABOUT -->`.
- To add research, a project, or experience, copy a complete `<article>...</article>`
  within the appropriate section, then edit its text and links. Update the
  link list's `aria-label` to describe the new entry.
- Keep entry titles as `<h3>` and section titles as `<h2>`.
- To add writing, turn the commented citation list into live HTML and fill in
  the details. Clearly distinguish submitted work from accepted or published work.
- Add only the profile, project, and paper links you have available.
- Adjust fonts, width, colors, and spacing in `style.css`. Local file links
  should stay relative (for example, `assets/projects/plot.png`) so they
  work both from disk and from a GitHub Pages project subdirectory.
- The initials favicon is an inline SVG in the HTML head; no image file is needed.

## Publish with GitHub Pages

This project uses `nkujava/nkujava.github.io`, with Pages publishing from `main`
and the repository root. After initial setup, use **Publish future edits** below.
The initial setup instructions are retained for reference.

### 1. Create an empty repository

Install [Git](https://git-scm.com/downloads) and sign in to a GitHub account.
Create a **public** repository named `USERNAME.github.io`, replacing `USERNAME`
with your actual GitHub username. This name gives you the root address
`https://USERNAME.github.io/`.

Leave the options to initialize a README, `.gitignore`, and license unchecked:
the local files will supply the initial commit. A differently named repository
also works; its Pages URL will usually be `https://USERNAME.github.io/REPOSITORY/`.

### 2. Commit and push these files

Open a terminal in this website directory. If Git asks for your identity,
configure your chosen commit name and email with `git config user.name` and
`git config user.email` after `git init`. A GitHub-provided no-reply email is
also an option.

Run these commands, replacing **both** occurrences of `USERNAME` in the remote
URL with your GitHub username. If you chose another repository name, replace
`USERNAME.github.io.git` with that repository name followed by `.git`.

```bash
git init
git add .
git commit -m "Initial personal website"
git branch -M main
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git
git push -u origin main
```

For HTTPS pushes, complete Git's credential-manager/browser sign-in if prompted.
GitHub does not accept your account password for Git operations; use a supported
credential manager or a personal access token if your setup prompts for one.
Do not store credentials in the website files or remote URL.

### 3. Enable Pages

In the GitHub repository, open **Settings → Pages**. Under **Build and deployment**:

1. Select **Deploy from a branch** as the source.
2. Select **main** and **/ (root)**.
3. Click **Save**, if the settings are not already configured.

GitHub serves the root `index.html` and `style.css`; you do not need a custom
Actions workflow, framework, or build command. See GitHub's official
[Pages setup instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

### 4. Verify the deployed site

Wait for the Pages deployment to finish; publication can take several minutes.
Check the repository's **Actions** tab for deployment status, then use the site
link in **Settings → Pages**. Confirm that:

- The page is styled and readable on desktop and a phone.
- Email and any profile or project links you add use the right destinations.
- No unwanted template text remains.

If you see a 404, check that `index.html` is at the root of `main`, Pages is
using `main` / root, and the deployment has completed. File names and link
capitalization must match exactly on GitHub Pages.

### 5. Publish future edits

Edit the HTML or CSS, save, and check the page locally. Then run:

```bash
git add .
git commit -m "Update personal website"
git push
```

GitHub Pages will redeploy from the updated branch.

## Add a custom domain later

No custom domain is configured, and this project intentionally has no `CNAME`
file. If you later own a domain such as `nathankujava.com`:

1. Purchase or otherwise obtain control of the domain. Verify ownership with
   GitHub following its domain documentation.
2. Enter the chosen domain in the repository's **Settings → Pages → Custom
   domain**, then save it before pointing DNS at GitHub.
3. Configure the domain's DNS records with your domain provider. An apex domain
   uses GitHub's documented `A` records or supported `ALIAS` / `ANAME` records;
   a `www` subdomain typically uses a DNS `CNAME` pointing to
   `USERNAME.github.io`, without a repository path. Use the current values in
   [GitHub's custom-domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
4. With branch publishing, saving the domain in Pages settings automatically
   commits a root `CNAME` file containing the domain. You can also maintain that
   file manually later. It is separate from the DNS record with the same name.
   Run `git pull` to bring GitHub's new commit into your local copy before editing.
5. After DNS validation and certificate provisioning complete, enable
   **Enforce HTTPS** in Pages settings. DNS and HTTPS availability may take time.

Choose the domain first; do not add a placeholder `CNAME` file now.
