import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch,useSelector } from 'react-redux'
import { addToCart, getRestaurantList, login, removeFromCart } from '../../../../redux/action/action'


export default function MenuCard(props:any) {

  return (
    <>
    <View style={styles.menuCard}>
    <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
      <Image style={{height:110,width:110,borderRadius:10}} source={{uri: `${props.imageUrl}`}} />
      <View style={{paddingHorizontal:10,position:'relative'}}>
        <View style={{flexDirection:'row'}}>
          <View style={{width:'60%'}}>
            <Text numberOfLines={1} style={{fontSize:17,fontWeight:'500'}} >{props.name}</Text>
            <Text style={{marginTop:3}}>₹{props.price}</Text>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Text style={{fontSize:20,fontWeight:'500',color:'#f7364a'}}>ADD</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1,width:'85%',marginTop:3}}>
        <Text numberOfLines={3} >{props.description}</Text>
        <Text style={{color:'gray',marginTop:3}}>{30} Ratings</Text>
        </View>
      </View>
    </View>      
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    menuCard:{
      padding:8,
      marginBottom:12,
      marginHorizontal:7,
      backgroundColor:'#fff',
      borderRadius:10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    addButton:{
        width:60,
        height:40,
        marginLeft:5,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#f7364a',
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#000",
        backgroundColor:'#fcdcdf',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    }
})