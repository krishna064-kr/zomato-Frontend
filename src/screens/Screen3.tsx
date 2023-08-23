import { View, Text, ImageBackground, StyleSheet, Image,ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/header/Header'
import OfferCards from '../components/cards/offerCards/OfferCards'
import ExclusiveCard from '../components/cards/offerCards/ExclusiveCard'
// import { ScrollView } from 'react-native-gesture-handler'

const Screen3 = ({navigation}:any) => {
  return (
    <ScrollView>
    <View style={styles.card}>
      <ImageBackground source={{uri:'https://wallpaperaccess.com/full/983286.jpg'}} resizeMode="cover" style={{paddingBottom:20,height:200}}>
      <Header navigation={navigation} color='#fff'/>
        <View style={{position:'relative',top:40, justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'#fff', fontSize:25,fontWeight:'600'}}>{`M  O  N  E  Y`}</Text>
          <Text style={{color:'#fff',fontStyle:'italic',fontWeight:'900',fontSize:18}}>by Zomato</Text>
        </View>
      </ImageBackground>
    </View>
    <View style={{justifyContent:'center', alignItems: 'center'}}>
      <Text style={{marginVertical:10,color:'gray',fontSize:13}}>GIFT CARDS</Text>
    </View>
    <View style={styles.Card2}>
      <Image source={{uri:'https://rukminim1.flixcart.com/image/850/1000/xif0q/e-gift-voucher/a/l/j/restaurant-anyone-zomato-100-original-imagjzwk3nzuuhzx.jpeg?q=90'}} style={{height:210}}/>
      <View style={{alignItems:'center',justifyContent:'center',marginVertical:7}}>
        <Text style={{color:'#fa3e3e',fontSize:12}}>{'Buy now →'}</Text>
      </View>
    </View>

    <View style={styles.Card2}>
      <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between',height:35}}>
        <Text>Clame a Gift Card</Text>
        <Text>{'>'}</Text>
      </View>
      <View style={{borderWidth:0.5,borderColor:'gray'}}></View>
      <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between',height:35, marginVertical:5}}>
        <View>
          <Text>Gift Card Balance</Text>
          <Text style={{fontSize:12,marginTop:2,color:'gray'}}>Balance:₹0.00</Text>
        </View>
        <Text>{'>'}</Text>
      </View>
      <View style={{borderWidth:0.5,borderColor:'gray'}}></View>
      <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between',height:35}}>
        <Text>Purchase History</Text>
        <Text>{'>'}</Text>
      </View>
    </View>
    </ScrollView>
  )
}

export default Screen3

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderTopRightRadius:0,
    borderTopLeftRadius:0,
    overflow: 'hidden',
    elevation: 3,
    marginBottom:10
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  Card2:{
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
  },
});
