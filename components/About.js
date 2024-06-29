import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>About Screen</Text>
      </View>
      <TouchableOpacity 
        style={styles.buttonContainer} 
        onPress={() => navigation.navigate('DAFTAR KONTAK TEMAN SAYA')}
      >
        <Text style={styles.buttonText}>GOTO KONTAK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#87CEEB', // Optional background color for the container
  },
  box: {
    padding: 20,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Lucida Bright',
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: '#4169E1', // Light blue background
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000000', // Black text color
    fontSize: 16,
    fontFamily: 'Lucida Bright', // Font style Lucida Bright
  },
});

export default About;
