import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Home({navigation}) {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <SafeAreaView>
        <View style={styles.wrapper}>
          <TouchableWithoutFeedback style={styles.backButton}>
            <Feather name="chevron-left" size={24}/>
          </TouchableWithoutFeedback>
          <View style={styles.cart.Button}>
            <Ionicons name="cart-outline" size={24}/>
            <View style={styles.badge}>
              <Text style={styles.badgeButton}>title</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>     
    </View>
  )
}

const styles = StyleSheet.create({

})