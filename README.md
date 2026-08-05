# 📚 Chai Reader

A modern AI-powered online bookstore built with **Next.js 16**, **React 19**, **TypeScript**, **Redux Toolkit**, and **Tailwind CSS**. The application provides a clean and responsive interface for discovering books across multiple categories with reusable UI components and a scalable architecture.

---

# Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Redux Toolkit
- React Redux
- TanStack Query
- Framer Motion
- Lucide React

---

# Project Structure

```
src/
├── app/
├── features/
│   └── browse/
├── shared/
│   ├── components/
│   ├── layout/
│   ├── ui/
│   ├── header/
│   └── footer/
├── store/
└── styles/
```

The project follows a **feature-based architecture** where each feature owns its UI, hooks, and related logic.

---

# Setup Instructions

## 1. Clone the repository

```bash
git clone <repository-url>
```

## 2. Navigate to the project

```bash
cd book-app
```

## 3. Install dependencies

```bash
npm install
```

## 4. Start the development server

```bash
npm run dev
```

## 5. Open the application

```
http://localhost:3000
```

---

# How to Run the Project

Development

```bash
npm run dev
```

Production Build

```bash
npm run build
```

Start Production Server

```bash
npm start
```

Lint

```bash
npm run lint
```

---

# Features

- Browse Books
- Hero Banner
- Genre Explorer
- New Arrivals
- Recommendations
- Best Sellers
- Crime Fiction
- Non Fiction
- Academics
- Business
- Technology
- Classics
- Famous Authors
- Speak With Authors
- Wishlist
- Shopping Cart
- Search
- Responsive Layout
- Smooth Animations

---

# Assumptions Made

- The UI is based entirely on the provided Figma design.
- Authentication and backend APIs are outside the scope of this implementation.
- Static JSON/mock data is used until APIs become available.
- Images are expected to be placed under the `public/` directory.
- Navigation within the Browse page uses smooth scrolling to section IDs.
- The application is optimized primarily for desktop, with responsive support for smaller screens.

---

# Libraries Used

| Library | Purpose |
|----------|---------|
| Next.js | Framework |
| React | UI Library |
| TypeScript | Type Safety |
| Tailwind CSS | Styling |
| Redux Toolkit | State Management |
| React Redux | Redux Bindings |
| TanStack Query | Server State Management |
| Framer Motion | Animations |
| Lucide React | Icons |

---

# Trade-offs

- Static data is currently used instead of live API integration to focus on the UI implementation.
- Some repeated UI patterns could be further abstracted into configurable components as the application grows.
- Carousels are currently lightweight and can be enhanced with dedicated slider libraries if advanced interactions are required.
- Images are loaded from the local `public` directory instead of a CDN.

---

# Improvements with More Time

- Integrate backend APIs for books, authors, and recommendations.
- Add authentication and user profiles.
- Implement real wishlist and cart persistence.
- Add pagination and infinite scrolling.
- Improve accessibility (ARIA labels, keyboard navigation, screen reader support).
- Add unit and integration tests using Jest and React Testing Library.
- Implement end-to-end testing with Playwright.
- Optimize performance with route-level code splitting and image optimization.
- Add dark mode support.
- Add localization and multi-language support.
- Implement AI-powered book recommendations and semantic search.
- Improve carousel interactions with touch gestures and keyboard controls.
- Add skeleton loaders, error boundaries, and offline support.

---

# Design Decisions

- Feature-based folder structure for scalability.
- Reusable shared UI components.
- Redux Toolkit for global client state.
- TanStack Query reserved for server state.
- Tailwind CSS utility-first styling.
- Framer Motion used for lightweight animations.
- Component composition prioritized over deeply nested inheritance.

---

# Future Scope

- Book Details
- Reviews & Ratings
- Checkout & Payments
- Order Tracking
- Reading History
- AI Chat with Books
- Admin Dashboard
- CMS Integration

---

# License

This project is intended for educational and assessment purposes.
