import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'

export default function CustoomDrawer() {
  const {user} = useSelector((state:any)=>state.reducer)
  const UI_Data = {
    Food_Orders : ['Your orders','Favorite order', 'Address book', 'Hidden Restaurants', 'online orddering help'],
    Coupons:['Collected coupons'],
    Money:['Buy Gift Card', 'Claim Gift Card', 'Gift Card order history', 'Zomato Credits', 'Gift Cards help'],
    More:['Choose language', 'About', 'Send feedback', 'Get Feeding India recipt', 'Report a safity emergency', 'Log out' ]
  }
  return (
    <>
      <View style={{flex:1}}>
        <ImageBackground source={{uri:'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
        style={{height:200}}/>
        <View style={{alignItems:'center'}}>
          <Image source={{uri:'https://api.facemorph.me/api/face/?dim=512&value=hello&format=webp'}}
          style={{height:100,width:100,borderRadius:50,position:'absolute',top:-50,backgroundColor:'#fff',padding:5}}/>
        </View>
        <View style={{marginTop:60,alignItems:'center'}}>
          <Text style={{fontSize:20,fontWeight:'500'}}>{user.name}</Text>
          <Text style={{color:'gray',marginTop:5}}>{user.email}</Text>
          <View>
            <Text style={{color:'gray',marginTop:5}}>652-Mars, Milkyway </Text>
          </View>
          <Text style={{color:'gray',marginTop:5}}>Life is to short. Eat Sleap Code Repeat 😅 </Text>
          <Text style={{marginTop:5}}>121 followers, 20 following</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
          
          <TouchableOpacity style={styles.buttons}>
            <Text>add Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Text>Edit Profile</Text>
          </TouchableOpacity>
        </View>



        {/* <ScrollView style={{flex:1}}>
        <View style={styles.Card}>
          <Text style={{fontWeight:'600',marginTop:5}}>Food Order</Text>
          {UI_Data.Food_Orders.map((content:String,indx) =><>
            <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between',height:35}}>
            <Text>{content}</Text>
            <Text>{'>'}</Text>
          </View>
          {indx < UI_Data.Food_Orders.length - 1 ? <View style={{borderWidth:0.3,borderColor:'gray'}}></View>:''}
          </>)}
        </View>

        <View style={styles.Card}>
          <Text style={{fontWeight:'600',marginTop:5}}>Coupons</Text>
          {UI_Data.Coupons.map((content:String,indx) =><>
            <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between',height:35}}>
            <Text>{content}</Text>
            <Text>{'>'}</Text>
          </View>
          {indx < UI_Data.Coupons.length - 1 ? <View style={{borderWidth:0.3,borderColor:'gray'}}></View>:''}
          </>)}
        </View>

        <View style={styles.Card}>
          <Text style={{fontWeight:'600',marginTop:5}}>Money</Text>
          {UI_Data.Money.map((content:String,indx) =><>
            <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between',height:35}}>
            <Text>{content}</Text>
            <Text>{'>'}</Text>
          </View>
          {indx < UI_Data.Money.length - 1 ? <View style={{borderWidth:0.3,borderColor:'gray'}}></View>:''}
          </>)}
        </View>

        <View style={styles.Card}>
          <Text style={{fontWeight:'600',marginTop:5}}>More</Text>
          {UI_Data.More.map((content:String,indx) =><>
            <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between',height:35}}>
            <Text>{content}</Text>
            <Text>{'>'}</Text>
          </View>
          {indx < UI_Data.More.length - 1 ? <View style={{borderWidth:0.3,borderColor:'gray'}}></View>:''}
          </>)}
        </View>
        </ScrollView> */}

      </View>
    </>
  )
}

const styles = StyleSheet.create({
  buttons:{
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#5f5f5f',
    justifyContent:'center',
    paddingHorizontal:5,
    // backgroundColor:'#ed4242'
  },
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
  },
})