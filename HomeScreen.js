import * as React from 'react';
import { Button, View, FlatList, StyleSheet, Text } from 'react-native';
import { cats } from './breeds'

export default function HomeScreen({ navigation }) {
    return (

        <View>
            <FlatList
                data={cats}
                renderItem={({ index, item }) => {

                    <Text
                        title={item.breed}
                        onPress={() => navigation.navigate('Details', item)}
                    />

                }}
            />
        </View>
    )

}
