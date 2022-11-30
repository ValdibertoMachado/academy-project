import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState } from 'react';
import { HomeHeader } from "../components/HomeHeader";
import { Group } from "../components/Group";
import { ExerciseCard } from "../components/ExerciseCard";



export function Home(){

    const [groups, setgroups] = useState(['Costa', 'Bíceps', 'Tríceps', 'Ombros'])
    const [exercises, setexercises] = useState(['Costa', 'Bíceps', 'Tríceps', 'Ombros', 'Ombros', 'Ombros'])
    

    return(
        <View style={styles.view}>
            <HomeHeader/>
            
            <FlatList
            style={styles.flatlist}
            data={groups}
            keyExtractor={item => item}
            renderItem={({ item }) =>(
                
                <Group text={item}/>
                
            )}
            horizontal
            />
            <View style={styles.viewthree}>
            <View style={styles.viewtwo}>
            <Text style={styles.text}>Exercício</Text>
            <Text style={styles.textwo}>{exercises.length}</Text>
            </View>
            <FlatList
            data={exercises}
            keyExtractor={item => item}
            renderItem={({ item }) =>(
                
                <ExerciseCard onpress={''} exercisename={item} trueorfalse numberrepetitions="3 Séries x 12 Repetições"/>
                
            )}
           
            />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
        backgroundColor: 'black'
      },

      flatlist: {
        maxHeight: 80,
      },

      viewtwo:{
        flexDirection: 'row',
        paddingVertical: 20,
      },

      viewthree:{
        paddingHorizontal: 10,
        paddingVertical: 10,
        flex: 1,
        
      },

      text:{
        flex: 1,
        color: 'white',   
        fontSize: 20,
      },

      textwo:{
        color: 'white',
        fontSize: 20,
      },
}) 