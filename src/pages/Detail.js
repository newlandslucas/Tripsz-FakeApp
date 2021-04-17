import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export default function Detail() {
    return(
        <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#EDF2F7'}}
        >
            <>
                <View style={styles.header}>
                    <View style={styles.inputArea}>
                        <Feather name="search" size={24} color="#0BC5EA"/>
                        <TextInput 
                            placeholder="Digite o destino"
                            style={styles.input}
                        />
                    </View>
                </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cards}>
                        <TouchableOpacity style={styles.container}>
                                <Image 
                                    source={require('../assets/praia2.jpg')}
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
                    </ScrollView>
                    <View style={styles.footer}>
                            <Text style={styles.footerText}>Não encontrou a viagem que procurava? Vamos te ajudar! Clique aqui e nos informe a viagem que quer fazer</Text>
                        </View>
                </>
            </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    wallpaper: {
        height: 170,
        elevation: 2,
        borderRadius: 15,
        marginBottom: 5,
    },
    header:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20,
    },
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
    },
    input: {
        paddingHorizontal: 10,
        fontSize: 15,
        width: '90%',
    },
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
    cards: {
        marginLeft: 16,
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
        opacity: 0.4,

    },
    descriptionPrice: {
        marginTop: 2,
        opacity: 0.4,
        fontWeight: 'bold',
        fontSize: 13,
    },
    descriptionCashback: {
        marginTop: 2,
        opacity: 0.4,
        fontWeight: 'bold',
        fontSize: 13
    },
    footer: {
        marginTop: 10, 
        marginRight: 10,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerText: {
        fontSize: 12
    },


})