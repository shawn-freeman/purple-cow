import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function ShowCounts(props) {

    return (
        <View >
            <Text>Count: </Text><Text>{props.count}</Text>
        </View>
    )
}