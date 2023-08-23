import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Animated, Easing, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SigninSignup from '../components/signin-signup/SigninSignup';
import SignIn from '../components/signin-signup/SignIn';
import SignUp from '../components/signin-signup/SignUp';

const Splash = ({navigation}:any) => {
  const [isLoading, setIsLoading] = useState(true);
  const spinValue = new Animated.Value(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      startAnimation();
    }
  }, [isLoading]);

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={{color:'#fff',fontSize:60,fontWeight:'700'}}>Zomato</Text>
        <View style={{alignItems:'center'}}>
          <Text style={{color:'#fff',fontWeight:'500'}}>100% Green Delivery</Text>
          <Text style={{color:'#fff',fontWeight:'500'}}>------ in India ------</Text>
        </View>
        <Animated.View style={[styles.spinner, { transform: [{ rotate: spin }] }]}>
          <ActivityIndicator size="large" color="#fff" />
        </Animated.View>
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex:1,paddingHorizontal:10}}>
      <SigninSignup/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f21344',
  },
  spinner: {
    width: 100,
    height: 100,
  },
});

export default Splash;
