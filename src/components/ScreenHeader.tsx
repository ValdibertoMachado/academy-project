import { StyleSheet, Text, View } from "react-native";
import React from 'react';


type Props = {
   text: string,
    }

    export function ScreenHeader({text}: Props){
        return(
            <View style={styles.viewheader}>
                <Text style={styles.text}>{text}</Text>
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
        justifyContent: 'center',
        
    },

    text:{
        fontSize: 20,
        fontWeight: 'bold',
    }

}) 