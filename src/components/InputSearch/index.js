import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Feather} from '@expo/vector-icons'

export default function InputSearch() {
    return(
            <View style={styles.inputArea}>
                <Feather name="search" size={24} color="#0BC5EA"/>
                    <TextInput 
                        placeholder="Digite o destino"
                        style={styles.input}
                    />
            </View>
    )
}

const styles = StyleSheet.create({
    inputArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#FFFFFF',
        elevation: 2,
        paddingHorizontal: 10,
        height: 37,
        borderRadius: 15,
        marginTop: 15,
    },
    input: {
        paddingHorizontal: 10,
        fontSize: 15,
        width: '90%',
    }
})


