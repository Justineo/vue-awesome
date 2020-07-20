module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#bulb-rules
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'plugin:vue/strongly-recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    'prettier/standard'
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    quotes: [
      'error',
      'single',
      { allowTemplateLiterals: true, avoidEscape: true }
    ],
    'prefer-const': 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-template-curly-in-string': 'off',
    'no-case-declarations': 'off',
    // to many false positives
    'vue/no-side-effects-in-computed-properties': 'off',
    // fix unused var error for JSX custom tags
    'vue/jsx-uses-vars': 'error',
    'vue/require-default-prop': 'off',
    'vue/name-property-casing': ['error', 'kebab-case'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 0,
        closeBracket: 0,
        alignAttributesVertically: true
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'never'
      }
    ],
    'vue/no-v-html': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/arrow-spacing': ['error', { 'before': true, 'after': true }],
    'vue/block-spacing': ['error', 'always'],
    'vue/brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'vue/camelcase': ['error', { 'properties': 'never' }],
    'vue/comma-dangle': ['error', {
      'arrays': 'never',
      'objects': 'never',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never'
    }],
    'vue/dot-location': ['error', 'property'],
    'vue/eqeqeq': ['error', 'always', { 'null': 'ignore' }],
    'vue/key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
    'vue/keyword-spacing': ['error', { 'before': true, 'after': true }],
    'vue/no-empty-pattern': 'error',
    'vue/no-irregular-whitespace': 'error',
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': ['error', { 'words': true, 'nonwords': false }],
  }
}
