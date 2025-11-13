# Login App - Question C

A React-based login application with form validation, state management, and persistent authentication.

## Features

- Email and password validation with Zod
- Context API for global authentication state
- localStorage persistence for login sessions
- Responsive design for mobile and desktop
- Form validation with react-hook-form
- Styled with styled-components

## Tech Stack

- React 18
- TypeScript
- Vite
- Zod (validation)
- react-hook-form
- styled-components
- Context API

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Valid Test Credentials

Use any of these credentials to log in:

| Email | Password |
|-------|----------|
| test@example.com | Test123!@# |
| admin@example.com | Admin123!@# |
| user@example.com | User123!@# |

## Password Requirements

- 8-16 characters long
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one symbol

## Features Implemented

- Login form with email and password fields
- Real-time validation with Zod schema
- Error messages for invalid credentials and format violations
- Welcome page after successful login
- Logout functionality
- Persistent login state with localStorage
- Responsive design for all screen sizes

## Design Considerations

### Form Management with react-hook-form
- Simplifies form state management and validation logic
- Reduces boilerplate code for handling form inputs
- Integrates seamlessly with Zod for schema-based validation
- Provides built-in error handling and form submission

### Component Decoupling
- Components are designed to be independent and reusable
- Presentational components receive data and callbacks via props
- Business logic is separated from UI rendering
- Easy to extract and reuse components in other parts of the application

### Global State with Context API
- Centralized authentication state management
- Eliminates prop drilling for user authentication data
- Scalable foundation for future state management needs
- Easy to extend with additional global state (theme, preferences, etc.)

### Future Extensibility
- Modular architecture allows easy addition of new features
- Context structure can be expanded to include user roles, permissions
- Component folder structure supports adding tests, utilities, and sub-components
- localStorage logic abstracted into `useLocalStorage` hook for reusability across the app
