import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Home({navigation}) {
  return (
    <View>
      <SafeAreaView>
        <View>
          <TouchableWithoutFeedback>
            <Feather name="chevron-left" size={24}/>
          </TouchableWithoutFeedback>
          <View>
            <Ionicons name="cart-outline" size={24}/>
          </View>
        </View>
      </SafeAreaView>     
    </View>
  )
}