module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-throw-expressions',
      '@babel/plugin-transform-runtime'
    ],
    env: {
      production: {
        plugins: ['transform-react-remove-prop-types', 'transform-react-constant-elements']
      }
    }
  };
  