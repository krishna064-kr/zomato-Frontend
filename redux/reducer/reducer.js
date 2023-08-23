import { 
    ADD_TO_CART, 
    SET_RESTAURANT, 
    REMOVE_FROM_CART, 
    SET_RESTAURANTS_DATA,
    SET_USER_DATA,
    SET_MENU_DATA 
} from "../constants";

const initialState = {
    data:[],
    restaurants:[],
    user:{},
    restaursnt:{},
    menu:[]
};
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART :
            let data = [...state.data,action.data]
            return {...state,data:data}
        case REMOVE_FROM_CART:
            let result = {...state,data:state.data.slice(0, -1)}
            return result
        case SET_RESTAURANTS_DATA:
            return {...state, restaurants:action.restaurants}
        case SET_USER_DATA:
            return{...state,user:action.user}
        case SET_RESTAURANT:
            return {...state,restaursnt:action.payload}
        case SET_MENU_DATA:
            return{...state,menu:action.menu}
        default :
            return state
    }
}