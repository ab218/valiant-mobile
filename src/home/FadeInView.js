import React from 'react';
import { Animated, Alert, AppRegistry, Button, StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { Tile } from 'react-native-elements';

export default class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    console.log(Animated)
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 1000,              // Make it take a while
      }
    ).start();                        // Starts the animation

  }

  render() {

    const { navigate } = this.props.navigation;
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        // Bind opacity to animated value
        }}
      >
      <Tile 
        imageSrc={ require('./../../assets/images/roadside.jpg')}    
        height={200}
        title={'Tap For Roadside Assistance'}
        featured
        onPress={()=> navigate('options')}
      />
        {this.props.children}
      </Animated.View>
    );
  }

}

const styles = StyleSheet.create({
  assist_button: {
    height: '37%',
    paddingBottom: '5%',
    backgroundColor: '#ffc000',
    width: '100%',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
    borderRadius: 0
  }
});