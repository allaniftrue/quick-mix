module.exports = {
  "parser": 'babel-eslint',
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": false
  },
  "extends": ["eslint:recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [],
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error","unix"],
    "quotes": ["error","single"],
    "semi": ["error","always"],
    "no-console": ["warn", { "allow": ["info", "error"] }]
  }
};