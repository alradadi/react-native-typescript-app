<p align="center"><img alt="gif"  src="https://user-images.githubusercontent.com/16872175/74068264-41124200-4a0c-11ea-82c9-39499ff4d6ac.gif" width="250" ></p>

<h1 align="center">
  React Native Typescript App
</h1>

This is a react native starter app that I use to get me started with my projects. It's setup with react-native-navigation and some example screens.


## Development
- Make sure your react native environment is setup for native development as explained [here.](https://facebook.github.io/react-native/docs/getting-started) 

- To run on iOS:
    ```
     cd ios && pod install
     yarn ios
    ```
- To run on Android:
    ```
    yarn android
    ```
  
## Included Packages:
- [react-native (0.63.2)](https://github.com/facebook/react-native)
- [react-native-navigation](https://github.com/wix/react-native-navigation)
- [rnn-hooks](https://github.com/alradadi/rnn-hooks)
- [eslint-config-rn-ts](https://github.com/alradadi/eslint-config-rn-ts)
- [babel-plugin-transform-remove-console](https://www.npmjs.com/package/babel-plugin-transform-remove-console)



## Usage

Some helpful navigation hooks are provided by [rnn-hooks](https://github.com/alradadi/rnn-hooks) to simplify working with navigation.

- `useNav`
- `useNavigationButtonPressed`

```
 const nav = useNav();

  const handlePush = () => {
    nav.push(RandomScreen, { color: 'red' });
  };
```
See the [HomePage](./src/components/HomePage.tsx) component to see how it is used.

