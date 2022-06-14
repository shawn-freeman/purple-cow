import React from 'react';

import { View, StyleSheet, Text } from 'react-native';
import countapi from 'countapi-js';
import CounterComponent from './components/counter-component';
import ShowCounts from './components/show-counts';

export default function AppContent() {
    const [count, setCount] = React.useState(null);

    React.useEffect(() => {
        countapi.get('shawn.freeman.com', '1ccb732e-b55a-4404-ad3f-0f99c02fe44e')
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
      padding: 10
    },
   
  });