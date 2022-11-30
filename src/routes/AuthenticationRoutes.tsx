import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { SignUp } from "../screem/SignUp";
import { Singnin } from "../screem/Singnin";
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Stack = createNativeStackNavigator()

export function AuthenticationRoutes(){
    return(
      <view style={styles.view}>
        <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Singnin" component={Singnin} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
    </view>
    )
}

const styles = StyleSheet.create({
  view:{
      flex:1,
      backgroundColor:'black',
  },
})