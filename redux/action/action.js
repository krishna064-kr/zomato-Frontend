import { ADD_TO_CART, REMOVE_FROM_CART,RESTAURANT_LIST, LOGIN_USER, SET_RESTAURANT,MENU_DETAILS } from "../constants";


export function addToCart(itme){
    return {
        type:ADD_TO_CART,
        data:itme
    }
}
export function removeFromCart(){
    return {
        type:REMOVE_FROM_CART
    }
}

export function getRestaurantList(){
    return {
        type:RESTAURANT_LIST
    }
}
export function login(data){
    return {
        type: LOGIN_USER,
        payload:data
    }
}
export function setRestaurant(data){
    return {
        type:SET_RESTAURANT,
        payload:data
    }
}
export function MenuDetail(id){
    return {
        type:MENU_DETAILS,
        payload:id
    }
}
