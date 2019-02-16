# React starterpack

This project serves as a basic template for any React application.

It comes with:

* A single React Component
* A webpack config file
* An html file
* A bootstrap function, to load react into your html.


NOT included in this template:

* Redux
* Server-side rendering

## Getting started
To do anything with this code, you need to install node.js on your local machine, then run:
```
npm install
```
This will install all dependencies needed by this project into the *node_modules* folder.

## Compilation
This app compiles with webpack.
```
npm run build
```

Running this build command will generate a bundle.js file in the public/ folder


## Serving
To view this React app, run the following command:
```
npm start
```

This command uses the http-server package to host your react application.

While the server is running, open http://localhost:8080 in a web browser.
You should see the message 'Hello world!'.
