// src/screens/AluguelScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../services/credenciaisFirebase'; // Firestore
import globalStyles from '../styles/globalStyles';

export default function AluguelScreen() {
  const [form, setForm] = useState({
    carro: '',
    cliente: '',
    valor: '',
    data: '',
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async () => {
    const { carro, cliente, valor, data } = form;

    if (!carro || !cliente || !valor || !data) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    try {
      await addDoc(collection(db, 'alugueis'), {
        nomeCarro: carro,
        nomeCliente: cliente,
        valorAluguel: parseFloat(valor),
        dataAluguel: data,
        createdAt: new Date()
      });
      Alert.alert('Sucesso', 'Aluguel registrado com sucesso!');
      setForm({ carro: '', cliente: '', valor: '', data: '' });
    } catch (error) {
      Alert.alert('Erro ao salvar', error.message);
      console.error(error);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Registrar Aluguel</Text>

      <TextInput
        placeholder="Nome do Carro"
        style={globalStyles.input}
        value={form.carro}
        onChangeText={(v) => handleChange('carro', v)}
      />
      <TextInput
        placeholder="Nome do Cliente"
        style={globalStyles.input}
        value={form.cliente}
        onChangeText={(v) => handleChange('cliente', v)}
      />
      <TextInput
        placeholder="Valor do Aluguel"
        keyboardType="numeric"
        style={globalStyles.input}
        value={form.valor}
        onChangeText={(v) => handleChange('valor', v)}
      />
      <TextInput
        placeholder="Data do Aluguel (ex: 2025-06-06)"
        style={globalStyles.input}
        value={form.data}
        onChangeText={(v) => handleChange('data', v)}
      />

      <TouchableOpacity style={globalStyles.button} onPress={handleSubmit}>
        <Text style={globalStyles.buttonText}>Salvar Aluguel</Text>
      </TouchableOpacity>
    </View>
  );
}
