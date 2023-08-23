import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function FeatureCard(props: any) {
  return (
    <View style={styles.featureCard}>
      
      <View style={{height: '45%'}}>
        <Image
        source={props.icon}
        style={styles.image}
        />
      </View>
      <TouchableOpacity style={{alignItems: 'center'}}>
        <Text style={styles.text}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  featureCard: {
    height: 100,
    width: 80,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  image:{
    height:45,
    width:40
  },
  text: {
    fontSize: 16,
    color: '#4d4b4b',
    fontWeight: '500',
    alignItems:'center',
    justifyContent:'center'
  },
});
