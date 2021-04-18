import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default function Card2() {
    return(
        <TouchableOpacity style={styles.container}>
            <Image 
                source={require('../../assets/Cachoeira.jpg')}
                style={styles.cover}
            />
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionTitleText}>Ganesha Adventure</Text>
                    <Text style={styles.descriptionDestination}>Rio de Janeiro | Arraial do Cabo</Text>
                    <Text style={styles.descriptionTravelDetails}>ida: 23/04/2021</Text>
                    <Text style={styles.descriptionTravelDetails}>volta: 25/04/2021</Text>
                    <Text style={styles.descriptionTravelDetails}>Hotel no RJ com pisina + Transporte + City Tour</Text>
                    <Text style={styles.descriptionPrice}>Preço por pessoa: R$ 449,00</Text>
                    <Text style={styles.descriptionCashback}>Cashback: R$2,50</Text>
                </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#FFFFFF',
        height: 400,
        width: '98%',
        elevation: 2,
        borderRadius: 15,
        marginRight: 3,
        marginLeft: 5,
        marginBottom: 5,
    },
    cover: {
        width: '100%',
        height: 250,
        borderRadius: 15
    },
    descriptionContainer: {
        marginTop: 10,     
    },
    descriptionTitleText: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    descriptionDestination: {
        marginTop: 2,     
        fontSize: 14,
        fontWeight: 'bold'
    },
    descriptionTitle: {
        marginTop: 2,     

    },
    descriptionTravelDetails: {
        marginTop: 2, 
        fontSize: 14, 
        opacity: 0.8,

    },
    descriptionPrice: {
        marginTop: 2,
        opacity: 0.8,
        fontWeight: 'bold',
        fontSize: 13,
    },
    descriptionCashback: {
        marginTop: 2,
        opacity: 0.8,
        fontWeight: 'bold',
        fontSize: 13
    },
})

