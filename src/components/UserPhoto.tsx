import { Image } from "react-native";
import React from 'react';

type Props = {
    heightimage: any,
    widthimage: any,
    borderradius: number,
    Source: any,
    resizemode: any,
     }

    export function UserPhoto({heightimage, widthimage, borderradius, Source, resizemode }: Props){
        return(          
            
            
                <Image style={[{
                width: widthimage, 
                height: heightimage,  
                resizeMode: resizemode,
                alignSelf: 'center',
                marginVertical: 5,
                borderRadius: borderradius,
            }]} 
            source={Source}
            />
            
        );
        
    }