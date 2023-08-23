import { all } from 'redux-saga/effects'
import { MenuData, RestaurantsData, UserLogin } from "./saga"
import { restaurants } from './restaurantList'

export default function* rootSaga() {
    yield all([
        RestaurantsData(),
        UserLogin(),
        MenuData()
    ])
  }