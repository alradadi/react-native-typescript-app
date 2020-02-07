module.exports = {
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
