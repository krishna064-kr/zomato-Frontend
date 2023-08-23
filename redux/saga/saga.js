import {put, takeEvery} from 'redux-saga/effects'
import { RESTAURANT_LIST, SET_RESTAURANTS_DATA,LOGIN_USER, SET_USER_DATA,MENU_DETAILS,SET_MENU_DATA } from "../constants";
import axios from "axios"; 

function* restaurantList(){
    let restaurants = yield axios({
        method:'get',
        url:'http://localhost:1000/restaurants/'
    })
    restaurants = restaurants.data.Restaurants
    yield put({type:SET_RESTAURANTS_DATA,restaurants})
}

function* loginUser({payload}){
    try {
        const {data} = yield axios.post('http://localhost:1000/user/login',payload)
        let user = data
        yield put({type:SET_USER_DATA,user})
    } 
    catch (error) {
        console.log('Request failed! Could not create post.',error);
    }
}

function * getMenuData({payload}){
    try {
        const {data} = yield axios.get(`http://localhost:1000/restaurants/${payload.restroId}`)
        let menu = data.menu
        yield put({type:SET_MENU_DATA,menu})
        // const menus = yield axios({
        //     method: 'get',
        //     url:'http://localhost:1000/restaurants/getMenus',
        //     params: payload
        //   })
        //   console.log({payload},'\n',{menus},"lk");
        
    } catch (error) {
        console.log('Request failed! Could not create post.',error);
    }
}
export function* RestaurantsData(){
    yield takeEvery(RESTAURANT_LIST, restaurantList)
}
export function* UserLogin(){
    yield takeEvery(LOGIN_USER, loginUser)
}
export function* MenuData(){
    yield takeEvery(MENU_DETAILS, getMenuData)
}