import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

import ButtonExample from './src'

class Button extends Component {
  render() {
    return (
      <ButtonExample />
    )
  }
}

AppRegistry.registerComponent('Button', () => Button)
