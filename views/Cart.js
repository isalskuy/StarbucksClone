import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Animated } from 'react-native';
import {FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import data from '../src/data'


export default function Details({navigation}) {  
  const item = ({item}) => {
    return (
      <View style={styles.itemwrapper}>
        <View style={styles.item}>
          <View>
            <Image source={item.image} style={styles.itemImage}/>
          </View>
          <View>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <View style={styles.qtyWrapper}>
              <View style={styles.qtyBtn}>
                <Feather name='minus' size={18}/>
              </View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>1</Text>
            <View style={styles.qtyBtn}>
              <Feather name='plus' size={18}/>
            </View>
            </View>            
          </View>
          
        </View>
      </View>
    )
  }
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <SafeAreaView>

        <View style={styles.wrapper}>

          <TouchableWithoutFeedback 
            onPress={() => navigation.navigate('Details')}
            style={styles.backButton}>
            <Feather name="chevron-left" size={24}/>
          </TouchableWithoutFeedback>

          <Text style={{fontSize: 18,
            fontWeight: 'bold',
            color: '#5a5a5a'}}>Cart Items</Text>

          <View style={styles.rightblnk}></View>
        </View>
      </SafeAreaView>

      <View>
        <FlatList data={data}
        keyExtractor={data => data.id}
        showsVerticalScrollIndicator={false}
        renderItem={item}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
    elevation: 1,
  },

  rightblnk: {
    width: 40,
    height: 40,
    color: '#00000000',
  },

  itemwrapper: {
    marginTop: 20,
    backgroundColor: '#f8f8f7',
    borderRadius: 20,
    marginHorizontal: 20,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  itemImage: {
    width: 80,
    height: 120,
    resizeMode: 'contain',
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#5a5a5a',
    marginBottom: 10,
  },

  qtyWrapper: {
    borderWidth: 1,
    borderColor: '#c2c2c2',
    flexDirection: 'row',
    borderRadius: 8,
    width: 95,
    height: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  qtyBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#c2c2c2',
    borderRadius: 8,
    height: 30,
    width: 30,
  }
})