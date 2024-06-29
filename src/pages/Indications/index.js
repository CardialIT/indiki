import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StatusBar, FlatList, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import api from "../../services/api";
import styles from "./styles";
import { useContextProvider } from "../../context/AuthContext";

const IndicationsList = ({ navigation }) => {
  const [isSearchFocused, setSearchFocused] = useState(false);
  const [indications, setIndications] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para o indicador de carregamento
  const { isAdmin, token } = useContextProvider();

  async function fetchIndications() {
    try {
      const response = await api.get('request/solicitacoes/1');
      console.log(response.data);
      setIndications(response.data);
      console.log('Indications:', response.data);
    } catch (error) {
      console.error('Error fetching indications:', error);
    } finally {
      setLoading(false); // Esconder o indicador de carregamento
    }
  }

  useEffect(() => {
    fetchIndications();
  }, []); // Remover dependência de `indications` para evitar chamadas infinitas

  const onFocusSearch = () => {
    setSearchFocused(true);
  };

  const handleConsolidation = async () => {
    try {
      // Call your API or perform the consolidation logic here
      console.log('Consolidation successful!');
    } catch (error) {
      console.error('Error consolidating indications:', error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Feather name="arrow-left" size={16} color="black" />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.pageTitle}>Indicações</Text>
      <View style={styles.content}>
        <View style={styles.sectionContainer}>
          {loading ? (
            <ActivityIndicator size="large" color="#000000" />
          ) : (
            <FlatList
              data={indications}
              keyExtractor={(item, index) => String(item.id)}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <View style={styles.itemInfo}>
                    <Text style={styles.title}>{item.nome_destinatario}</Text>
                    <Text style={styles.date}>Indicado em: {new Date(item.data_solicitacao).toLocaleDateString()}</Text>
                    <Text style={styles.status}>{item.status}</Text>
                  </View>
                  <View style={styles.itemActions}>
                 
                    {isAdmin && (
                      <TouchableOpacity style={styles.consolidationButton} onPress={handleConsolidation}>
                        <Text style={styles.consolidationButtonText}>Consolidar</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              )}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default IndicationsList;