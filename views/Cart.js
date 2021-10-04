import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Animated } from 'react-native';
import {FlatList, Swipeable, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { interpolate } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import data from '../src/data'


export default function Cart({navigation}) {

  const RenderRight = ({progress}) => {
    
    const opacity = progress.interpolate({
      inputRange: [-40, 0],
      outputRange: [1, 0]
    });

    return (
      <TouchableOpacity>
        <Animated.View style={[styles.rightActions,{ opacity}, ]}>
          <Feather name="trash-2" size={30} style={{color: '#ffffff'}}/>
        </Animated.View>
      </TouchableOpacity>
    )
  }

  const item = ({item}) => {
    return (
      <View style={styles.itemwrapper}>

        <Swipeable renderRightActions={(dragX, progress) => <RenderRight progress={progress} />}>
        <View style={styles.item}>

          <View>
            <Image source={item.image} style={styles.itemImage}/>
          </View>

          <View style={{alignItems: 'flex-start', width: 180}}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <View style={styles.qtyWrapper}>
              <View style={styles.qtyBtn}>
                <Feather name='minus' size={18}/>
              </View>
            <Text style={styles.qtyText}>1</Text>
            <View style={styles.qtyBtn}>
              <Feather name='plus' size={18}/>
            </View>
            </View>            
          </View>
          
        </View>
        </Swipeable>
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

      <View style={styles.bottomOrder}>
        <View>
          <Text style={{color: '#036637', fontWeight: 'bold', fontSize: 18,}}>Total Price</Text>
          <Text style={{color: '#5a5a5a', fontWeight: 'bold', fontSize: 18,}}>IDR 75.000</Text>     
        </View>
        <TouchableOpacity style={styles.orderBtn}>
          <Text style={{color: '#ffffff', fontSize: 16,}}>Order Now</Text>
        </TouchableOpacity>
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
  },
  qtyText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  rightActions: {
    backgroundColor: '#036637',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: 60,
  },
  bottomOrder: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingBottom: 60,
    paddingHorizontal: 20,        
  },
  orderBtn: {
    backgroundColor: '#036637',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  }
})