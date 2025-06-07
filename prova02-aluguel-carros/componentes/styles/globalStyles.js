// src/styles/globalStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Container padrão para telas gerais
  container: {
    flex: 1,
    backgroundColor: '#1E1E2F', // roxo escuro
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  // Texto título padrão
  title: {
    fontSize: 26,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 30,
  },

  // Inputs
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#2E2E4D',
    borderColor: '#8E24AA',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: '#FFFFFF',
  },

  // Botão padrão
  button: {
    backgroundColor: '#8E24AA', // roxo vibrante
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },

  // Texto botão
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // Estilos específicos para a HomeScreen
  homeContainer: {
    flex: 1,
    backgroundColor: '#1E1E2F',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  homeTitle: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 40,
  },

  homeButton: {
    backgroundColor: '#8E24AA',
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 8,
    width: '70%',
    alignItems: 'center',
  },
});
