module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "google"
  ],
  rules: {
    indent: ["error", 2, {
        "SwitchCase": 1
      }
    ],
    eqeqeq: "warn",
    "vue/attribute-hyphenation": [
      "error",
      "always"
    ],
    "vue/html-end-tags": "error",
    "vue/html-indent": [
      "error",
      2
    ],
    "vue/html-self-closing": "error",
    "vue/require-default-prop": "error",
    "vue/require-prop-types": "error",
    "vue/attributes-order": "error",
    "vue/html-quotes": [
      "error",
      "double"
    ],
    "vue/order-in-components": "error"
  },
  overrides: [
    {
      files:[
        "*.vue"
      ],
      rules: {
        "indent": ["off"],
        "vue/script-indent": ["error", 2, {
          "baseIndent": 1,
          "switchCase": 0,
          "ignores": []
        }]
      }
    }
  ]
}