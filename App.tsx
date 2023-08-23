import {SafeAreaView } from 'react-native'
import React from 'react'
import AppNavigator from './src/AppNavigator'
import { Provider } from 'react-redux'
import store from './redux/store/store'

const App = () => {

  return (
    <Provider store={store}>
      <SafeAreaView style={{flex:1}}>
        <AppNavigator/>
      </SafeAreaView>
    </Provider>
  )
}

export default App