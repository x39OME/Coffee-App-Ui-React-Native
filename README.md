# Coffee-App-Ui

## What did we use in the project?
### 1- [React Native Expo](https://reactnative.dev/)
### 2- [NativeWind](https://www.nativewind.dev/)
### 3- [React Navigation](https://reactnavigation.org/)
### 4- [npm react-native-linear-gradient](https://www.npmjs.com/package/react-native-linear-gradient)
### 5- [npm react-native-heroicons](https://www.npmjs.com/package/react-native-heroicons)
### 6- [react-native-animatable](https://www.npmjs.com/package/react-native-animatable)

## Steps
- npx create-expo-app Coffee-App-Ui
- npm i nativewind
- npm i --dev tailwindcss@3.3.2
- npx tailwindcss init
- npm install @react-navigation/native
- npx expo install react-native-screens react-native-safe-area-context
- npm install @react-navigation/native-stack
- npm i react-native-responsive-screen
- npm i expo-linear-gradient
- npm i react-native-heroicons
- npm i react-native-heroicons react-native-svg
- npm i react-native-snap-carousel
- ** npx expo install --fix **
- ** npx expo install **
```
// tailwind.config.js
module.exports = {
- content: [],
+ content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

3. Add the Babel plugin

Modify your babel.config.js

// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
+   plugins: ["nativewind/babel"],
  };
};
```

## Run The Project
- Download
- Open The Project
- Terminal
- npm i
- npx expo
- -w or Open Expo App On your Phone

## React Native Expo (Network Response Time Out Error)
### How To fix It
```
Windows

To open a port in the Windows firewall for TCP access On the Start menu, click Run, type WF.msc, and then click OK.

In the Windows Firewall with Advanced Security, in the left pane, right-click Inbound Rules, and then click New Rule in the action pane.

In the Rule Type dialog box, select Port, and then click Next.

In the Protocol and Ports dialog box, select TCP. Select Specific local ports, and then type the port number of the instance of the React port, such as 19000 for the default instance. Click Next.

In the Action dialog box, select Allow the connection, and then click Next.

In the Profile dialog box, select any profiles that describe the computer connection environment when you want to connect to the Database Engine, and then click Next.

In the Name dialog box, type a name and description for this rule, and then click Finish.

Similarly you can open port (8081) - 19001 too.
```

## Preview Final Project

#### Home Screen

<img src="homescreen.jpg" style="width:350px;" alt=" Home" />

