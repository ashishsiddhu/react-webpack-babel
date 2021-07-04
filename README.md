# Simple setup of react-webpack-babel

A ready to use simple react + webpack + babel setup.

## Features

- React 17
- Webpack 5
- Babel 7
- Hot Module Replacement

## Instructions

- `git clone https://github.com/ashishsiddhu/react-webpack-babel.git`
- cd react-webpack-babel
- Run `npm install`
- Run `npm start`, **localhost:3000** will open up in your default browser

**If you prefer to install things yourself you can follow the instructions below**

1.  Run `npm init` and type your answers to the questions or you can run `npm init -y` to say yes to every question - you will get default settings
2.  Install the following dependencies:
```
npm i react react-dom -S
```
3.  Install the following dev dependencies:
```
npm i react react-dom
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader file-loader css-loader style-loader webpack webpack-cli html-webpack-plugin webpack-dev-server

```
4. Update your scripts to the following:
```
"start": "webpack serve --mode development",
"build": "webpack --mode production"
```
5. Create **.babelrc** file with the following configurations:
```
{
   "presets": [
       "@babel/preset-env",
       "@babel/preset-react"
   ]
}
```
5. Create **webpack.config.js** file with the following configurations:
```
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Where files should be sent once they are bundled
 output: {
   path: path.join(__dirname, '/dist'),
   filename: 'index.bundle.js'
 },
  // webpack 5 comes with devServer which loads in development mode
 devServer: {
   port: 3000,
   watchContentBase: true
 },
  // Rules of how webpack will take our files, complie & bundle them for the browser 
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       use: {
         loader: 'babel-loader'
       }
     },
     {
       test: /\.(css|scss)$/,
       use: ['style-loader', 'css-loader']
     }
   ]
 },
 devtool: 'inline-source-map',
 plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};

```
7. Create **src** folder with **index.js** and **index.html** file.
8. **index.js** should have:
```
import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
  return <div>Hello Ashish Siddhu!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
```
9. **index.html** should have:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>React and Webpack5</title>
</head>
<body>
  <section id="index"></section>
</body>
</html>
```
10. Create **.gitignore** file and input **/node_modules/** and **/dist**.
