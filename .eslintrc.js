module.exports = {
    env: {
        "browser": true,
        "es2022": true,
        "node": true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module",
        "requireConfigFile": false
    },
    plugins: [
        "react", "jsx"
    ],
    rules: {
    },
    parser: "@babel/eslint-parser",
    overrides: [{
        "files": ["**/*.ts","**/*.tsx"],
        "parser": 'typescript-eslint-parser',
        "rules": {
          'no-undef': 'off'
        }
    }]
};