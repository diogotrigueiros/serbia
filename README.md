# Serbia since 1987

An Angular site exploring Serbia’s recent history and politics through seven chapters, from the wars that ended Yugoslavia to the country’s current place between East and West. It also includes a filterable timeline and chapter-by-chapter sources.

The subject is contested, so the chapters distinguish established records from areas where accounts differ. The site is an educational overview, not a substitute for consulting the cited sources.

## Features

- Seven chapters covering the Yugoslav wars, Slobodan Milošević, Greater Serbia, Kosovo, the Zemun Clan, Serbia’s foreign-policy position, and Aleksandar Vučić.
- A timeline with filters for browsing events by theme.
- Sources and notes, including links and further reading.
- An interactive home-page feature that shifts between the Serbian Latin and Cyrillic scripts.
- Responsive layouts and keyboard-accessible navigation.

## Getting started

You’ll need Node.js and npm installed. From the project directory, install the dependencies and start the Angular development server:

```bash
npm ci
npm start
```

Open the local URL printed by the Angular CLI (usually `http://localhost:4200/`). The server reloads the app as you edit the source files.

## Available commands

| Command | Description |
| --- | --- |
| `npm start` | Start the local development server. |
| `npm run build` | Build the app for production into `dist/`. |
| `npm run watch` | Rebuild on source changes using the development configuration. |
| `npm test` | Run the project’s unit tests. |

## Project structure

```text
src/
  app/
    data/       Chapter content, sources, and timeline events
    pages/      Home, chapter, timeline, and sources pages
    app.routes.ts
  styles.scss
public/         Static assets
```

Chapter text and its references live alongside the chapter data in `src/app/data/chapters/`. The shared timeline data is in `src/app/data/timeline.ts`.
