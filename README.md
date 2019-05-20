# ezwc-loader

Webpack loader for [EZWC](https://github.com/pynklynn/ezwc). Requires Webpack version 4.

## Usage

Install the loader:

```shell
$ npm install --save-dev ezwc-loader
```

Add the configuration to the `webpack.config.js` file:

```js
module.exports = {
  ...
  module: {
    rules: [{
      test: /\.ezwc$/,
      use: [
        'ezwc-loader'
      ]
    }]
  }
};
```

(c) 2019 Pynk Lynn LLC
