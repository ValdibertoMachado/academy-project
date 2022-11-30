import { StyleSheet, Text, Pressable } from "react-native";
import React, { useState } from 'react';


type Props = {
    text: string
    
}

export function Group({text, }: Props){

    const [focus, setFocus] = useState(false);

    return(
    
    <Pressable 
    onBlur={() => setFocus(false)} 
    onFocus={() => setFocus(true)} 
    style={focus ? styles.touchableopacityonblur : styles.touchableopacityonfocus }>
    <Text style={focus ? styles.textonblur : styles.textonfocus }>
        {text}
    </Text>
    </Pressable>

    );
    
}

const styles = StyleSheet.create({

    touchableopacityonfocus: {
        backgroundColor: 'gray',
        height: 50,
        width: 100,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginVertical: 5,
        marginLeft: 5,
    },

    textonfocus:{
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 10,
        
    },

    textonblur:{
        color: 'green',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 10,
    },

    touchableopacityonblur: {
        backgroundColor: 'gray',
        height: 50,
        width: 100,
        borderRadius: 5,
        alignContent: 'center',
        borderColor: 'green',
        borderWidth: 5,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginVertical: 5,
        marginLeft: 5,
    },

   
}) 