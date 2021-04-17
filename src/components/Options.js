import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Options(props) {
    return(
        <View style={{marginBottom: 35}}>
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Image 
                source={props.cover}
                style={styles.cover}
            />
            <View style={styles.content}>
                <Text style={styles.title}>{props.name}</Text>
            </View>
        </TouchableOpacity>
            <Text style={styles.descriptionStyle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#FFFFFF',
        height: 170,
        width: 180,
        elevation: 2,
        borderRadius: 10,
        marginRight: 30,
        marginLeft: 2,
        marginBottom: 5,
        textAlign: 'center'
    },
    cover: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    descriptionStyle: {
        marginTop: 3,
        marginRight: 25,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 16,
    }
})