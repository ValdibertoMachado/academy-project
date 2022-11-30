import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, ImageBackground, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import React from 'react';



export function Singnin(){

  const navigation = useNavigation()

function handlenewaccount(){
  navigation.navigate('SignUp')
}
    return(
    <ScrollView style={styles.scrollview}>
    <View style={styles.view}>
    <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}>
    <View style={styles.viewtwo}>
    <Icon style={styles.icon} name="bolt" size={50}/>
    <Text style={styles.text}>Gym</Text>
    </View>
    <Text style={styles.texttwo}>Treinar corpo e mente</Text>
    <Text style={styles.textthree}>Acesse sua conta</Text>
    <Input placeholder={'E-mail'} keyboardtype={'email-address'}/>
    <Input placeholder={'Senha'} keyboardtype={'numeric'}/>
    <Button colortext="white" heightTouchable={50}  widthTouchable={'70%'} trueorfalse={true} titlebutton="Acessar"/>
    <Text style={styles.textfour}>Ainda não tem acesso?</Text>
    <Button colortext="white" heightTouchable={50}  widthTouchable={'70%'} onpress={handlenewaccount} trueorfalse={false} titlebutton="Criar conta"/>
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

      textfour: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 30,
        
        
      },

      icon:{
        marginTop: 70,
        color:'yellow',
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