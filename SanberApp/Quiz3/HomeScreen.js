import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Button,
} from 'react-native';

import data from './data.json';

const DEVICE = Dimensions.get('window');

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      totalPrice: 0,
    };
  }

  currencyFormat(num) {
    return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  updatePrice(price) {
    price = this.state.totalPrice + parseInt(price);
    this.setState({ totalPrice: price });
  }

  render() {
    console.log(data);
    return (
      <View style={styles.container}>
        <View
          style={{
            minHeight: 50,
            width: DEVICE.width * 0.88 + 20,
            marginVertical: 8,
          }}
        >
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text>
              Hai,{'\n'}
              {/* //? #Soal 1 Tambahan, Simpan userName yang dikirim dari halaman Login pada komponen Text di bawah ini */}
              <Text style={styles.headerText}>
                {/* {this.props.route.params.userName} */}
              </Text>
            </Text>

            {/* //? #Soal Bonus, simpan Total Harga dan state.totalPrice di komponen Text di bawah ini */}
            <Text style={{ textAlign: 'right' }}>
              Total Harga{'\n'}
              <Text style={styles.headerText}>
                {this.currencyFormat(this.state.totalPrice)}
              </Text>
            </Text>
          </View>
          <View></View>
          <TextInput
            style={{ backgroundColor: 'white', marginTop: 8 }}
            placeholder="Cari barang.."
            onChangeText={(searchText) => this.setState({ searchText })}
          />
        </View>

        <FlatList
          data={data.produk}
          renderItem={({ item }) => (
            <ListItem data={item} />
          )}
          numColumns={2}
        />

      

        {/* 
        //? #Soal No 2 (15 poin)
        //? Buatlah 1 komponen FlatList dengan input berasal dari data.json
        //? dan pada prop renderItem menggunakan komponen ListItem -- ada di bawah --
        //? dan memiliki 2 kolom, sehingga menampilkan 2 item per baris (horizontal)

        // Lanjutkan di bawah ini!
        */}
        {/* clue dapat dilihat di https://snack.expo.io/@kameyin/two-column-flatlist-(method-1) */}
       
      </View>
    );
  }
}

class ListItem extends React.Component {
  currencyFormat(num) {
    return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  //? #Soal No 3 (15 poin)
  //? Buatlah styling komponen ListItem, agar dapat tampil dengan baik di device

  render() {
    const data = this.props.data.item;
    return (
      <View style={styles.itemContainer}>
        <Image
          source={{ uri: data.gambaruri }}
          style={styles.itemImage}
          resizeMode="contain"
        />
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.itemName}>
          {data.nama}
        </Text>
        <Text style={styles.itemPrice}>
          {this.currencyFormat(Number(data.harga))}
        </Text>
        <Text style={styles.itemStock}>Sisa stok: {data.stock-1 }</Text>
        <Button title="BELI" color="blue" onPress={this.props.updatePrice} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  //? Lanjutkan styling di sini
  itemContainer: {
    width: DEVICE.width * 0.44,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 5,
  },
  itemImage: {
 
  },
  itemName: {
    
  },
  itemPrice: {
   
  },
  itemStock: {

  },
  itemButton: {

  },
  buttonText: {
    
  },
});
