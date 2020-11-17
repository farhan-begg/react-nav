import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-natve';
export default function Cell({ title, onPress }) {
    return (
        <TouchableHighlight onPress={onPress} style={style.container}>
            <Text style={style.title}>{title}</Text>
        </TouchableHighlight>
    )
}
const style = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        broderBottomWidth: 1,
        borderBottomColor: '#999'

    },
    title: {
        fontSize: 24
    }
})