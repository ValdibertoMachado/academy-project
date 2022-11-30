import { StyleSheet, TextInput,  } from "react-native";
import React, { useState } from "react";



type Props = {
placeholder?: string,
keyboardtype?: any,
trueorfalse?: boolean,
onchangetext?: any,
onsubmitediting?: any,
}

export function Input({placeholder, keyboardtype, trueorfalse, onchangetext}: Props){

    const [focus, setFocus] = useState(false);

    return(
    <>
    {trueorfalse
    ?
    <TextInput
    onChangeText={onchangetext}
    onFocus={() => setFocus(true)} 
    onBlur={() => setFocus(false)} 
    placeholderTextColor={'white'} 
    placeholder={placeholder} 
    style={focus ? styles.inputOnFocus : styles.inputOnBlur} 
    keyboardType={keyboardtype} 
    secureTextEntry/>
    :
    <TextInput 
    onChangeText={onchangetext}
    onFocus={() => setFocus(true)} 
    onBlur={() => setFocus(false)} 
    placeholderTextColor={'white'} 
    placeholder={placeholder} 
    style={focus ? styles.inputOnFocus : styles.inputOnBlur} 
    keyboardType={keyboardtype} 
    />
    }
    
    </>
    );
    
}

const styles = StyleSheet.create({
 
    inputOnFocus: { backgroundColor: 'green',
    width: '70%',
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: 'darkturquoise',
    borderWidth: 1,
    marginTop: 10,
    opacity: 0.9,
    marginVertical: 20,
    paddingLeft: 10,
    height: 40,
    color: 'white' 
},


    inputOnBlur: { backgroundColor: 'black',
    width: '70%',
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: 'darkturquoise',
    borderWidth: 1,
    marginTop: 10,
    opacity: 0.9,
    marginVertical: 20,
    paddingLeft: 10,
    height: 40,
    color: 'white' 
},

}) 