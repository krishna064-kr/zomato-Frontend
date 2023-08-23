import {Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Tab = createMaterialTopTabNavigator();


export default function SigninSignup() {
  return (
    <View style={{flex:1}}>
      <Image source={{uri:'https://mir-s3-cdn-cf.behance.net/project_modules/fs/388eca72914835.5bf79177986e4.jpg'}} style={{height:300,width:'100%',}}/>
    <Tab.Navigator>
      <Tab.Screen name="SignIn" component={SignIn} />
      <Tab.Screen name="SignUp" component={SignUp} />
    </Tab.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({})