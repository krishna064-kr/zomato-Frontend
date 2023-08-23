import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustoomDrawer from './CustoomDrawer'
import BottomNavigator from '../bottom/BottomNavigator'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <View style={{flex:1}}>
       <Drawer.Navigator drawerContent={props =>  <CustoomDrawer {...props}/>}>
         <Drawer.Screen name='MainDrawer' component={BottomNavigator} options={{headerShown:false}}/>
       </Drawer.Navigator>
    </View>
  )
}

export default DrawerNavigator