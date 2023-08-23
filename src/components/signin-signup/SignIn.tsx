import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TextInput } from 'react-native-gesture-handler'
import { loginRequest } from '../../apiCall/request';
import { useDispatch,useSelector } from 'react-redux'
import { login } from '../../../redux/action/action';

const Tab = createMaterialTopTabNavigator();

export default function SignIn({navigation}:any) {

  const dispatch = useDispatch()

    const {user} = useSelector((state:any)=>state.reducer)
    const [signInSuccess, setSignInSuccess] = useState(false);
    const [selfPickMode, setSelfPickMode] = useState(0);
    const [viaEmail, setViaEmail] = useState(true);
    const [isOtp,setIsOtp] = useState(false)
    const [loginData,setLoginData] = useState({email:'',password:''})

// console.log({user});

    const handleSubmit = async() => {
      dispatch(login(loginData))
      if(user?.email) 
      navigation.navigate('Main');
      setLoginData({email:'',password:''})
    }

  return (
    <View>
        <View>
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{setSelfPickMode(0); setViaEmail(true);}} style={!selfPickMode?styles.buttonSelected :styles.button}>
                <Text>With Email</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setSelfPickMode(1); setViaEmail(false)}} style={selfPickMode?styles.buttonSelected :styles.button}>
                <Text>With Mobile</Text>
                </TouchableOpacity>
            </View>
        </View>
        {
            viaEmail ?
            <View>
                <View style={{borderWidth:1,borderColor:'gray',borderRadius:5,marginTop:20}}>
                    <TextInput
                        style={{ paddingStart:10,fontSize: 18,elevation:1,height:40,backgroundColor:'#fff',borderRadius:5}}
                        placeholder="Email"
                        value={loginData.email}
                        onChangeText={newText => setLoginData({...loginData,email:newText.toLowerCase()})}
                        />
                </View>
                <View style={{borderWidth:1,borderColor:'gray',borderRadius:5,marginTop:20}}>
                    <TextInput
                        style={{ paddingStart:10,fontSize: 18,elevation:1,height:40,backgroundColor:'#fff',borderRadius:5,color:'gray'}}
                        placeholder="Password"
                        secureTextEntry={true}
                        value={loginData.password}
                        onChangeText={newText => setLoginData({...loginData,password:newText})}
                        />
                </View>
                <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
                    <Text style={{color:'gray',fontWeight:'bold'}}>FORGET PASSWORD?</Text>
                </View>
                <View style={{marginTop:20}}>
                    <TouchableOpacity style={{backgroundColor:'#E23744',borderRadius:10,height:50,justifyContent:'center',alignItems:'center'}} onPress={()=>{setSignInSuccess(true); handleSubmit()}}>
                        <Button 
                            title="Sign in via Email"
                            color="#fff"
                            accessibilityLabel="Learn more about this purple button"
                            
                        />
                    </TouchableOpacity>
                </View>
            </View>
            : 
            <View>
                <View style={{borderWidth:1,borderColor:'gray',borderRadius:5,marginTop:20,flexDirection:'row'}}>
                    <Image source={{uri:'https://icons.iconarchive.com/icons/wikipedia/waved-flags/256/India-Waved-Flag-icon.png'}} style={{height:'auto',width:50,margin:5}}/>
                    <View style={{ alignItems:'center',justifyContent:'center'}}>

                    <Text style={{marginEnd:5}}>+91</Text>
                    </View>
                    <TextInput
                        style={{ paddingStart:10,fontSize: 18,elevation:1,height:40,width:'75%',backgroundColor:'#fff',borderRadius:5}}
                        placeholder="Mobile no."
                        />
                </View>
                {
                    isOtp ?
                    <View style={{borderWidth:1,borderColor:'gray',borderRadius:5,marginTop:20}}>
                        <TextInput
                            style={{ paddingStart:10,fontSize: 18,elevation:1,height:40,backgroundColor:'#fff',borderRadius:5}}
                            placeholder="O T P"
                            />
                    </View>
                : <></>
                }
                <View style={{marginTop:20}}>
                    <TouchableOpacity style={{backgroundColor:'#E23744',borderRadius:10,height:50,justifyContent:'center',alignItems:'center'}} onPress={()=>setSignInSuccess(!signInSuccess)}>
                        <Button 
                        onPress={(prev)=>setIsOtp(!isOtp)}
                            title={!isOtp ?'Sign in via Mobile': 'Continue'}
                            color="#fff"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        }

        <View style={{alignItems:'center',justifyContent:'center',marginTop:20,flexDirection:'row'}}>
            <Text style={{color:'gray',fontWeight:'bold'}}>Not Have Account Yet?</Text>
            <Text style={{marginStart:15,color:'#E23744',fontWeight:'bold',textDecorationLine: 'underline'}}
            onPress={()=>navigation.navigate('SignUp')}
            >SIGN UP</Text>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    dropdown: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      color:'gray',
      backgroundColor:'#fff'
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
      color:'gray',
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 30,
      height: 30,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    container: {
        backgroundColor: '#f0eded',
        flexDirection: 'row',
        borderRadius: 10,
        marginTop: 20,
      },
      buttonSelected: {
        width: '47%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: `#fff`,
        margin: 7,
        borderRadius: 7,
      },
      button: {
        width: '47%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: `#f0eded`,
        margin: 7,
        borderRadius: 7,
      },
  });