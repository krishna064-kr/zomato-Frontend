import axios from "axios";

export const GetRequest = async () => {
    const res = await axios({
        method:'get',
        url:'http://localhost:1000/restaurants'
    })
    return res
}
export const SignUpRequest = async (data) => {
    const res = await axios({
        method:'post',
        url:'http://localhost:1000/user/signup',
        data:data
    })
    return res
}

export const loginRequest = async (data) => {
    const res = await axios({
        method:'post',
        url:'http://localhost:1000/user/login',
        data:data
    })
    return res
}

export const getRestaurantsData = async () => {
    const res = await axios({
        method:'get',
        url:'http://localhost:1000/restaurants/'
    })
    return res
}