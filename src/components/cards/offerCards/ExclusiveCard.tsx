import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ExclusiveCard() {
  return (
    <>
      <View style={styles.exclusiveContainer}>
        <ImageBackground source={{uri:'https://static9.depositphotos.com/1588534/1095/i/450/depositphotos_10957284-stock-photo-cheeseburger-and-french-fries.jpg'}} style={styles.image}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>EXCLUSIVE</Text>
          </View>
          <View style={styles.textContent}>
            <Text style={styles.text}>{`EPIC \nDEALS`}</Text>
            <Text style={styles.offText}>40% OFF</Text>
            <Text style={{color:'#fff'}}>On legendary restaurants</Text>
          </View>
        </ImageBackground>
      </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  exclusiveContainer: {
    borderRadius:50,
    height:220,
    width:300,
    marginRight:15,
  },
  image:{
    height:'100%'
  },
  badge:{
    marginTop:10,
    backgroundColor:'red', 
    width:150,
    borderBottomRightRadius:5,
    borderTopEndRadius:5,
    alignItems:'center',
    justifyContent:'center',

  },
  badgeText:{
    color:'#fff',
    fontWeight:'400',
    fontSize:18,

  },
  textContent:{
    marginStart:15,
  },
  text:{
    color:'#fff',
    fontSize:40,
    fontWeight:'900',
  },
  offText:{
    color:'#fff',
    fontSize:25,
    fontWeight:'500',

  },
});
