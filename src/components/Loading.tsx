import { StyleSheet } from 'react-native';
import React from 'react';
import { View, Text } from "react-native";
import  Icon  from 'react-native-vector-icons/Ionicons';


export function Loading(){
    
    return(
        <View style={styles.viewheader}>
          <Icon size={50}  name='reload' color={'blue'}/>
          <Text style={styles.text}>Loading</Text>
        </View>
  )  
}

const styles = StyleSheet.create({

  viewheader:{
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  text:{
      color: 'blue',
      fontSize: 30,
  },

}) 