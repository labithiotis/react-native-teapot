## React Native Boilerplate

A *React Native* boilerplate, that focuses on providing a great starting ground to make a solid app.

### What's included? 

- React Native
- Redux
- Redux [promise](https://www.npmjs.com/package/redux-promise-middleware) requests
- Redux [persist](https://www.npmjs.com/package/redux-persist) for offline handling
- Routing with [react-navigation](https://www.npmjs.com/package/react-navigation)
- React [storybook](https://www.npmjs.com/package/@kadira/storybook)
- [Jest](http://facebook.github.io/jest/) testing with examples and snapshots
- Image, Loading and Error components
- Shared native styles and colors (uses [color](https://www.npmjs.com/package/color) module)
- Code Styling with EsLint and Prettier
- Image component with loading progress and error handling
- [Fabric Crashlytics](https://fabric.io)
- [Google AdMob](https://www.google.co.uk/admob/)

#### Todo - Roadmap
- Push Notifications
- In App Purchases
- Flow
- Universal Code - React-Native-Web
- Maybe implement Google Firebase for Analytics, Crash Reporting, and Push Notifications

The boilerplate uses the generic name of `App` for all RN references, along with a clean git history.

## Setup

```bash
## Repo
git clone https://github.com/labithiotis/react-native-teapot
mv react-native-teapot YOUR_APP_NAME
cd YOUR_APP_NAME

## Setup
yarn
cd ios && install pods && cd ..
yarn start

## Open new tab
yarn start:ios
yarn start:android
```

Set your API keys AdMob and Fabric, I would recommend you follow their install instructions as they explain where to update the API keys

## Overview of source files

The code is split into `common` and `native`, the common contains some shared code and all redux state.
Its setup this way to allow reuse of code between platforms native and web.

## Common

|Path||
|:--|:--|
|routes.js|All the app navigation routes used by React Navigation. Each route key needs to be unique including path. The route has `screenOptions` to define for adBanner and status bar.|
|config.js|A shared [config](./src/common/config.js) mapped to screenProps vi `mapStateToProps`|
|stores|Contains all the redux stores along with a shared screenProps and mapDispatchToProps.|
|locales|Here are the apps locales, the defined locale is applied in screenProps.|

## Native

|Path||
|:--|:--|
|components|Has shared components used by views|
|pages|Where all the app pages are contained, you can wrap your page with a higher order ../Page component that contains some logic to wrap pages with banners defined in routes.|
|styles|Some common styles, it exports shared AppStyles or Colours or ColourStyles like `whiteTextGlow`|

## Storybook
Storybook allows you to test components in isolation, use `yarn storybook` (make sure `yarn start` is stopped).

## Testing
Tests are mixed in next to source and identified by files ending in `.test.js`. There is a global setup file for Jest at [/jestSetup.js](/jestSetup.js), where some global mocks are defined.

## FAQ

### Upgrading React Native

Use [react-native-git-upgrade](https://www.npmjs.com/package/react-native-git-upgrade)

```
yarn global add react-native-git-upgrade
cd MyApp
react-native-git-upgrade
```