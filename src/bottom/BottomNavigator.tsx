import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Screen1 from '../screens/Screen1'
import Screen2 from '../screens/Screen2'
import Screen3 from '../screens/Screen3'
import { Image } from 'react-native'

const Bottom = createBottomTabNavigator()

const BottomNavigator = () => {
  return (
    <Bottom.Navigator>
        <Bottom.Screen name='Delivery' component={Screen1} options={{headerShown:false,
        tabBarIcon(props) {
            return (
              <Image
                source={require('../assets/icons/goOutIcon.png')}
                style={{height: 30, width: 35}}
              />
            );
          },
        }}/>
        <Bottom.Screen name='History' component={Screen2} options={{headerShown:false,
        tabBarIcon(props) {
            return (
              <Image
                source={require('../assets/icons/order-icon-png-22.jpg')}
                style={{height: 30, width: 35}}
              />
            );
          },
        }}/>
        <Bottom.Screen name='Money' component={Screen3} options={{headerShown:false,
        tabBarIcon(props) {
            return (
              <Image
                source={require('../assets/icons/goldIcon.png')}
                style={{height: 30, width: 35}}
              />
            );
          },
        }}/>
    </Bottom.Navigator>
  )
}

export default BottomNavigator