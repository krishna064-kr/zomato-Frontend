import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {headerLogo} from '../../../config/homepageContent'

export default function Header(props:any) { 
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerAddress}>
          <Image
          source={headerLogo.map}
          style={styles.maplogo}
          />
          <View>
            {
              
            }
            <Text style={styles.userAddress}>Lanka BHU</Text>
            <Text style={{fontSize:12,color:`#f52a4b`}}>Varanasi</Text>
          </View>
        </View>
        {/* <TouchableOpacity onPress={()=>props.navigation.openDrawer()}> */}
        <TouchableOpacity onPress={()=>props.navigation.navigate('UserDetails')}>
          <Image
            style={styles.userImage}
            source={{
                uri: 'https://api.facemorph.me/api/face/?dim=512&value=hello&format=webp',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  headerAddress: {
    alignItems:'center',
    flexDirection:'row',
  },
  maplogo: {
    height: 45,
    width: 30,
  },
  userAddress: {
    color: '#f52a4b',
    fontSize: 16,
    fontWeight: '600',
    // marginHorizontal:8
  },
  userImage: {
    width: 42,
    height: 42,
    borderRadius: 25,
  }
});
