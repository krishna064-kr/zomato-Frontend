import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'
import ListCard from '../components/cards/listCard/ListCard'
import { UI_Data } from '../../config/homepageContent'

export default function UserDetails() {
    const {user} = useSelector((state:any)=>state.reducer)
  return (
    <>
      <View style={styles.Card}>
        <View>
            <Image source={{uri:"https://api.facemorph.me/api/face/?dim=512&value=hello&format=webp"}} style={{height:50,width:50,borderRadius:25}}/>
        </View>
        <View style={{marginStart:10}}>
            <Text style={{fontWeight:'600',fontSize:18}}>{user.name}</Text>
            <Text>{user.email}</Text>
            <Text style={{color:'gray'}}>Life is to short. Eat Sleap Code Repeat 😅</Text>
        </View>
      </View>
      <ScrollView howsVerticalScrollIndicator={false}>
      <ListCard content = {['Your profile']} />
      <ListCard content = {['Your Rating']} />
        <ListCard heading = 'Food Order' content = {UI_Data.Food_Orders} />
        <ListCard heading = 'Coupons' content = {UI_Data.Coupons} />
        <ListCard heading = 'Money' content = {UI_Data.Money} />
        <ListCard heading = 'More' content = {UI_Data.More} />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
    Card:{
        flexDirection:'row',
        backgroundColor:'#fff',
        borderRadius:10,
        padding:15,
        margin:10,
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