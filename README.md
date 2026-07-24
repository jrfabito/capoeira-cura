# Capoeira Cura Website

Welcome to the official marketing website for the **Capoeira Cura** group! This project is a modern, responsive, high-fidelity single-page application built to showcase the group's philosophy, instructors, class schedules, and frequently asked questions.

## 🚀 Tech Stack

This project is built using modern web development technologies to ensure top-tier performance and a premium user experience:

- **Framework:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) for robust, type-safe code
- **Build Tool:** [Vite](https://vitejs.dev/) for lightning-fast development and optimized production builds
- **Styling:** Vanilla CSS with a focus on modern design principles (glassmorphism, smooth gradients, responsive design)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) for fluid, dynamic micro-interactions and scroll reveals
- **Linting:** [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) for fast and effective code linting

## 📁 Project Structure

```text
src/
├── components/       # Reusable React components (Header, Hero, FAQ, Contact, etc.)
├── assets/           # Local assets like logos and static SVGs
├── App.tsx           # Main application layout and component assembly
├── App.css           # Global layout and structural styling
├── index.css         # Global design system, CSS variables, and utility styles
└── main.tsx          # Application entry point
public/
├── assets/           # High-resolution images and videos used across the site
└── favicon.svg       # Site favicon
```

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jrfabito/capoeira-cura.git
   ```
2. Navigate into the project directory:
   ```bash
   cd capoeira-cura/website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Your app will be available at `http://localhost:5173/`.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be located in the `dist/` directory, ready to be deployed to your hosting provider of choice.

## 🎨 Design System

The website features a carefully curated aesthetic:
- **Typography:** Uses modern Google Fonts (Inter, Outfit) for crisp readability.
- **Color Palette:** Warm, vibrant, and energetic tones reflecting the spirit of Capoeira.
- **Micro-animations:** Subtle hover effects and scroll-based reveals ensure an engaging and interactive experience.

## 📜 License

This project is open-source and available under the MIT License.

