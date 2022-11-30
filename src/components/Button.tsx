import { TouchableOpacity, Text, View } from "react-native";
import React from 'react';

type Props = {
    titlebutton: string,
    trueorfalse: boolean,
    onpress?: any,
    heightTouchable: number,
    widthTouchable: any,
    colortext: string,
    }

    export function Button({titlebutton, onpress, heightTouchable, widthTouchable, colortext}: Props){
        return(
            <View>
                
                <TouchableOpacity style={[{            
                backgroundColor: 'green',
                height: heightTouchable,
                alignSelf: 'center',
                borderRadius: 10,
                justifyContent: 'center',
                width: widthTouchable,
                opacity: 0.9,
                marginBottom: 10,
                borderStyle: "solid",
                borderWidth: 2,
                borderColor: 'black',
                }]}
                onPress={onpress} 
                activeOpacity={0.5}>
                <Text style={[{            
                fontWeight: 'bold',
                alignSelf: 'center',
                color: colortext
                }]}>
                {titlebutton}
                </Text>
            </TouchableOpacity>
       
            </View>
        );
        
    }