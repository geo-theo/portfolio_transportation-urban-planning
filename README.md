# PlannerFolio

A new blue-and-gold portfolio template for an **urban planner, transportation analyst, or geospatial specialist**, built directly from [saadpasta/developerFolio](https://github.com/saadpasta/developerFolio).

The application is in **`plannerfolio/`**. It retains DeveloperFolio's personal greeting, signature logo, illustrations, typography, spacious layout, skill icons, project cards, and dark theme. Content is adapted to planning and transportation. There are no numbered editorial sections, horizontal section dividers, fixed map controls, project categories, or prescribed case-study format.

## Start

```powershell
cd plannerfolio
npm ci
npm start
```

Use Node.js 22 or newer. `npm run build` produces the static site in `build/`.

## Customize

Edit **`plannerfolio/src/portfolio.js`** for your name, introduction, social links, skills, projects, optional experience and education, contact information, metadata, and footer. All example identity/contact/project text is placeholder content.

- Projects accept any title, description, optional image, and any number of links. Add or remove objects in `bigProjects.projects`; there is no item limit or required project subject.
- Set optional sections' `display` flags to show or hide them.
- Rearrange `sectionOrder` to change the page sequence.
- Add `customSections` for other work, such as maps, publications, community projects, or photography. Each section has its own title, introduction, optional images, and links.
- Add actual social URLs. Empty social links and project links are hidden.
- Set `greeting.resumeLink` to a PDF URL, or put your PDF in `public/resume.pdf` and use `"/resume.pdf"`.
- Set `illustration.greetingImage`, `skillsImage`, or `contactImage` to replace the default artwork with your own images.
- Change the blue-and-gold palette in **`plannerfolio/src/_globalColor.scss`**.

See the application [README](plannerfolio/README.md) for copy-and-edit examples. DeveloperFolio's original GPL-3.0 license and attribution are retained in the application. Its source components remain available for further customization.
