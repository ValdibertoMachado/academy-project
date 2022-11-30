import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import React from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

type Props = {
    exercisename: string,
    numberrepetitions: string,
    trueorfalse: boolean,
    onpress: any,
    }

    export function ExerciseCard({trueorfalse, exercisename, numberrepetitions}: Props){

        const navigation = useNavigation()
        function HandleOpenExerciseDetails(){
        navigation.navigate('Exercise')
        }

        return(
            <View style={styles.view}>
                {trueorfalse
                ?
            <View style={styles.viewthree}>
                <Image  source={{uri: 'http://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg'}}  style={styles.image}/>
                <View style={styles.viewtwo}>
                <Text style={styles.text}>{exercisename}</Text>
                <Text style={styles.text}>{numberrepetitions}</Text>
                </View>
                <TouchableOpacity onPress={HandleOpenExerciseDetails} style={styles.touchableopacity}>
                <Icon size={50} style={styles.logouticon} name="chevron-right"/>
                </TouchableOpacity>
            </View>
                :
                <View style={styles.viewthree}>
                <Image  
                source={{uri: 'http://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg'}}  
                style={styles.image}/>
                <View style={styles.viewtwo}>
                <Text style={styles.text}>{exercisename}</Text>
                <Text style={styles.text}>{numberrepetitions}</Text>
                </View>
                <TouchableOpacity onPress={HandleOpenExerciseDetails} style={styles.touchableopacity}>
                <Icon size={50} style={styles.logouticon} name="chevron-right"/>
                </TouchableOpacity>
            </View>
                }
       
            </View>
        );
        
    }

const styles = StyleSheet.create({

    view:{
        flexDirection: 'row',
        height: 100,
        borderRadius: 5,
        alignItems: 'center',
        
    },

    viewtwo:{
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },

    viewthree:{
        flex: 1,
        paddingLeft: 10,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: 'gray',
        paddingVertical: 10,
    },


    touchableopacity:{
        justifyContent: 'center',
        marginRight: 20,
        
    },

    touchableopacitytwo:{
        height: 50,
        width: 50,
    },

    image:{
        height: 70,
        width: 70,
        resizeMode: "cover",
        borderRadius: 5,
    },

    text: {
        textTransform: 'uppercase',
        fontSize: 15,
        fontWeight: 'bold',
    },

    logouticon:{
        color: 'black',
        
    
       },
}) 