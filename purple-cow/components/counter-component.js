import React from 'react';

import { View, StyleSheet, Button, Alert } from 'react-native';
import countapi from 'countapi-js';

export default function CounterComponent() {
 
    const incrementCount=()=>{
     countapi.hit('shawn.freeman.com', '1ccb732e-b55a-4404-ad3f-0f99c02fe44e').then((result) => {
        console.log(result.value);
     });
    }

    return (
        <View style={[localStyles.MainContainer]}>
            <Button onPress={incrementCount} title="Click me to execute counter" />
        </View>
    )
}

const localStyles = StyleSheet.create({
 
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FAFAFA',
      padding: 10
    },
   
  });