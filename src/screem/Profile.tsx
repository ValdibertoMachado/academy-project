import { StyleSheet, ScrollView, View, TouchableOpacity, Text} from "react-native";
import React from 'react';
import { ScreenHeader } from "../components/ScreenHeader";
import { UserPhoto } from "../components/UserPhoto";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";


export function Profile(){

    const [userPhoto, setuserPhoto] = useState('http://github.com/ValdibertoMachado.png');

    async function HandleUserPhotoSelect(){
        try {
            const photoSelected =  await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4,4],
                quality: 1,
              });
              if(photoSelected.canceled){
                return
              }
              if(!photoSelected.canceled){
              return  setuserPhoto(photoSelected.assets[0].uri)
              }
              
        } catch (error) {
            
        }
}


    return(
       <ScrollView style={styles.scrollview}>
       <ScreenHeader text="Perfil"/>
       <View style={styles.View}>
       <UserPhoto resizemode={'cover'} Source={{uri: userPhoto}} borderradius={50} heightimage={100} widthimage={100}/>
       <TouchableOpacity onPress={HandleUserPhotoSelect}>
       <Text style={styles.text}>Alterar foto</Text>
       </TouchableOpacity>
       </View>
       <View style={styles.View}>
       <Input trueorfalse={false} placeholder={'Nome'} keyboardtype={'default'}/>
       <Input trueorfalse={false} placeholder={'E-mail'} keyboardtype={'email-address'}/>
       </View>
       <View style={styles.View}>
       <Text style={styles.texttwo}>Alterar Senha</Text>
       <Input trueorfalse={true} placeholder={'Senha antiga'} keyboardtype={'numeric'}/>
       <Input trueorfalse={true} placeholder={'Senha nova'} keyboardtype={'numeric'}/>
       <Input trueorfalse={true} placeholder={'Confirme a nova senha'} keyboardtype={'numeric'}/>
       <Button colortext="white" heightTouchable={50}  widthTouchable={'70%'}  titlebutton="Atualizar" trueorfalse/>
       </View>
       
       
       </ScrollView>
       
       
    )
}

const styles = StyleSheet.create({
    scrollview:{
        flex: 1,
        backgroundColor: 'black',
    },

    View:{
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 20,
    },

    viewtwo:{
        backgroundColor: 'white'
    },

    text:{
        color: 'white',
        alignSelf: 'center',
        fontSize: 20,
        marginBottom: 20,
    },

    texttwo:{
        color: 'white',
        fontSize: 20,
        paddingLeft: 60,
        paddingBottom: 10,
    },

}) 