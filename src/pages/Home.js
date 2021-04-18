import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { ScrollView  } from 'react-native-gesture-handler';

import InputSearch from '../components/InputSearch';
import Options from '../components/Options';
import Card1 from '../components/Card1';
import Card2 from '../components/Card2';

export default function Home() {

    return(
        <>
        <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#FFFFFF'}}>
            <InputSearch style={styles.inputArea}/>
            <View style={styles.header}>
                
            </View>
            
            <View styles={styles.contentNew}>
                <Text style={styles.title1}>O que você procura?</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
                <Options 
                    cover={require('../assets/praiaRj.jpg')}
                    title="Descanso"
                    onPress={() => alert('Em breve')}
                />
                <Options 
                    cover={require('../assets/Ecoturismo.jpg')}
                    title="Ecoturismo"
                    onPress={() => alert('Em Breve')}
                />
                <Options 
                    cover={require('../assets/Cachoeira.jpg')}
                    title="Cachoeiras"
                    onPress={() => alert('Em Breve')}
                />
                <Options 
                    cover={require('../assets/Excursao.jpg')}
                    title="Excursão"
                    onPress={() => alert('Em Breve')}
                />
            </ScrollView>
            <ScrollView vertical showsVerticalScrollIndicator={false} style={{paddingHorizontal: 15}}>
            <View styles={styles.recentView}>
                <Text style={styles.title2}>Destaques da semana</Text>
                <Card1 />
            </View>
            <View styles={styles.recentView}>
                <Text style={styles.title2}>Vistos recentemente</Text>
                <Card2 />
            </View>
            </ScrollView>
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    contentNew: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title1: {
        textAlign: 'center',
        paddingHorizontal: 15,
        fontSize: 18,
    },
    recentView: {
        marginTop: 15,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    title2: {
        textAlign: 'center',
        paddingHorizontal: 15,
        fontSize: 18,
    }
});