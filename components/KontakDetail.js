// components/KontakDetail.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const KontakDetail = ({ route, navigation }) => {
  const { judul, telpon, gambar, email, alamat, hobi } = route.params;

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Image source={gambar} style={styles.image} />
        <Text style={styles.title}>{judul}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.label}>Telepon:</Text>
            <Text style={styles.value}>{telpon}</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{email}</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.label}>Alamat:</Text>
            <Text style={styles.value}>{alamat}</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.label}>Hobi:</Text>
            <Text style={styles.value}>{hobi}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#1E90FF', // Dark blue background for outer container
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 20,
    borderRadius: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Times New Roman', // Font Times New Roman
  },
  infoContainer: {
    width: '80%',
    padding: 16,
  },
  infoBox: {
    backgroundColor: '#87CEEB', // Sky blue background
    borderRadius: 10,
    padding: 14,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Times New Roman', // Font Times New Roman
  },
  value: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'Times New Roman', // Font Times New Roman
  },
  button: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#fff', // Background white to match container
    borderWidth: 1,
    borderColor: '#4169E1', // Royal blue border
  },
  buttonText: {
    fontSize: 14,
    color: '#4169E1', // Royal blue text
    fontFamily: 'Times New Roman', // Font Times New Roman
  },
});

export default KontakDetail;
