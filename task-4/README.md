# Responsive User Management Application

A modern, responsive Vue 3 + TypeScript application for displaying and managing user data from an external API. Features a professional UI, table-like user listing, and a modal for detailed user information.

## Features
- Fetches user data from [JSONPlaceholder User API](https://jsonplaceholder.typicode.com/users)
- Responsive, accessible table layout with modern design
- Clickable email and website links
- User detail modal with Google Maps integration
- Client-side user deletion with instant feedback
- Loading and error states
- Keyboard and mouse accessibility for modal
- Built with Vue 3, TypeScript, Pinia, CSS Modules, and Vitest

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Setup
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Build for Production
```sh
npm run build
```

### Run Unit Tests
```sh
npm run test:unit
```

## Project Structure
```
task-4/
  src/
    components/
      UserTable.vue         # User list table component
      UserModal.vue         # User detail modal component
      __tests__/
        UserTable.spec.ts   # Unit tests for UserTable
        UserModal.spec.ts   # Unit tests for UserModal
    types/
      user.types.ts         # TypeScript interfaces for user data
    App.vue                 # App entry
    main.ts                 # App bootstrap
```

## Tech Stack
- [Vue 3](https://vuejs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Pinia](https://pinia.vuejs.org/) (state management, ready for extension)
- [CSS Modules](https://vue-loader.vuejs.org/guide/css-modules.html)
- [Vitest](https://vitest.dev/) + [@vue/test-utils](https://test-utils.vuejs.org/) (unit testing)

## Accessibility & Responsiveness
- Fully keyboard accessible modal (close with Escape, overlay, or close icon)
- Responsive design for desktop, tablet, and mobile

## License
MIT
