# meetui-react-native
collection of React Native ui components

## installation
```
npm install meetui-react-native --save OR npm i meetui-react-native -S
```

## NavigationBar
![NavigationBar](http://t.cn/R5RWvPY)
### How to use?
```jsx
import React, { Component } from 'react'
import { NavigationBar } from 'meetui-react-native'

class NavigationBarExample extends Component {
  render() {
    const leftButtonConfig = {
      title: 'Back',
      handler: () => alert(`I'm back!`),
    }

    const rightButtonConfig = {
      title: 'Forward',
      handler: () => alert(`I'm forward!`),
    }

    const titleConfig = {
      title: 'Title',
    }

    return (
      <View style={{ flex: 1, }}>
        <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig}
        />
      </View>
    )
  }
}
```

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
