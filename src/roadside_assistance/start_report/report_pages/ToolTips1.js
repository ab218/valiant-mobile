import React from 'react';
import { Animated, Alert, AppRegistry, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { Tile } from 'react-native-elements';


export default class ToolTips1 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tooltips: [
        'Were going to run you through some tips that will help you through the insurance claim process',
        'First of all... As difficult as it may seem, it is important that you remain calm.',
        'Do not argue with other drivers and passengers. Save your story for the police.',
        'Do not voluntarily assume liability or take responsibility, sign statements regarding fault, or promise to pay for damage at the scene of the accident.',
        'Stop. If your vehicle is involved in an accident and you don\'t stop, you may be subject to criminal prosecution.',
        'If no one is injured and total damage to all the vehicles involved appears to be less than $2,000, call a Collision Reporting Centre',
        'Otherwise. Call the police.',
        'If safe to do so, let\'s take some pictures to document the situation.'
      ],
      index: 0,
    }
  }

  nextSlide = () => {
    if (this.state.index > this.state.tooltips.length - 2){
      const {navigate} = this.props.navigation
      navigate('Camera')
    }
    index = this.state.index + 1;
    this.setState({
      index
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{width: '100%', height: '100%'}} >
        <TouchableOpacity style={styles.container} onPress={this.nextSlide}>
          <Text style={styles.title}>
            {this.state.tooltips[this.state.index]}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
    borderRadius: 0
  }
});