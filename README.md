## React Redux Playground

## About

Explored the fundamentals and core concepts of React Redux, including side effects, asynchronous code/requests, and demonstrated real-time data management with a Firebase backend using Redux Toolkit. Also developed skills in using Redux DevTools for debugging.

The application/code primarily serves as a playground and may evolve in one direction or another in the future.

## Project Setup

To set up this project locally:

**1.** Clone the repository to your local machine and navigate to the project directory.

```
cd redux
```

**2.** Install the necessary dependencies.

```
npm install
```

**3.** Create a `firebase.js` file inside the `includes` directory with your Firebase configuration. In `includes/firebase.js`, add your Firebase Realtime Database URL:

```
export const firebaseURL = 'YOUR_FIREBASE_DATABASE_URL';
```

**4.** To start the development server, run:

```
npm start
```

or

```
npm run dev
```

**Firebase Configuration**

https://firebase.google.com/

**Important Security Notice:** The rules below set your database to be publicly readable and writable, which is not recommended for production environments!

For this project, you will need to enable Firebase Realtime Database. Set up the initial database rules for example as follows:

```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

**Important Security Notice:** The above rules set your database to be publicly readable and writable, which is not recommended for production environments.

### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
