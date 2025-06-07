// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/globalStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={globalStyles.homeContainer}>
      <Text style={globalStyles.homeTitle}>Bem-vindo!</Text>

      <TouchableOpacity
        style={globalStyles.homeButton}
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={globalStyles.buttonText}>Cadastrar Aluguel</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.homeButton}
        onPress={() => navigation.navigate('Listar')}
      >
        <Text style={globalStyles.buttonText}>Listar Aluguéis</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.homeButton}
        onPress={() => navigation.navigate('Registro')}
      >
        <Text style={globalStyles.buttonText}>Cadastrar Pessoas</Text>
      </TouchableOpacity>
    </View>
  );
}
