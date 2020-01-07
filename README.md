[![Version](https://img.shields.io/npm/v/gatsby-plugin-provide-react.svg)](https://www.npmjs.com/package/gatsby-plugin-provide-react)
[![Downloads Total](https://img.shields.io/npm/dt/gatsby-plugin-provide-react.svg)](https://www.npmjs.com/package/gatsby-plugin-provide-react)

# gatsby-plugin-provide-react

You don't need to import React anymore.
Say good bye to:
```javascript
import React from "react"
```
Provides to all of your components React instances.

## Install

`$ npm i gatsby-plugin-provide-react`

or

`$ yarn add gatsby-plugin-provide-react`

## How to use

Add the plugin to your `gatsby-config.js`.

```javascript
module.exports = {
  plugins: [
    `gatsby-plugin-provide-react`
  ]
}
```

If you are using `eslint` you will need to put `/* globals React */` in all of your components. If you want to disable `eslint`, create an empty `.eslintrc` file in root of your file and wont need a globals comment. If you want to disable only this rule of eslint, use this config:
```javascript
{
  "rules": {
    "no-undef": "off"
  }
}
```