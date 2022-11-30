import { StyleSheet, View, SectionList, Text } from "react-native";
import React, { useState } from 'react';
import { ScreenHeader } from "../components/ScreenHeader";
import { HistoryCard } from "../components/HistoryCard";

export function History(){

    const [data, sedata] = useState(
        [
          {
            title: "Main dishes",
            data: ["Pizza", "Burger", "Risotto"]
          },
          {
            title: "Sides",
            data: ["French Fries", "Onion Rings", "Fried Shrimps"]
          },
          {
            title: "Drinks",
            data: ["Water", "Coke", "Beer"]
          },
          {
            title: "Desserts",
            data: ["Cheese Cake", "Ice Cream"]
          }
            
          ]) 

    return(
        <View style={styles.view}>
            <ScreenHeader text="Histórico de Exercícios"/>
            <SectionList
            sections={data}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <HistoryCard texttwo={item} textthree={item} textfour={item}/>}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}

              ListEmptyComponent={() => (
                
                <Text style={styles.texttistemptycomponent}>Não existe exercícios no seu histórico</Text>
                
              )}

              contentContainerStyle={data.length ===0 && {flex: 1, justifyContent: 'center', alignItems: 'center'}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
        backgroundColor: 'black'
      },


      texttistemptycomponent:{
        color: 'white',

      },

      viewtistemptycomponent:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: '100%',
      },

      header: {
        fontSize: 20,
        color: 'white',
        paddingLeft: 20,
        marginTop: 50,
      }
      
}) 