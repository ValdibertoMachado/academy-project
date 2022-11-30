import { StyleSheet, Text, View } from "react-native";
import React from 'react';


type Props = {
   text?: any,
   texttwo: any,
   textthree: any,
   textfour: any,
    }

    export function HistoryCard({text, texttwo, textthree, textfour}: Props){
        return(
            <View style={styles.viewheader}>
                <Text style={styles.text}>{text}</Text>
                <View style={styles.viewtwo}>
                <View style={styles.view}>
                    <Text style={styles.texttwo}>{texttwo}</Text>
                    <Text style={styles.texttwo}>{textthree}</Text>
                </View>
                <View style={styles.viewthree}>
                    <Text style={styles.textthree}>{textfour}</Text>
                </View>
                </View>
            </View>
        );
        
    }

const styles = StyleSheet.create({

    viewheader:{
        width: '100%',
        height: 100,
        justifyContent: 'center',
        marginTop: 5,
        paddingHorizontal: 20,

        
    },

    text:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10,
        
    },

    texttwo:{
        color: 'white',
        
    },

    textthree:{
        color: 'white',
    },

    view:{
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
    },

    viewtwo:{
        flexDirection: 'row',
        backgroundColor: 'gray',
        borderRadius: 5,
        paddingVertical: 20,
        
    },

    viewthree:{
        justifyContent: 'center',
        paddingRight: 10,
        
    }
}) 