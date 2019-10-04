module.exports = function(api) {
  api.cache(false)

  return {
    presets: [
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
          corejs: 3,
          targets: {
            ie: '10',
          },
        },
      ],
    ],
  }
}
