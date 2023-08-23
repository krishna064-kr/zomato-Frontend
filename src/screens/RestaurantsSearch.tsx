import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import {headerLogo} from '../../config/homepageContent'
import { useDispatch, useSelector } from 'react-redux'
import { MenuDetail, setRestaurant } from '../../redux/action/action'
import { useNavigation } from '@react-navigation/native'
import Menu from './Menu'

const RestaurantsSearch = () => {
  const navigation = useNavigation()

  const dispatch = useDispatch()


  let {restaurants} = useSelector((state:any)=>state.reducer)
    const [searchedRestaurants, setSearchedRestaurants] = useState([])
    const handleChange=(text:any)=>{
      let result =  restaurants.filter((restaurant:any)=>restaurant?.name.toLowerCase().includes(text.toLowerCase()))
      text.trim().length ?setSearchedRestaurants(result):result=[] 
    }

    const renderItem = ({item}:any) => {
      const handleClick = () =>{
        dispatch(setRestaurant(item))
        dispatch(MenuDetail({restroId:item._id}))
        navigation.navigate(Menu)
      }
      return <View style={styles.restroCard}>
        <Image source={{uri:item.restaurantImgUrl}} style={{height:55,width:55,borderRadius:7}} />
        <View style={{marginLeft:5,width:'70%'}}>
          <Text numberOfLines={1} onPress={handleClick}>{item.name}</Text>
          <Text numberOfLines={1} style={{color:'gray'}}>{item.address}</Text>
        </View>
      </View>
    }

    return (
    <>
    <View style={{margin:10}}>
      <View style={styles.inputStyle}>
      <Image
          source={headerLogo.searchIcon}
          style={styles.searchIcon}
          />
        <TextInput
          style={{marginStart: 5, fontSize: 18,flex:1}}
          placeholder="Search for restaurant, cuisines..."
          onChangeText={handleChange}
        />
      </View>
        <FlatList
          data={searchedRestaurants}
          renderItem={renderItem}
        />
    </View>
    </>
  )
}

export default RestaurantsSearch

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
      restroCard:{
        flexDirection:'row',
        backgroundColor:'#fff',
        borderRadius:10,
        padding:5,
        margin:7,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
      }
})