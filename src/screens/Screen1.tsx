import { Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../components/header/Header'
import FoodDeliverySection from '../components/foodDelivery/FoodDeliverySection'
import OfferCards from '../components/cards/offerCards/OfferCards'
import FeatureCards from '../components/cards/featureCard/FeatureCards'
import RestroCards from '../components/cards/restroCard/RestroCards'
import { ScrollView } from 'react-native-gesture-handler'
import { GetRequest } from '../apiCall/request'
import { useDispatch } from 'react-redux'
import { getRestaurantList } from '../../redux/action/action'
import SearchBar from '../components/searchBar/SearchBar'

const Screen1 = ({navigation}:any) => {

  const dispatch = useDispatch()

  const getAllRestaurents = () => {
    dispatch(getRestaurantList())
  }

  return (
    <View style={{paddingHorizontal:10}}> 
      <ScrollView showsVerticalScrollIndicator={false}>
      <Header navigation={navigation}/>
      <SearchBar/>
      <FoodDeliverySection/>
      <OfferCards/>
      <FeatureCards/>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text style={{textAlign: 'center', marginHorizontal:10}} onPress={getAllRestaurents}>ALL RESTRAURANTS</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>
      <RestroCards/>
      </ScrollView>
    </View>
  )
}

export default Screen1