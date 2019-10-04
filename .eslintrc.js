module.exports = {
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-console': ['off'],
    'react/display-name': ['off'],
    'no-unused-vars': ['warn'],
    'require-path-exists/exists': ['off']
  },
  extends: [
    '8select', 
    'plugin:react/recommended',
  ],
  settings:  {
    react:  {
      version: "16.10.2",  
    },
  },
}
