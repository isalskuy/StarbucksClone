import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, FlatList, Image, Touchable} from 'react-native';
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import data from '../src/data'
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import {Dimensions} from 'react-native';


const {height, width} = Dimensions.get('window')

export default function Home({navigation}) {
  const Popular = ({item}) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.push('Details')}    
        style={styles.popular}>
          <View style={styles.imgTitle}>
            <Text style={styles.popularTitle}>{item.name}</Text>
            <Image source={item.image} style={styles.popularImage}/> 
          </View>             
          <View style={styles.action}>        
            <View style={styles.rating}>
              <Octicons name="star" size={15} style={styles.star}/>
              <Octicons name="star" size={15} style={styles.star}/>
              <Octicons name="star" size={15} style={styles.star}/>
              <Octicons name="star" size={15} style={styles.star}/>
              <Octicons name="star" size={15} style={styles.star}/>
            </View>
            <View>
              <Feather name="chevron-right" size={15}/>
            </View>      
          </View>    
      </TouchableWithoutFeedback>
    )
  }
  return (
      <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
        <SafeAreaView>
          <View style={styles.container}>
            <View>
              <Text style={styles.title}>Good Morning</Text>
              <View style={styles.subheader}>
                <Text style={styles.subtitle}>Isal</Text>
                <Feather name="coffee" size={24} style={{
                  marginLeft: 10,
                  color: '#565656'
                }} />
              </View>
            </View>
            <Feather name="grid" size={24} />
          </View>
        </SafeAreaView>
        <View style={styles.wrapper} >
          <View style={styles.search}>
            <Feather 
              name="search" 
              size={24}
              style={{
                marginRight: 10, 
                color: '#c8c8c8'
              }}
            />
            <TextInput placeholderTextColor='#d8d8d8' placeholder="Search" />
          </View>
        </View>
        <View style={styles.wrapper} >
          <Text style={styles.headtext} >Popular</Text>
        </View>
        <View>
          <FlatList 
            data={data}
            keyExtractor={data => data.id}
            horizontal showsHorizontalScrollIndicator={false}
            renderItem={Popular} />
        </View>
        <View style={styles.wrapper} >
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            marginTop: 20,
          }}>
            <Text style={styles.headtext} >Featured Items</Text>
            <Text>See all</Text>
          </View>
        </View>
        <View>
          <FlatList 
          data={data}
          keyExtractor={data => data.id}
          horizontal showsHorizontalScrollIndicator={false}
          renderItem={Featured} />          
        </View>
      </View>
  );
}

const Featured = ({item}) => {
  return (
    <View style={[styles.featured, {
      marginRight: item.id === '4' ? 20 : 0,
    } ]}>
      <Image source={item.image} style={styles.featuredImage}/>
      <Text style={styles.featuredText}>{item.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 24,
    color: '#247652',
    fontWeight: 'bold'
  },
  subheader: {
    flexDirection: 'row',
    alignItems: 'center'    
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#565656'
  },
  wrapper: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f3f3',
    paddingHorizontal: 15,    
    borderRadius: 30,
  },
  headtext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e2e2e',
  },
  popular: {
    backgroundColor: '#f6f6f6',
    marginLeft: 20,
    width: width / 2.7,
    height: width / 2.4,
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 20,
    marginRight: 30,
    elevation: 4,
  },
  imgTitle: {
    top: -30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularImage: {
    left: -30,
    width: 130,
    height: 180,
    resizeMode: 'contain',
  },
  popularTitle: {
    top: 40,
    fontSize: 16,
    marginLeft: 15,
    fontWeight: '600',
    width: 100,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    top: -15,
    marginHorizontal: 15,
  },
  rating: {
    flexDirection: 'row',
  },
  star: {
    color: '#ffd206',

  },
  featured: {
    backgroundColor: '#f6f6f6',
    marginLeft: 20,
    width: width / 3.5,
    height: width / 3,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
    paddingBottom: 10,
    marginTop: 20,
    borderRadius: 10,
    elevation: 2,
  },
  featuredImage: {
    width: 60,
    height: 100,
    resizeMode: 'contain',
  },
  featuredText: {
    marginVertical: 5,
    fontSize: 14,
    textAlign: 'center',
    maxWidth: 100,
  },

})

