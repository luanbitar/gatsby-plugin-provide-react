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

## Common error

If you are getting: 
```
error  'React' must be in scope when using JSX
```

You need to create an empty `.eslintrc` in root of your folder. This error occurs from eslint.

If you are using eslint in your project, just update this key to your config:

```javascript
{
  "rules": {
    "no-undef": "off"
  }
}
```