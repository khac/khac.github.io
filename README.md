# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### deploy

1. Create a React App (If Not Already Created)
If you don’t have a React app yet, create one using:

sh
Copy
Edit
npx create-react-app my-app
cd my-app
2. Install gh-pages Package
gh-pages helps deploy your app easily. Install it:

sh
Copy
Edit
npm install --save-dev gh-pages
3. Configure package.json
Edit package.json:

Add the homepage field:

json
Copy
Edit
"homepage": "https://<your-github-username>.github.io/<repository-name>"
Add the deploy scripts under "scripts":

json
Copy
Edit
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
4. Initialize Git and Push to GitHub
If you haven't already set up a GitHub repository:

sh
Copy
Edit
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-github-username>/<repository-name>.git
git push -u origin main
5. Deploy the App
Run:

sh
Copy
Edit
npm run deploy
This will create a gh-pages branch and publish your app.

6. Enable GitHub Pages
Go to your repository on GitHub.

Navigate to Settings → Pages.

Under Source, select gh-pages branch and click Save.

Wait a few minutes, then visit:

php-template
Copy
Edit
https://<your-github-username>.github.io/<repository-name>/
7. Updating Your Site
After making changes, simply run:

sh
Copy
Edit
npm run deploy
Your updates will be published.

Let me know if you need further clarification! 🚀