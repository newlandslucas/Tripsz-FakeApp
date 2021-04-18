import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Routes from './src/router';

import * as LocalAuthentication from 'expo-local-authentication';

export default function App() {

  const [isModalVisible, setIsModalVisible] = useState(true);
  async function autenticate() {
    const hasPassword = await LocalAuthentication.isEnrolledAsync();

    if(!hasPassword) return;

    const { sucess, error } = await LocalAuthentication.authenticateAsync();

    if(sucess) {
      Alert.alert('Autenticação realizada com sucesso!')
    } 

    setIsModalVisible(false);
  }

  Platform.OS === 'ios' && autenticate();

  {
    Platform.OS === 'android' && (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onShow={autenticate}
      >
        <View style={styles.modal}>
          <Text style={styles.authText}>Autentique-se utilizando sua digital</Text>
          <TouchableOpacity onPress={() => {
          LocalAuthentication.cancelAuthenticate();
          setIsModalVisible(false);
        }}
        >
        
          <Text style={styles.cancelText}>Cancelar</Text>
         </TouchableOpacity>
        </View>
      </Modal>
    )
  }
  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={false} />
      <Routes/>
    </>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#333',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%'
  },
  cancelText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold'
  },
  authText: {
    color: '#FFFFFF',
    fontSize: 18
  } 
})