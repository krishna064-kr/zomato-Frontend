import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from './screens/Splash'
// import Main from './screens/Main'
import Menu from './screens/Menu'
import DrawerNavigator from './drawer/DrawerNavigator'
import RestaurantsSearch from './screens/RestaurantsSearch'
import UserDetails from './screens/UserDetails'


const Stack = createStackNavigator()

export default function AppNavigator() {
  return (
    <>
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
            <Stack.Screen name='Main' component={DrawerNavigator} options={{headerShown:false}}/>
            <Stack.Screen name='Menu' component={Menu} options={{headerShown:true}}/>
            <Stack.Screen name='RestaurantsSearch' component={RestaurantsSearch} options={{headerShown:true}}/>
            <Stack.Screen name='UserDetails' component={UserDetails} options={{headerShown:true}}/>
        </Stack.Navigator>
    </NavigationContainer>
    
    </>
    
  )
}

const styles = StyleSheet.create({})