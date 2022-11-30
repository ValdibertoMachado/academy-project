import { Loading } from './src/components/Loading';
import { View, StyleSheet } from 'react-native';
import { AuthenticationRoutes } from '../app/src/routes/AuthenticationRoutes'
import { AppRoutes } from '../app/src/routes/AppRoutes'
import React from 'react';


type Props = {
  value: Boolean
}

export default function App({ value }: Props) {
  const Value = {value}
  return (
    
    <View style={styles.view}>
      
     {value
     ?
     <AuthenticationRoutes/>
     :
     <Loading/>
     }
    </View>
    
     );
}

const styles = StyleSheet.create({
  view:{
      flex:1,
      backgroundColor:'gray',
  },
})


