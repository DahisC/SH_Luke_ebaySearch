module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": "airbnb",
    "rules": {
        // "indent": ["error", 4],
        "indent": [2, 4, {"SwitchCase": 1}],
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "import/extensions": [".js", ".jsx"],
        "react/forbid-prop-types": [false]
    }
};