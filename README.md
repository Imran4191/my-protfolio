# Md Imran Hossain — portfolio

Vite + React 19. No CSS framework: the design lives in `src/index.css` as custom
properties, so changing a handful of tokens changes the whole site.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
```

Deploying to Vercel: framework preset **Vite**, build command `npm run build`,
output directory `dist`. Nothing else to configure.

There is also `npm run build:single`, which bundles the entire site — CSS, JS,
images and the CV — into one `dist-single/index.html` you can email or drop on
any host.

## Where to change things

Almost everything you will want to edit is content, and all the content is in
two files.

| What you want to change | File |
| --- | --- |
| Projects, their order, descriptions, tech tags | `src/data/projects.js` |
| Name, contact, headline, stats, services, jobs, education, stack | `src/data/site.js` |
| Colours, type, spacing | the `:root` block at the top of `src/index.css` |
| Page title, meta description, Open Graph, JSON-LD | `index.html` |

### Reordering projects

Projects render in array order and the number on each card comes from that
order. To promote a project, move its object up in the `projects` array in
`src/data/projects.js`. Nothing else needs touching.

### Adding a project

Copy an existing object and fill in the fields:

```js
{
  name: 'Project name',
  domain: 'example.com',          // shown in the browser bar on the card
  url: 'https://example.com/',    // null for internal work with no public link
  category: 'E-commerce',         // must match one of the `categories` entries
  kind: 'WooCommerce store',      // the one-line label under the title
  year: '2026',
  summary: 'One or two sentences, plain language.',
  bullets: ['Shown when someone clicks What I built.'],
  tech: ['WordPress', 'PHP'],
  tint: { bg: '#06272D', fg: '#F4EEE2', accent: '#D7B66A' },
}
```

`tint` drives the generated brand plate — use the client's real brand colours
and the card looks like it belongs to them.

### Using a real screenshot instead of a plate

Drop a WebP or PNG into `src/assets/shots/`, import it at the top of
`projects.js`, and add `shot: yourImport` to the project. The card shows the
image inside the browser frame instead of the plate. Shots crop to 16:10 from
the top, so capture the hero area rather than the whole page.

### Replacing the CV

Overwrite `src/assets/Imran-Hossain-CV.pdf`. Both download buttons point at it.

## Notes

- The site ships `Person` JSON-LD in `index.html`. Update the `url` field once
  you settle on a final domain.
- Fonts are Archivo, IBM Plex Sans and IBM Plex Mono, loaded from Google Fonts.
- The hero domain ticker is built from the projects that have a `url` and a real
  domain, so it keeps itself in sync as you add work.
- Reduced motion is respected: the ticker and the load animation both stop.
