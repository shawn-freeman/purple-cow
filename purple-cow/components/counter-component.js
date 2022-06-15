import React from 'react';
import { env } from '../config/index.js';
import { View, StyleSheet, Button } from 'react-native';
import countapi from 'countapi-js';

export default function CounterComponent(props) {
 
    const incrementCount=()=>{
     countapi.hit(env.counterNamespace, env.counterKey).then((result) => {
        props.onIncrement(result.value);
     });
    }

    return (
        <View style={[localStyles.container]} >
            <Button style={[localStyles.btnContainer]} onPress={incrementCount} title="Click me to execute counter" />
        </View>
    )
}

const localStyles = StyleSheet.create({
    container:{
      flex: 3,
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
    },

    btnContainer:{
        flex: 1,
        justifyContent: 'top',
        alignItems: 'top',
      },
});