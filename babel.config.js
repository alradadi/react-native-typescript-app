module.exports = {
  env: { production: { plugins: ['transform-remove-console'] } },
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': '.',
        },
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
