## NavigationBar
Customizable navbar for react-native

![NavigationBar](http://t.cn/R5RWvPY)

### Content
- [Installation](#installation)
- [Examples](#examples)
- [Getting started](#getting-started)
- [API](#api)
- [Usage with webpack](#usage-with-webpack)
- [Questions?](#questions)

### Examples
- [Basic](https://github.com/zhiquan-yu/react-native-navbar/tree/master/examples/Basic)
- [Custom Elements](https://github.com/zhiquan-yu/react-native-navbar/tree/master/examples/CustomElements)
- [Routing](https://github.com/zhiquan-yu/react-native-navbar/tree/master/examples/Routing)

### Getting started
In your `index.ios.js` file require `meetui-react-native` component:
```jsx
import { NavigationBar } from 'meetui-react-native';
```
Inside your component's `render` method, use `NavigationBar`:
```jsx
render() {
  const rightButtonConfig = {
    title: 'Next',
    handler: () => alert('hello!'),
  };

  const titleConfig = {
    title: 'Hello, world',
  };

  return (
    <View style={{ flex: 1, }}>
      <NavigationBar
        title={titleConfig}
        rightButton={rightButtonConfig} />
    </View>
  );
}
```

That's it, you're ready to go!

### API
- **style** - (Object, Array) - Style object or array of style objects
- **tintColor** - (String) - NavigationBar's tint color
- **statusBar** - (Object):
  - **style** - ('light-content' or 'default') - Style of statusBar
  - **hidden** - (Boolean)
  - **tintColor** - (String) - Status bar tint color
  - **hideAnimation** - ('fade', 'slide', 'none') - Type of statusBar hide animation
  - **showAnimation** - ('fade', 'slide', 'none') - Type of statusBar show animation
- **leftButton / rightButton** - (Object, React Element) - Either plain object with configuration, or React Element which will be used as a custom left/right button element. Configuration object has following keys:
  - **title** - (String) - Button's title
  - **tintColor** - (String) - Button's text color
  - **style** - (Object, Array) - Style object or array of style objects
  - **handler** - (Function) - onPress function handler
- **title** - (Object, React Element) - Either plain object with configuration, or React Element which will be used as a custom title element. Configuration object has following keys:
  - **title** - (String) - Button's title
  - **tintColor** - (String) - Title's text color

### Questions?
If you want to report a bug, please [submit an issue!](https://github.com/zhiquan-yu/react-native-navbar/issues/new)
