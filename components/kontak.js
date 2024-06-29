import React from 'react';
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const data = [
  { 
    id: '1', 
    judul: 'Natya Octaviana', 
    telpon: '085721884434',
    gambar: require('../assets/natya.jpg'),
    alamat: 'Jln.limus nunggal',
    hobi: 'Menari',
    email: 'natyaoctaviana@gmail.com',
  },
  { 
    id: '2', 
    judul: 'Dian Sela Anjelina', 
    telpon: '08156193245', 
    gambar: require('../assets/dian.jpg'),
    alamat: 'Jln. Jagaraksa permai Gang Amris',
    hobi: 'Membaca Buku',
    email: 'dian0506@gmail.com',
  },
  { 
    id: '3', 
    judul: 'Zidane De Raihan', 
    telpon: '081382944490', 
    gambar: require('../assets/zidan.jpg'),
    alamat: 'Jln Cijangkar RT 07 RW 08',
    hobi: 'Bermain Musik',
    email: 'zidanede@gmail.com',
  },
  { 
    id: '4', 
    judul: 'Abdullah Mahdi', 
    telpon: '087772243468', 
    gambar: require('../assets/mahdi.jpg'),
    alamat: 'Jl.Cibeureum Hilir',
    hobi: 'Fotografi',
    email: 'abdulmahdi99@gmail.com',
  },
  { 
    id: '5', 
    judul: 'Moch Azkiya', 
    telpon: '085871287578', 
    gambar: require('../assets/azkiya.jpg'),
    alamat: 'Jl. Cisaat Kadudampit',
    hobi: 'Bermain Sepak Bola',
    email: 'azykiyaa@gmail.com',
  },
  { 
    id: '6', 
    judul: 'Rafi Maulana Putra', 
    telpon: '0857233345631', 
    gambar: require('../assets/rafi.jpg'),
    alamat: 'Kp.cirumput RT.05/04 des. Selaawi kec Sukaraja kab.Sukabumi ',
    hobi: 'Menonton Film',
    email: 'rafimaulana@gmail.com',
  },
  { 
    id: '7', 
    judul: 'Fahkmi Imam Taufik', 
    telpon: '089517053223', 
    gambar: require('../assets/fahkmi.jpg'),
    alamat: 'Jln Selabintana Km.5 ',
    hobi: 'Gaming',
    email: 'fahkmii1010@gmail.com',
  },
  { 
    id: '8', 
    judul: 'Iqbal Rabbani', 
    telpon: '085793438973', 
    gambar: require('../assets/iqbal.jpg'),
    alamat: 'Jl.surya kencana',
    hobi: 'Menyanyi',
    email: 'rabannibal@gmail.com',
  },
  { 
    id: '9', 
    judul: 'Dani Akhmad Maulana', 
    telpon: '085219971516', 
    gambar: require('../assets/dani.jpg'),
    alamat: 'Jln Pelda Suryanta No.7',
    hobi: 'Mengoding',
    email: 'rdakhmad140104@gmail.com',
  },
  { 
    id: '10', 
    judul: 'Agung Bahtiar', 
    telpon: '087772243468', 
    gambar: require('../assets/agung.jpg'),
    alamat: 'Jln Keramat',
    hobi: 'Travelling',
    email: 'Aljabarbara2@gmail.com',
  },
];

const KontakItem = ({ judul, gambar, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
    <Image source={gambar} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{judul}</Text>
    </View>
  </TouchableOpacity>
);

export default function Kontak({ navigation }) {
  const renderItem = ({ item }) => (
    <KontakItem
      judul={item.judul}
      telpon={item.telpon}
      gambar={item.gambar}
      alamat={item.alamat}
      onPress={() => navigation.navigate('DETAIL KONTAK TEMAN SAYA', item)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.flatlistContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  flatlistContainer: {
    paddingBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#87CEEB', // Sky blue background
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    marginLeft: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Helvetica', // Font Helvetica
    color: '#333',
  },
});