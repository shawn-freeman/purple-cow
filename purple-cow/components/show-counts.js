import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function ShowCounts(props) {

    return (
        <View style={[localStyles.textContainer]}  >
            <Text style={[localStyles.counterText]} >Count: {props.count}</Text>
        </View>
    )
}

const localStyles = StyleSheet.create({
      counter:{
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      },

      textContainer: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        fontSize: '36',
      },
      counterText:{
        fontSize: 36, 
        color: 'black',
    }
  });