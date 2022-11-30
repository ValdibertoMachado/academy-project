import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, ImageBackground, ScrollView, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import * as React from 'react'
import { useState } from "react";

 

export function SignUp(){
  
  
  const value = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  const navigation = useNavigation()
  const [name, setName] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState(null)
  const [confirmarsenha, setConfirmarsenha] = useState(null)


function handleNewAccount(){
  navigation.goBack()
}

function handleSignUp(){
  fetch('http://192.168.0.12:3333/users', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name, email, password })
})
  .then(response => response.json())
  .then(data => console.log(data))
}

function handleSubmit(){

  if(name === null || !value.test(email) || password === null || confirmarsenha === null || confirmarsenha !== password){
   Alert.alert('Insira todos os dados de forma correta')
  } else{
    handleSignUp
  }
  
}
    return(
    <ScrollView style={styles.scrollview}>
    <View style={styles.view}>
    <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
    <View style={styles.viewtwo}>
    <Icon style={styles.icon} color='yellow' name="bolt" size={50}/>
    <Text style={styles.text}>Ignite Gym</Text>
    </View>
    <Text style={styles.texttwo}>Treinar corpo e mente</Text>
    <Text style={styles.textthree}>Crie sua conta</Text>
    <Input onchangetext={setName} trueorfalse={false} placeholder={'Nome'} keyboardtype={'default'}/>
    <Input onchangetext={setEmail} trueorfalse={false} placeholder={'E-mail'} keyboardtype={'email-address'}/>
    <Input onchangetext={setPassword} trueorfalse={true} placeholder={'Senha'} keyboardtype={'numeric'}/>
    <Input onchangetext={setConfirmarsenha} trueorfalse={true} placeholder={'Confirmar senha'} keyboardtype={'numeric'}/>
    <Button onpress={handleSubmit} colortext="white" heightTouchable={50}  widthTouchable={'70%'} trueorfalse={true} titlebutton="Criar e acessar"/>
    <Button colortext="white" onpress={handleNewAccount} heightTouchable={50}  widthTouchable={'70%'}  trueorfalse={false} titlebutton="Voltar para o login"/>
    </ImageBackground>
    </View>
    </ScrollView>
    );
    
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
        
    },

    viewtwo:{
      justifyContent: 'center',
      flexDirection:'row',
    },

      image: {
        flex: 1,
        height: 20,
        
      
      },

      text: {
        color: "white",
        fontSize: 25,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 50,
        
      },

      texttwo:{
        color: "white",
        fontSize: 20,
        textAlign: 'center',
      },

      textthree:{
        color: "white",
        fontSize: 20,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 10
      },

      icon:{
        marginTop: 70,
      },

      input:{
        backgroundColor: 'lightskyblue',
        width: '60%',
        alignSelf: 'center',
        borderRadius: 5,
        borderColor: 'darkturquoise',
        borderWidth: 5,
        marginTop: 10,
        opacity: 0.4,
        
      },

      scrollview:{
        flex: 1,
        backgroundColor: 'black',
      }
    });