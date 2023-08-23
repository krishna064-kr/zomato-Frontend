import {View} from 'react-native';
import React, { useEffect } from 'react';
import RestroCard from './RestroCard';
import {restroCardDetails} from '../../../../config/homepageContent'
import { getRestaurantsData } from '../../../apiCall/request';
import { useDispatch,useSelector } from 'react-redux'
import { getRestaurantList } from '../../../../redux/action/action';

export default function RestroCards() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getRestaurantList())
  },[])
  let {restaurants} = useSelector((state:any)=>state.reducer)
  
  const restaurantItem = (restaurant:any) => (
    <RestroCard
      image={restaurant.restaurantImgUrl}
      name={restaurant.name}
      cuisine={restaurant.cuisine}
      price={restaurant.cost}
      offer={restaurant.offer}
      rating={restaurant.rating}
      id={restaurant._id}
      restaurant = {restaurant}
    />
  );

  return (
    <>
      <View>          
          { 
            restaurants.map((restaurant:any)=>restaurantItem(restaurant))
          }
      </View>
    </>
  );
}