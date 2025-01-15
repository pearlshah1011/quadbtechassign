import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Main');
    }, 6000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/splash-icon.png')} 
        style={styles.image} 
        resizeMode="contain" // Adjust to "contain" if needed
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Replace with your desired color

  },
  image: {
    width: '100%', // Full width of the screen
    height: '100%', // Full height of the screen
  },
});

export default SplashScreen;
