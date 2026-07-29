# PrintForge

PrintForge is a full-stack Next.js learning project for browsing community-created 3D-printing models. It was built while completing Scrimba's **Learn Next.js** course, with a focus on understanding how data moves through a modern App Router application.

The application was rebuilt incrementally from provided HTML mockups. Its interface and subject matter follow the course material, while the implementation work gave me hands-on practice with routing, server-side data access, URL-driven state, reusable components, and user feedback states.

## Features

- Browse models stored in a local SQLite database
- View individual model details through dynamic routes
- Filter models by category
- Search model names and descriptions
- Search within a selected category
- Sort results alphabetically, by popularity, or by recency
- Paginate global and category-specific results
- Preserve search and sorting state in URL parameters
- Validate invalid page and sort parameters before querying
- Display responsive loading and pending states
- Handle empty results, unknown models, invalid categories, and missing pages
- Highlight active navigation and sorting controls

## Tech Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS
- SQLite

## How the Application Works

Next.js Server Components read validated URL parameters and query SQLite for the requested models. Search, category, sorting, and pagination options are translated into parameterized SQL conditions.

Interactive controls update the URL with client-side navigation. Because the URL is the source of truth, searches and filters are bookmarkable, refresh-safe, and compatible with browser navigation.

The shared model browser coordinates pending navigation state across the search, sorting, and results grid. Following the course architecture, the transition callback is passed explicitly through the small component tree. This keeps the data flow visible without introducing additional state-management infrastructure. In a larger application with deeper or more widely shared state, I would consider component composition, context, or an intent-focused abstraction to avoid excessive prop drilling.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Project landing page |
| `/about` | Information about PrintForge |
| `/3d-models` | Searchable, sortable, paginated model library |
| `/3d-models/categories/[categorySlug]` | Models filtered by category |
| `/3d-models/[id]` | Individual model details |

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/ashlee-seagle/nextjs-learning.git
cd nextjs-learning
npm install
```

### Seed the database

The SQLite database is generated locally and intentionally excluded from Git.

```bash
npx tsx src/app/lib/seeds/seed_categories.ts
npx tsx src/app/lib/seeds/seed_models.ts
```

These commands create `printforge.db` in the project root and populate it with the course data.

### Run the application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Quality Checks

```bash
npm run lint
npm run build
```

## Challenges and Lessons

- Built parameterized SQL queries that safely combine search and category conditions.
- Kept search, sorting, and pagination synchronized through URL parameters.
- Ensured filtered count queries matched result queries so pagination stayed accurate.
- Validated query parameters before fetching data or redirecting invalid requests.
- Used Server Components for database access and Client Components only where interaction was required.
- Used React transitions to provide responsive feedback during client-side navigation.
- Evaluated when explicit prop passing is appropriate and when a larger application might benefit from composition or context.

## Course Context

This project was created as part of Scrimba's **Learn Next.js** course, led primarily by Bob Ziroll with additional instructors.

The product concept, mockups, and lesson requirements come from the course. I implemented the application while following the curriculum, troubleshooting issues, validating behavior, and documenting the engineering decisions I learned along the way.
