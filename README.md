# MediLocate Signup Form with React

This project contains a React implementation of the MediLocate signup form with client-side validation using React hooks.

## Features

- Form validation with specific requirements:
  - Password must be at least 8 characters
  - Email validation
  - Password matching validation
  - Required field validation
- Success and error message handling
- Simulated AJAX form submission
- Social signup options (Google, Facebook)
- Responsive design

## Running the application

### Quick Start (No Build)

For a quick start without setting up a React development environment:

1. Simply open `signup-react.html` in your browser
2. This uses CDN-hosted React and Babel to transform the JSX on the fly (not recommended for production)

### Using npm (Recommended for Development)

1. Make sure you have Node.js and npm installed
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `SignupForm.jsx` - The main signup form component with validation logic
- `App.jsx` - The root React component
- `index.jsx` - Entry point for the React application
- `signupStyles.css` - Styles for the signup form
- `signup-react.html` - HTML file that loads the React application

## Form Validation Rules

- Full Name: Required
- Email: Required, must be a valid email format
- Password: Required, must be at least 8 characters
- Confirm Password: Must match the password field

## AJAX Implementation

The form uses a simulated AJAX call for demonstration purposes. In a real application, you would replace the simulation with an actual API call using fetch or axios.

## Development Notes

- The project uses React hooks for state management
- Form validation is performed client-side
- Error messages are displayed inline below each input field
- Success messages are displayed at the top of the form 