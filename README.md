# mPayHub — B2B Fintech & Digital Payment Platform

mPayHub is a modern, unified financial technology platform designed to power digital payments, banking, and utility services for retailers, distributors, and enterprises across India. It provides a secure, scalable, and bank-grade infrastructure to facilitate seamless digital transactions from day one.

---

## 🚀 Key Features

*   **Unified Recharge & Utility Bill Payments:** Mobile, DTH, and FASTag recharges alongside comprehensive BBPS support (Electricity, Gas, Water, Broadband, Loan EMIs, and Insurance Premiums).
*   **Banking & Agent Financial Services:** Enabled with Aadhaar Enabled Payment System (AEPS), Aadhaar Pay, and Domestic Money Transfer (DMT) for localized banking access.
*   **Structured B2B Partner Network:** Four tiered partnership options (Retailer, Distributor, Master Distributor, and Super Distributor) with tailored commission ranges (5% – 25%) and built-in management tools.
*   **Enterprise Integration:** Developer-friendly API Banking and payment gateways to integrate banking services directly into corporate workflows.
*   **Secure SSR & Error Handling:** Designed with SSR (Server-Side Rendering) architecture, including custom catastrophic error capture and Lovable-compatible analytics telemetry.
*   **Premium Visuals & Accessibility:** Built using harmonious OKLCH-based color variables, responsive typography, and scroll-triggered animations.

---

## 🛠️ Technology Stack

mPayHub is built on a modern, high-performance web development stack:

*   **Core:** [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
*   **Framework:** [TanStack Start](https://tanstack.com/router/v1/docs/start/overview) (Server-Side Rendering built on TanStack Router)
*   **Routing:** [TanStack Router](https://tanstack.com/router) (Strictly typed, file-based routing)
*   **State Management & Data Fetching:** [TanStack Query](https://tanstack.com/query) (React Query)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with native CSS variables and modern custom utilities
*   **UI Components:** Custom components built with Radix UI primitives via [Shadcn UI](https://ui.shadcn.com/)
*   **Animations:** Scroll-reveal wrappers powered by custom animation utilities (`tw-animate-css`)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Data Visualization:** [Recharts](https://recharts.org/)

---

## 📁 Directory Structure

```text
mPayhub/
├── bun.lock                 # Bun lockfile (legacy package manager choice)
├── bunfig.toml              # Bun configuration
├── components.json          # Shadcn CLI configuration
├── eslint.config.js         # ESLint configuration (Flat config)
├── package.json             # Scripts, dependencies, and devDependencies
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite bundler configuration using @lovable.dev presets
└── src/
    ├── assets/              # Static assets (images, logos, etc.)
    ├── components/
    │   ├── site/            # Custom site components (Nav, Footer, PageHeader, Reveal animations)
    │   └── ui/              # Shadcn reusable UI primitives (Buttons, Accoridons, Dialogs, etc.)
    ├── hooks/               # Custom hooks (e.g., use-mobile.tsx)
    ├── lib/                 # Core utilities
    │   ├── api/             # API connection helpers
    │   ├── error-capture.ts # SSR boundary error listener
    │   ├── error-page.ts    # Styled HTML templates for 500 fallback rendering
    │   ├── lovable-error-reporting.ts # Error tracking and reporting
    │   └── utils.ts         # Utility class merging functions (clsx + tailwind-merge)
    ├── routes/              # File-based routes (TanStack Router)
    │   ├── __root.tsx       # Main HTML shell, font preconnects, query client wrapper, and toaster
    │   ├── index.tsx        # Landing Page
    │   ├── about.tsx        # Mission, values, milestone journey, and team overview
    │   ├── services.tsx     # Full services catalog
    │   ├── pricing.tsx      # Partner plans and onboarding timeline
    │   ├── contact.tsx      # Contact form, support desk, and interactive FAQ accordion
    │   └── routeTree.gen.ts # Auto-generated TanStack Router tree
    ├── server.ts            # Entrypoint for Nitro SSR bundler & error wrapping
    ├── start.ts             # Entrypoint for TanStack client-side hydration
    └── styles.css           # Tailwind v4 configuration, OKLCH design variables, and global overrides
```

---

## 🚦 File-Based Routing Conventions

The app utilizes **TanStack Router's file-based routing** layout in `src/routes/`:

| File | URL Mapping | Purpose |
| :--- | :--- | :--- |
| `__root.tsx` | N/A (App Shell) | Global layout, Google fonts, state providers, and page wrapper |
| `index.tsx` | `/` | mPayHub landing page with trust indicators & onboarding links |
| `about.tsx` | `/about` | Company goals, growth journey stages, and values |
| `services.tsx`| `/services` | Detailed breakdown of utility and banking offerings |
| `pricing.tsx` | `/pricing` | Tiered agent structures and step-by-step onboarding walkthrough |
| `contact.tsx` | `/contact` | Lead generation form, contact directory, and interactive FAQ |

---

## 🛠️ Setup & Running Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (recommended version `v18+` or `v20+`).

### 1. Install Dependencies
Run the following command to download and configure dependencies:
```bash
npm install
```

### 2. Start the Development Server
Run the project locally in development mode (with hot module replacement):
```bash
npm run dev
```
The server will start, and the URL (usually `http://localhost:3000` or similar) will be displayed in the terminal.

### 3. Build for Production
To bundle the application for production, compile the code, and compile the TanStack Start SSR assets:
```bash
npm run build
```
This runs `vite build` which optimizes code and prepares server bundles using the Nitro build engine.

### 4. Preview the Build
To run the production-built bundle locally for testing:
```bash
npm run preview
```
