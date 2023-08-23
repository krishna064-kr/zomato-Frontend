const { SET_RESTAURANTS_DATA, RESTAURANT_LIST } = require("../constants");


function* restaurantList(){
    let restaurants = yield axios({
        method:'get',
        url:'http://localhost:1000/restaurants/'
    })
    restaurants = restaurants.data.Restaurants
    yield put({type:SET_RESTAURANTS_DATA,restaurants})
}

export default function* restaurants(){
    yield takeEvery(RESTAURANT_LIST, restaurantList)
}