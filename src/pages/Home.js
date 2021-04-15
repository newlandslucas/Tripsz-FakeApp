import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Options from '../components/Options';


export default function Home() {
    const navigation = useNavigation();
    return(
        <ScrollView
            showsHorizontalScrollIndicator={false}
            style={{backgroundColor: '#EDF2F7'}}
        >
            <View style={styles.header}>
                <View style={styles.inputArea}>
                    <Feather name="search" size={24} color="#0BC5EA"/>
                    <TextInput 
                        placeholder="Digite o destino"
                        style={styles.input}
                    />
                </View>
            </View>
            
            <View styles={styles.contentNew}>
                <Text style={styles.title1}>O que você procura?</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
                <Options 
                    cover={require('../assets/praiaRj.jpg')}
                    title="Descanso"
                    onPress={() => navigation.navigate('detail')}
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
                <Text style={styles.title2}>Visto Recentemente</Text>
            </View>
            </ScrollView>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
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
    fontFamily: 'Montserrat_500Medium',
    paddingHorizontal: 10,
    fontSize: 15,
    width: '90%',
},
contentNew: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',

},
title1: {
    textAlign: 'center',
    paddingHorizontal: 15,
    fontFamily: 'Montserrat_700Bold',
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
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
}
});