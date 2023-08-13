{
    "extends": [
      "standard",
      "plugin:react/recommended"
    ],
    "plugins": [
      "react"
    ],
    "parserOptions": {
      "ecmaVersion": 12,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "env": {
      "browser": true,
      "es2021": true
    },
    "rules": {
      "react/prop-types": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "warn",
      "arrow-parens": [
        "error",
        "as-needed"
      ],
      "semi": [
        "error",
        "always"
      ],
      "quotes": [
        "error",
        "single",
        {
          "avoidEscape": true,
          "allowTemplateLiterals": true
        }
      ]
    }
  }
  