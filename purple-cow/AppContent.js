import React from 'react';

import { View, StyleSheet, Text } from 'react-native';
import countapi from 'countapi-js';
import CounterComponent from './components/counter-component';
import ShowCounts from './components/show-counts';
import { env } from './config';

export default function AppContent() {
    const [count, setCount] = React.useState(null);

    React.useEffect(() => {
        countapi.get(env.counterNamespace, env.counterKey)
        .then((result) => {
            setCount(result.value);
         });
      }, []);

    const onIncrement = (val) =>
    {
        setCount(val);
    }

    return (
        <View style={[localStyles.MainContainer]}>
            <View style={[localStyles.headerContainer]} >
                <Text style={[ localStyles.headerText ]} >Purple Cow</Text>
            </View>
            <ShowCounts count={count} />
            <CounterComponent onIncrement={onIncrement} />
        </View>
    )
}

const localStyles = StyleSheet.create({
 
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FAFAFA',
      width: '90%',
      height: '100%',
    },

    headerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
        width: '100%',
      },

      headerText:{
        fontSize: 48, 
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 25.75)',
        textShadowOffset: {width: -5, height: 5},
        textShadowRadius: 10
    }
  });