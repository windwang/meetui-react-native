import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'meetui-react-native'

class ButtonExample extends Component {
  handleButtonPress() {
    alert('Pressed!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.header}>Button without border</Text>
          <Button>I'm a button without border.</Button>
        </View>

        <View style={styles.section}>
          <Text style={styles.header}>Button with border</Text>
          <Button
            containerStyle={styles.buttonContainerStyle}
            style={styles.buttonStyle}
            styleDisabled={styles.disabledButtonStyle}
            onPress={() => this.handleButtonPress()}
          >
            Press Me!
          </Button>
        </View>

        <View style={styles.section}>
          <Text style={styles.header}>Disabled button</Text>
          <Button
            disabled
            styleDisabled={styles.disabledButtonStyle}
          >
            Disabled button
          </Button>
        </View>
      </View>
    )
  }
}

export default ButtonExample

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    paddingHorizontal: 15,
  },
  section: {
    marginBottom: 20,
  },
  header: {
    marginBottom: 6,
    color: '#6d6d72',
  },
  buttonStyle: {
    fontSize: 17,
    color: 'green',
  },
  buttonContainerStyle: {
    padding: 10,
    height: 45,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 4,
    backgroundColor: 'white',
  },
  disabledButtonStyle: {
    color: '#c7c7cd',
  }
})
