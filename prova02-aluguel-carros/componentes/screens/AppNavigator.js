import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import InicioScreen from '../screens/HomeScreen'
import RegisterScreen from '../screens/RegisterScreen';
import CadastroScreen from '../screens/FormScreen';
import ListaAlugueis from '../screens/ListScreen'

const Stack = createStackNavigator();

const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Inicio" component={InicioScreen} />
        <Stack.Screen name="Registro" component={RegisterScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Listar" component={ListaAlugueis} />
    </Stack.Navigator>
);

export default StackNavigator;
