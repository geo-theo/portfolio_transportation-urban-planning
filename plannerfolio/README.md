# PlannerFolio — Urban Planning & Transportation

This is a new template adapted directly from DeveloperFolio, with blue-and-gold styling and planning-oriented starter content. The original layout, React components, font assets, and illustrations are retained. Your content is configured in **`src/portfolio.js`**.

## Run

```sh
npm ci
npm start
```

Requires Node.js 22 or newer. No accounts, map services, or API keys are required. Run `npm run build` to create static output in `build/`; serve that folder with any static host. The included optional GitHub Pages workflow runs only when you manually trigger it. GitHub and Medium integrations are disabled by default.

## Add any project

Add, replace, or remove objects in `bigProjects.projects`. Image and links are optional; there are no case-study fields or category restrictions.

```js
{
  projectName: "Your project title",
  projectDesc: "Your description, written however you like.",
  image: "/images/your-map.png", // Put the file in public/images/
  imageAlt: "Describe the map for someone who cannot see it",
  footerLink: [
    { name: "Interactive map", url: "https://your-map-url.example" },
    { name: "Read the report", url: "/reports/your-report.pdf" },
    { name: "Source code", url: "https://github.com/your-username/your-project" }
  ]
}
```

Empty link URLs are hidden. You can use full URLs or paths to files in `public/`. If importing an SVG from `src/assets`, use an ES-module `import` for the image URL.

## Add a whole section

Add objects to `customSections`; they automatically appear in navigation. No new component is needed.

```js
{
  id: "selected-maps",
  title: "Selected maps",
  subtitle: "Your introduction to this collection.",
  display: true,
  items: [
    {
      title: "Your map title",
      description: "Your caption or project description.",
      image: "/images/map.png",
      imageAlt: "An accessible description of the map",
      links: [{ name: "Download map", url: "/maps/map.pdf" }]
    }
  ]
}
```

Move `"custom"` in `sectionOrder` to position these sections. Rearrange the other names to rearrange the built-in sections, or remove a name to omit it. Education, experience, achievements, writing, talks, podcasts, and proficiency bars are available but disabled until you add your own content.

## Name, links, images, and theme

- `greeting`: signature name, heading, introduction, button labels, and optional résumé URL.
- `socialMediaLinks`: GitHub, LinkedIn, email, and other profiles. For arbitrary links, use `links: [{label:"Website",url:"https://...",icon:"fas fa-link"}]`.
- `skillsSection`: free-form skills and tools. Each tool accepts a `fontAwesomeClassname` or an optional `image` URL.
- `illustration`: set `greetingImage`, `skillsImage`, and `contactImage` to replace the provided illustrations; set their corresponding `Alt` descriptions too.
- `contactInfo`, `footer`, and `siteMetadata`: customize contact content and page metadata.
- `src/_globalColor.scss`: edit `$buttonColor` (blue), `$gold`, and the other global colors.

The default name, contact address, and project cards are placeholders. There are no invented clients or analysis results. Replace the placeholders with your own work before sharing your professional portfolio.

## Source and license

Adapted from [saadpasta/developerFolio](https://github.com/saadpasta/developerFolio), source commit `fc693405936fae6f5e5a4ba4c1da11513732f748`. This adaptation retains the original **GPL-3.0** license in `LICENSE`. Original illustrations are credited by the upstream project to unDraw and its Lottie contributors. The footer retains the DeveloperFolio theme credit.
