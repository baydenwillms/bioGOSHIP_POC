# Bio-GO-SHIP

Public website for the [Bio-GO-SHIP](https://biogoship.org) program: plankton observations collected with GO-SHIP hydrographic sections.

This is a static site. Content (posts, team, cruises, publications, FAQ) lives in markdown files in the repo. Most day-to-day edits happen in **Pages CMS**, not in code.

Preview: [baydenwillms.github.io/bioGOSHIP_POC](https://baydenwillms.github.io/bioGOSHIP_POC)

## Tech stack

| Piece | What it is |
| --- | --- |
| [Astro](https://astro.build/) | Site framework (pages, layouts, build) |
| [TypeScript](https://www.typescriptlang.org/) | Typed JavaScript |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| Markdown content collections | Posts, team, cruises, publications, FAQ |
| [Pages CMS](https://pagescms.org/) | Browser editor that commits markdown and images to GitHub |
| GitHub Pages | Hosting. A push to `main` builds and deploys |

The project started from the [Astro Stardrive](https://github.com/peltmonger/stardrive) boilerplate and has been adapted for this site.

## Editing content (Pages CMS)

Use this for posts, team members, cruise plans, publications, and FAQ answers. You do **not** need to install Node or clone the repo for those edits.

### Access

1. You must be a **collaborator with write access** on this GitHub repository (`baydenwillms/bioGOSHIP_POC`). Ask a repo admin to add you as an editor if you cannot see or save changes.
2. Open [Pages CMS](https://app.pagescms.org/) and sign in with GitHub.
3. Select this repository. The collections come from [`.pages.yml`](./.pages.yml) at the repo root.

If you are not an editor on the repo, Pages CMS can show the project but **cannot save**. GitHub will reject the commit.

### How to add or edit

In Pages CMS, pick a collection:

| Collection | What it updates | Shows up on |
| --- | --- | --- |
| Posts | News / blog entries | `/posts` |
| Team | Name, role, affiliation, photo, bio | `/team` (set **Team** to USA or International) |
| Cruise plans | Title, date, caption, photo, writeup, map pins, cruise line | `/cruises` |
| Publications | Citation fields and optional notes | `/publications` |
| FAQ | Question, category, answer | `/faq` |

Create or open an item, fill the fields, add a photo if needed, and save. Pages CMS commits to GitHub. After GitHub Actions finishes, the live site updates.

Set **draft** if something should stay in the repo but not appear on the site yet.

### Images

Uploads go into `src/images/content/`. When you attach a photo to a post, cruise, or team member, the CMS writes that path into the markdown file. **Do not drag or move images between folders in the Media library** after they are attached — the page still looks up the original path, so the photo will break. Leave files where the upload put them. Folder cleanup is a repo change (move the file and update the path in the markdown).

## Run locally (code / layout)

Use this when you need to change pages, styling, or configuration — not for routine content.

### What you need

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) **22.12 or newer** (this also installs `npm`)

Confirm:

```sh
node -v
npm -v
```

### Install and run

```sh
git clone https://github.com/baydenwillms/bioGOSHIP_POC.git
cd bioGOSHIP_POC
npm install
npm run dev
```

Astro prints a local URL (usually `http://localhost:4321`). Open it in a browser. The site reloads when you save files.

Other commands:

```sh
npm run build      # production build into dist/
npm run preview    # serve that build locally
npm run check      # Astro, TypeScript, ESLint, Prettier
```

Pull before you start work if others (or Pages CMS) have been committing:

```sh
git pull
```

## What belongs where

| Kind of change | Where |
| --- | --- |
| Post, team, cruise, publication, FAQ text and photos | Pages CMS |
| New page types, navigation, styling, favicons, `.pages.yml` | Clone the repo and edit in code |
| Legal notice / privacy copy, site-wide config | Code (`src/pages/`, `theme.config.ts`) |

## License

MIT. See [LICENSE.txt](LICENSE.txt).
