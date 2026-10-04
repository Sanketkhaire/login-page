# Juice Shop Style Login Form

A simple login form inspired by the OWASP Juice Shop login page. It demonstrates both client-side and server-side validation of an email and password.

## What It Does

- Shows an email field and a password field.
- Blocks empty submissions on the front end.
- Checks that the email contains an `@` symbol and that the password is at least 8 characters long.
- Sends the details to a small Node.js server, which runs the same checks again. This matters because client-side validation alone can be bypassed.

## Project Files

- `index.html` — the form layout.
- `style.css` — the styling for the form.
- `script.js` — the client-side validation and the request to the server.
- `server.js` — the server that serves the page and runs the server-side validation.
- `package.json` — the project dependencies.

## How to Run

1. Install [Node.js](https://nodejs.org/) if it is not already installed.

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

   You should see `Server running at http://localhost:3000`.

4. Open your browser and go to:

   ```
   http://localhost:3000
   ```

   The login form will appear.

5. Try logging in. An empty field, an email without `@`, or a password shorter than 8 characters will be rejected. Valid details return a success message from the server.

## Notes

This project is for learning about input validation only. It does not store users or passwords, and it should not be used as a real authentication system.
