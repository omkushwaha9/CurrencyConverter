import React from "react";
import type { PropsWithChildren } from "react";
import { View,Text, StyleSheet } from "react-native";


type CurrencyButtonProps = PropsWithChildren<{
     name: string;
     flag: string;
}>

const CurrencyButton = (props: CurrencyButtonProps ): JSX.Element => {
    return (
        <View style ={style.buttonContainer}>
          <Text style={style.flag}>{props.flag}</Text>
          <Text style={style.Country}>{props.name}</Text>
          
        </View>
    )
}
const style = StyleSheet.create({
    buttonContainer : {
        alignItems:'center',
    },
    flag:{
        fontSize:28,
        color:'#ffffff',
        marginBottom:4,
    },
    Country:{
        fontSize:14,
        color:'#2d3436'
    }

})

export default CurrencyButton