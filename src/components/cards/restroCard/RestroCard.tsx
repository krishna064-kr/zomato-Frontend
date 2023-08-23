import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Menu from '../../../screens/Menu';
import { useDispatch } from 'react-redux';
import { MenuDetail, setRestaurant } from '../../../../redux/action/action';

export default function RestroCard(props: any) {
  const dispatch = useDispatch()
  const handleclick = () =>{
    let IdObj = {restroId:props.id}
    dispatch(setRestaurant(props.restaurant))
    dispatch(MenuDetail(IdObj))
    navigation.navigate(Menu)
  }
  
  const navigation = useNavigation()
  return (
    <View style={{marginVertical:15}}>
      <View style={styles.justCard}>
        <Image style={styles.cardImage} source={{uri: `${props.image}`}} />
        <View style={{padding:10}}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity>
            <Text style={styles.restroName} onPress={handleclick}>{props.name}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ratingBadge}>
            <Text style={{color:'#fff',fontWeight:'500'}}>{props.rating} star</Text>
          </TouchableOpacity>
          </View>
          <Text style={styles.foodType}>{props.cuisine}</Text>
          <Text
            style={
              styles.foodPrice
            }>{`₹${props.price} pe person | 35-45 mins`}</Text>
          <View style={{ height: 1, width: '100%',marginVertical:5, borderRadius: 1, borderWidth: 1, borderStyle: 'dashed', zIndex: 0, }}>
            <View style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 1, backgroundColor: 'white', zIndex: 1 }} />
          </View>
          <Text
            style={
              styles.discount
            }>{`${props.offer}% OFF USE CODE ZOMATO`}</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  justCard:{
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
  cardImage: {
    height: 200,
    borderTopRightRadius:12,
    borderTopLeftRadius:12,
  },
  restroName: {
    color: '#2b292a',
    fontSize: 25,
    fontWeight: '600',
  },
  ratingBadge:{
        alignItems:'center',
        justifyContent:'center',
        height:20,
        borderRadius:7,
        paddingHorizontal: 10,
        backgroundColor:'#f5a72a',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
  },
  foodType: {
    fontWeight: '300',
    marginVertical:5
  },
  foodPrice: {},
  discount: {
  color: '#fc4c6c',
  marginBottom:5
  },
});
