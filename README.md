Description of Each File

    components/ForgotPassword.jsx:
        Component for the "Forgot Password" page where users request a password reset link.
        Handles form submission and displays the response message.

    components/ResetPassword.jsx:
        Component for the "Reset Password" page where users enter a new password.
        Validates the token from the URL and handles form submission to reset the password.

    services/authService.js:
        Contains functions for interacting with the back-end API to request a password reset and reset the password.

    App.js:
        Main application component that sets up routing for the application using react-router-dom.

    index.js:
        Entry point for the React application, renders the App component and includes Bootstrap CSS for styling.

    styles/custom.css (Optional):
        Custom CSS file for additional styling if needed. You can include this in your project to override or add specific styles.


Package Versions

Make sure to install the latest versions of the required libraries using the following commands:
npm install react-router-dom@latest axios@latest react-bootstrap@latest bootstrap@latest
