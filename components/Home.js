import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <TouchableOpacity 
        style={styles.buttonContainer} 
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.buttonText}>Go to About</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEEB', // Light blue background
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Monaco', // Font style Monaco
    color: '#333',
    marginBottom: 24,
  },
  buttonContainer: {
    backgroundColor: '#ffffff', // Blue button background
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000000', // Black text color
    fontSize: 20,
    fontFamily: 'Monaco',
  },
});

export default Home;
