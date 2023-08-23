import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function ListCard(props:any) {
  const navigation = useNavigation()
  const handleClick = (action:String) => {
    switch(action) {
      case 'logout' :
        navigation.navigate('SignIn')
      default :
          return ''
  }
  }
  return (
    <>
      <View style={styles.Card}>
        {props.heading ? 
        
        <View style={{borderColor:'red',borderStartWidth:2,justifyContent:'center',marginTop:5}}>
        <Text style={{fontWeight:'600',marginStart:5}}>{props.heading}</Text>
        </View>
        
        :<></>}
          {props.content.map((content:String,index:any) =><>
            <TouchableOpacity style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between',height:35,marginStart:10}} key={index.toString()} onPress={()=>handleClick('logout')}>
            <Text>{content}</Text>
            <Text>{'>'}</Text>
          </TouchableOpacity>
          {index < props.content.length - 1 ? <View style={{borderWidth:0.3,borderColor:'gray',marginStart:10}}></View>:<></>}
          </>)}
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    Card:{
        backgroundColor:'#fff',
        borderRadius:10,
        padding:5,
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