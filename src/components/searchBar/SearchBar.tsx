import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import {headerLogo} from '../../../config/homepageContent'
import { useNavigation } from '@react-navigation/native'
import RestaurantsSearch from '../../screens/RestaurantsSearch'

const SearchBar = () => {
    const navigation = useNavigation()
  return (
    <>
      <View style={styles.inputStyle}>
      <Image
          source={headerLogo.searchIcon}
          style={styles.searchIcon}
          />
        <TextInput
          style={{marginStart: 5, fontSize: 18,flex:1}}
          placeholder="Search for restaurant, cuisines..."
          keyboardType="numeric"
          onFocus={()=>navigation.navigate(RestaurantsSearch)}
        />
      </View>
    </>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    searchIcon:{
        marginHorizontal:5,
        width:25,
        height:25,
      },
      inputStyle: {
        alignItems:'center',
        flexDirection:'row',
        paddingVertical:5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
      },
})