import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Dropdown } from 'react-native-element-dropdown';
import { SignUpRequest } from '../../apiCall/request';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/action/action';

export default function SignUp({navigation}:any) {
  const [isFocus, setIsFocus] = useState(false);
  const dispatch = useDispatch()
  const [signUpData,setSignUpData] = useState({name:'',email:'',password:'',gender:'',userType:'customer'})
    const data = [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Other', value: 'other' },
    ];

    const handelSignup = () => {
      // console.log({signUpData});
      
      SignUpRequest(signUpData)
      .then(res =>{
        dispatch(login(signUpData))
        navigation.navigate('Main')
        setSignUpData({name:'',email:'',password:'',gender:'',userType:'customer'})
      })
      .catch(error=>{
        console.log({error});
      })
    }    

  return (
    <ScrollView>
    <View style={{paddingHorizontal:15,marginVertical:20}}>
        <View style={{borderWidth:1,borderColor:'gray',borderRadius:5,marginTop:20}}>
            <TextInput
                style={{ paddingStart:10,fontSize: 18,elevation:1,height:40,backgroundColor:'#fff',borderRadius:5,color:'gray'}}
                placeholder="Enter Your Name"
                value={signUpData.name}
                onChangeText={newText => setSignUpData({...signUpData,name:newText})}
                />
        </View>
        <View style={{borderWidth:1,borderColor:'gray',borderRadius:5,marginTop:20}}>
            <TextInput
                style={{ paddingStart:10,fontSize: 18,elevation:1,height:40,backgroundColor:'#fff',borderRadius:5,color:'gray'}}
                placeholder="E-mail address"
                value={signUpData.email.toLowerCase()}
                onChangeText={newText => setSignUpData({...signUpData,email:newText})}
                />
        </View>
        <View style={{borderWidth:1,borderColor:'gray',borderRadius:5,marginTop:20}}>
            <TextInput
                style={{ paddingStart:10,fontSize: 18,elevation:1,height:40,backgroundColor:'#fff',borderRadius:5,color:'gray'}}
                placeholder="Password"
                secureTextEntry={true}
                value={signUpData.password}
                onChangeText={newText => setSignUpData({...signUpData,password:newText})}
                />
        </View>
        <View style={{marginTop:20}}>
          <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'GENDER' : '...'}
          searchPlaceholder="Search..."
          value={signUpData.gender}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setSignUpData({...signUpData,gender:item.value});
              setIsFocus(false);
          }}
          renderLeftIcon={() => (
              <Text
              style={styles.icon}
              //   color={isFocus ? 'blue' : 'black'}
              //   name="Safety"
              //   size={20}
              />
          )}
          />
        </View>
        
        
        <View style={{borderRadius:5,marginTop:20}}>
            <TouchableOpacity onPress={()=>handelSignup()} style={{backgroundColor:'#E23744',borderRadius:10,height:50,justifyContent:'center',alignItems:'center'}}>
                <Button
                    title="SUBMIT"
                    color="#fff"
                    accessibilityLabel="Learn more about this purple button"
                />
            </TouchableOpacity>
        </View>
        

        <View style={{alignItems:'center',justifyContent:'center',marginTop:20,flexDirection:'row'}}>
            <Text style={{color:'gray',fontWeight:'bold'}}>HAVE AN ACCOUNT ?</Text>
            <Text style={{marginStart:15,color:'#E23744',fontWeight:'bold',textDecorationLine: 'underline'}}
            onPress={()=>navigation.navigate('SignIn')}
            >SIGN IN</Text>
          </View>



        <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
            <Text style={{color:'gray',fontWeight:'400',fontSize:17}}>Sign in with</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'space-around',marginTop:20,flexDirection:'row'}}>
            <View style={{flexDirection:'column',alignItems:'center'}}>
            <Image
                source={require('../../assets/icons/google.png')}
                style={{height:30,width:30}}
                />
                <Text style={{color:'#0579ed',fontWeight:'bold',fontSize:17,paddingTop:5}}>Google</Text>
            </View>
            <View style={{flexDirection:'column',alignItems:'center'}}>
                <Image 
                source={{uri:'https://louisville.edu/mcconnellcenter/images/facebook_logos_PNG19748.png/image'}}
                style={{height:30,width:30}}
                />
                <Text style={{color:'#4267B2',fontWeight:'bold',fontSize:17,paddingTop:5}}>Facebook</Text>
            </View>
            <View style={{flexDirection:'column',alignItems:'center'}}>
                <Image
                source={{uri:'https://cdn.usbrandcolors.com/images/logos/instagram-logo.png'}}
                style={{height:30,width:30}}
                />
                <Text style={{color:'#cd486b',fontWeight:'bold',fontSize:17,paddingTop:5}}>Instagram</Text>
            </View>
        </View>
    </View>
    </ScrollView>
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
      color:'gray'
    },
    iconStyle: {
      width: 30,
      height: 30,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });