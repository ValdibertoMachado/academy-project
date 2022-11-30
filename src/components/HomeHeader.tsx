import { StyleSheet, Text, View } from "react-native";
import React from 'react';
import { UserPhoto } from "./UserPhoto";
import Icon from "react-native-vector-icons/MaterialIcons";

type Props = {
   
    }

    export function HomeHeader({}: Props){
        return(
            
            <View style={styles.viewheader}>

                <View style={styles.viewone}>

                    <UserPhoto Source={{ uri: 'http://github.com/ValdibertoMachado.png' }} borderradius={25} heightimage={50} widthimage={50} resizemode={undefined}/>

                </View >

                <View style={styles.viewtwo}>

                    <Text style={styles.texttwo}>Olá,</Text>
                    <Text style={styles.texttwo}>Valdiberto</Text>

                </View>

                <View>

                    <Icon size={30} style={styles.logouticon} name="logout"/>

                </View>

            </View>
        );
        
    }

const styles = StyleSheet.create({

    viewheader:{
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'gray',
        alignItems: 'center',
        height: 70,
        
    },

   viewone:{
    marginLeft: 20,

   },

   viewtwo:{

    flex: 1,
    marginLeft: 10,

   },

   texttwo:{

    fontWeight: 'bold',

   },

   logouticon:{

    
    paddingRight: 20,

   },
}) 