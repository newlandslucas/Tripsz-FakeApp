import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Messages() {
    return(
        <View style={styles.content}>
            <Text style={styles.textStyle}>Em breve!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: "#4299E1",
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 24,
        fontWeight: 'bold'
    }
})