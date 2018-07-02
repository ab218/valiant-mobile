import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

export default class FadeInView extends React.Component {
  state = {
    tooltips: [
      'Roadside Assistance',
      'As difficult as it may seem, it is important that you remain calm.',
      'Do not argue with other drivers and passengers. Save your story for the police.',
      'Do not voluntarily assume liability or take responsibility, sign statements regarding fault, or promise to pay for damage at the scene of the accident.',
      'Stop. If your vehicle is involved in an accident and you don\'t stop, you may be subject to criminal prosecution.',
      'If no one is injured and total damage to all the vehicles involved appears to be less than $2,000, call a Collision Reporting Centre',
      'Otherwise. Call the police.',
      'If safe to do so, let\'s take some pictures to document the situation.'
    ],
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    console.log(Animated)
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 10000,              // Make it take a while
      }
    ).start();                        // Starts the animation

  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        // Bind opacity to animated value
        }}
      >
      <View style={styles.assist_button}>
        <IconM name="gesture-tap" size={50} color={'white'}>
          <Text style={styles.title}>{this.state.tooltips[0]}</Text>
        </IconM>
      </View>
        {this.props.children}
      </Animated.View>
    );
  }

}


const styles = StyleSheet.create({
  assist_button: {
    paddingTop: '20%',
    paddingBottom: '10%',
    backgroundColor: '#ffc000',
    width: '100%',
    alignItems: 'center'
  },
  nav_icon: {
    color: "#3b5998",
    fontSize: 50
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
    borderRadius: 0
  },
  nav: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    height: 80,
    width: '100%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});