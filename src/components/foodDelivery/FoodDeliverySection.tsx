import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

export default function FoodDeliverySection() {
  const [selfPickMode, setSelfPickMode] = useState(0);
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>setSelfPickMode(0)} style={!selfPickMode?styles.buttonSelected :styles.button}>
          <Text>Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setSelfPickMode(1)} style={selfPickMode?styles.buttonSelected :styles.button}>
          <Text>SelfPickup</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0eded',
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonSelected: {
    width: '47%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `#fff`,
    margin: 7,
    borderRadius: 7,
  },
  button: {
    width: '47%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `#f0eded`,
    margin: 7,
    borderRadius: 7,
  },
});
