import React from 'react';
import { useRef } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Animated } from 'react-native';
import {TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import data from '../src/data'

const {width} = Dimensions.get('window')

export default function Details({navigation}) {
  const scrollX = useRef(new Animated.Value(1)).current
  const Slider = ({item, index, scrollX}) => {
    
    const translateX = scrollX.interpolate({
      inputRange: [(index - 1) * width, index * width, (index + 1) * width],
      outputRange: [-width / 2, 0, width / 2]
    });

    const scale = scrollX.interpolate({
      inputRange: [(index - 1) * width, index * width, (index + 1) * width],
      outputRange: [.7, 1.1, .7]
    });

    return (
      <View style={{width}}>
        <View style={styles.slider}>
          <View style={styles.sliderWrapper}>
            <Text style={styles.sliderText}>{item.name}</Text>
            <View style={styles.rating}>
              <Octicons name="star" size={15} style={styles.star}/>
              <Octicons name="star" size={15} style={styles.star}/>
              <Octicons name="star" size={15} style={styles.star}/>
              <Octicons name="star" size={15} style={styles.star}/>
              <Octicons name="star" size={15} style={styles.star}/>
            </View>
          </View>
          <Animated.Image source={item.image} style={[styles.sliderImage, {
            transform: [
              {
                translateX
              },
              {
                scale
              }
            ]
          }]}/>
        </View>
        <View 
          style={{
            marginTop: -100,
            width: 150,
            height: 150,
            borderRadius: 150,
            backgroundColor: '#f5f4f4',
            alignSelf: 'center',
            transform: [{rotateX: '75deg'}],
          }}
        />
      </View>
    )
  }
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <SafeAreaView>
        <View style={styles.wrapper}>
          <TouchableWithoutFeedback 
            onPress={() => navigation.navigate('Home')}
            style={styles.backButton}>
            <Feather name="chevron-left" size={24}/>
          </TouchableWithoutFeedback>
          <View style={styles.cartButton}>
            <Ionicons name="cart-outline" size={32} style={{color: '#036637'}} />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <View>
        <Animated.FlatList
          data={data}
          keyExtractor={data => data.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToInterval={width}
          scrollEventThrottle={18}
          decelerationRate={0}
          contentContainerStyle={{
            alignItems: 'center',
          }}
          renderItem={({item, index}) => (
          <Slider item={item} index={index} scrollX={scrollX}/>
          )}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
        />
      </View>  
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6f6f6',
    elevation: 1,
  },
  cartButton: {
    flexDirection: 'row',
  },
  badge: {
    width: 15,
    height: 15,
    right: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#036637',
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  slider: {
    alignItems: 'center',
  },
  sliderWrapper: {
    alignItems: 'center',
  },
  sliderText: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 24,
    color: '#555',
  },
  rating: {
    flexDirection: 'row',
  },
  star: {
    color: '#ffd206',
    marginTop: 5,
  },
  sliderImage: {
    width: '100%',
    height: width / 1.5,
    resizeMode: 'contain',
    marginVertical: 30,
    zIndex: 1,
  }
})