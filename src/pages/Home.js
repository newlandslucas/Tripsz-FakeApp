import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView  } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import InputSearch from '../components/InputSearch'
import Options from '../components/Options';


export default function Home() {
    const navigation = useNavigation();
    return(
        <ScrollView
            showsHorizontalScrollIndicator={false}
            style={{backgroundColor: '#EDF2F7'}}
        >
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
inputArea: {
    marginTop: 15,
},
header:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 20,
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