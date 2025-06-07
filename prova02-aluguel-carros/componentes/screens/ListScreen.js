// src/screens/ListaAlugueisScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../services/credenciaisFirebase';
import globalStyles from '../styles/globalStyles';

export default function ListaAlugueisScreen() {
  const [alugueis, setAlugueis] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarAlugueis = async () => {
    try {
      const q = query(collection(db, 'alugueis'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);

      const lista = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      setAlugueis(lista);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao carregar aluguéis:', error);
    }
  };

  useEffect(() => {
    carregarAlugueis();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>{item.nomeCarro} - {item.nomeCliente}</Text>
      <Text style={styles.itemText}>Valor: R$ {item.valorAluguel}</Text>
      <Text style={styles.itemText}>Data: {item.dataAluguel}</Text>
    </View>
  );

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Lista de Aluguéis</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0D47A1" />
      ) : (
        <FlatList
          data={alugueis}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 16,
    color: '#CCCCCC',
  },
});
