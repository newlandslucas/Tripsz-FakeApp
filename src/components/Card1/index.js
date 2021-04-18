import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default function Card1() {
    return(
        <TouchableOpacity style={styles.container}>
            <Image 
                source={require('../../assets/praia2.jpg')}
                style={styles.cover}
            />
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionTitleText}>Doug Tour</Text>
                    <Text style={styles.descriptionDestination}>Bonito MS com áreo e passeio incluso</Text>
                    <Text style={styles.descriptionTravelDetails}>ida: 24/06/2021</Text>
                    <Text style={styles.descriptionTravelDetails}>volta: 29/06/2021</Text>
                    <Text style={styles.descriptionTravelDetails}>Aéreo + Transfer + Hospedagem + Passeios</Text>
                    <Text style={styles.descriptionPrice}>Preço por pessoa: R$ 1800,00</Text>
                    <Text style={styles.descriptionCashback}>Cashback: R$18,00</Text>
                </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#FFFFFF',
        height: 400,
        width: 350,
        elevation: 2,
        borderRadius: 15,
        marginRight: 3,
        marginLeft: 3,
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