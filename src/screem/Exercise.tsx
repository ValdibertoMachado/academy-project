import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from 'react';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { UserPhoto } from "../components/UserPhoto";
import { Button } from "../components/Button";

export function Exercise(){

    const navigation = useNavigation()

    function handleback(){
        navigation.goBack()
    }

    return(
        <View style={styles.view}>
         <View style={styles.viewtwo}>

         <View style={styles.viewthree}>

         <TouchableOpacity onPress={handleback}>

            <MaterialIcons size={50} style={styles.logouticon} name="keyboard-arrow-left"/>

         </TouchableOpacity>

            <Text style={styles.text}>Puxada Frontal</Text>

         </View>
            
         <View style={styles.viewfour}>

            <Text style={styles.texttwo}>Costa</Text>

         </View>

         </View>

         <View style={styles.viewfive}>

         <UserPhoto 
         resizemode={'cover'}
         widthimage={350}
         heightimage={350}
         borderradius={0}
         Source={{uri: 'http://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg'}}
         />
         <View style={styles.viewsix}>
         <View style={styles.viewseven}>
         <Text style={styles.textthree}> 3-Série </Text>
         <Text style={styles.texttwo}> 12-Repetições </Text>
         </View>
         <Button colortext="white" widthTouchable={'90%'} heightTouchable={50} onpress={''} trueorfalse={true} titlebutton="Marcar como realizado"/>
         </View>
         
         </View>

        </View>
    )
}

const styles = StyleSheet.create({
    view:{

        flex: 1,
        backgroundColor: 'black',
      },
      viewtwo:{
        width: '100%',
        height: 70,
        alignItems: 'center',
        backgroundColor: 'gray',
        flexDirection: 'row',
        paddingLeft: 20,
        
        
      },

      viewthree:{
        flex: 3,
        flexShrink: 1,
        
      },

      viewfour:{
        flex: 1,
        flexShrink: 1,
        flexDirection: 'row',
      },

      viewfive:{
      marginHorizontal: 10,
      marginTop: 30,

      },

      viewsix:{
        backgroundColor: 'gray',
        height: 110,
        marginTop: 20,
        borderRadius: 10,
        },

        viewseven:{
          flexDirection: 'row',
          paddingBottom: 20,
          paddingHorizontal: 20,
          },

      logouticon:{
        color: 'white',
        
      },

      text:{
        color: 'white',
        fontWeight: 'bold',
        paddingBottom: 10,

      },

      texttwo:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
      },

      textthree:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
      },

}) 