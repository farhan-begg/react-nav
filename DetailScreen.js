import * as React from 'react';
import { Button, View, Text } from 'react-native'

export default function DetailScreen({ route, navigation }) {
    const item = route.params
    const keys = Object.keys(item)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {keys.map((key) => <Text>{key}</Text>)}
        </View>
    )
}