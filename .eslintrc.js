{
  "root": true,

  "parser": "@typescript-eslint/parser",

  "plugins": [
    "import",
    "jsx-a11y",
    "react",
    "jest",
    "@typescript-eslint"
  ],

  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],

  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jasmine": true,
    "jest": true,
    "node": true
  },

  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "parser": "@typescript-eslint/parser",
    "plugins": ["typescript", "@typescript-eslint"],
    "ecmaFeatures": {
      "jsx": true,
      "generators": true,
      "modules": true,
      "classes": true,
      "experimentalObjectRestSpread": true
    }
  },

  "settings": {
    "import/ignore": [
      "node_modules",
      "\\.(json|css|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm)$"
    ],
    "import/extensions": [".js"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {},
      "node": {
        "extensions": [".js", ".json"]
      }
    },

    "react": {
      "version": require('./version.json').dependencies.react,
      "parser": "typescript"
    }
  },

  rules: {
    '@typescript-eslint/indent': ['error','tab'],
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-var-requires': ['warn'],
    '@typescript-eslint/array-type': ['warn'],
    '@typescript-eslint/member-delimiter-style': ['error',{
      "multiline": {
        "delimiter": "semi",
        "requireLast": true
      },
      "singleline": {
        "delimiter": "semi",
        "requireLast": true
      }
    }],
    'react/display-name': 0,
    'react/no-multi-comp': [1, { ignoreStateless: true }],
    'react/jsx-pascal-case': 1,
    'react/jsx-closing-bracket-location': [1, 'line-aligned'],
    'react/jsx-curly-spacing': [2, 'always'],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-indent': ['error', 'tab'],
    'react/jsx-indent-props': ['error', 'tab'],
    'react/jsx-key': 0,
    'react/jsx-max-props-per-line': [1, { maximum: 3 }],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-bind': 'off',
    'react/jsx-no-target-blank': 1,
    'react/jsx-no-undef': 1,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': 1,
    'react/no-danger': [1],
    'react/no-string-refs': [1],
    'react/no-deprecated': 1,
    'react/no-is-mounted': 2,
    'react/no-set-state': 0,
    'react/no-unknown-property': 2,
    'react/prefer-es6-class': [2, 'always'],
    'react/react-in-jsx-scope': 2,
    'react/require-render-return': 2,
    'react/self-closing-comp': ['error'],
    'react/sort-comp': [1],
    'react/sort-prop-types': 1,
    'react/prop-types': 0,
    'camelcase': 0,
    'no-useless-escape': 0,
    'no-case-declarations': 0,
    'no-prototype-builtins': "off",
    'no-mixed-operators': 'error',
    'new-cap': ['error', { properties: false }],
    'dot-notation': ['error', { allowPattern: '^[a-z]+(_[a-z]+)+$' }],
    'dot-location': ['error', 'property'],
    'quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'no-dupe-args': ['error'],
    'no-console': [1, { allow: ['info', 'error'] }],
    'indent': ['error', 'tab', { MemberExpression: 'off', SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    'semi': ['error', 'always'],
    'no-var': ['error'],
    'prefer-const': ['error'],
    'object-shorthand': ['error', 'always'],
    'quote-props': ['error', 'as-needed'],
    'no-array-constructor': ['error'],
    'no-new-object': ['error'],
    'array-callback-return': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': ['error', 'always'],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-arrow-callback': 'error',
    'arrow-spacing': ['error', { before: true, after: true }],
    'arrow-parens': ['error', 'always'],
    'no-iterator': 'error',
    'no-else-return': 'error',
    'no-empty-function': 0,
    'no-empty-pattern': 'error',
    'no-self-compare': 'error',
    'no-unused-expressions': 'error',
    'no-unused-vars': ['error',{"varsIgnorePattern": "[iI]gnored"}],
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-unneeded-ternary': 0,
    'no-nested-ternary': 'error',
    'no-useless-constructor': 'error',
    'no-duplicate-imports': 'error',
    'import/imports-first': 'error',
    'operator-assignment': ['error', 'always'],
    'yoda': 'error',
    'no-use-before-define': 'off',
    'import/no-unresolved': 'error',
    'import/export': 'error',
    'import/newline-after-import': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/order': ['error', {
      'newlines-between': 'never',
      'groups': [
        'builtin',
        'external',
        'parent',
        'sibling',
        'internal',
        'index'
      ]
    }],
    "one-var": ["error", {
      "var": "never",
      "let": "never",
      "const": "never"
    }],
    "no-alert": ["error"],
    "comma-style": ["error", "last"],
    "padded-blocks": ["error", "never"],
    "no-lonely-if": "error",
    "no-negated-condition": 1,
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 3 }],
    "no-whitespace-before-property": "error",
    "space-infix-ops": ["error", { "int32Hint": false }],
    "space-before-blocks": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "space-before-function-paren": ["error", "never"],
    "keyword-spacing": ["error", { "before": true }],
    "eqeqeq": ["error", "smart"],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "computed-property-spacing": ["error", "never"],
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "callback-return": "error",
    "no-mixed-requires": "error",
    "block-spacing": "error",
    "max-len": ["off", 120, {
      "tabWidth": 4,
      "ignoreComments": true,
      "ignoreTrailingComments": true,
      "ignoreUrls": true
    }]
  }
}
