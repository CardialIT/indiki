import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StatusBar, FlatList, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import api from "../../services/api";
import styles from "./styles";
import { useContextProvider } from "../../context/AuthContext";

const CompanysList = ({ navigation }) => {
  const [loading, setLoading] = useState(true); // Estado para o indicador de carregamento
  const { isAdmin, companys } = useContextProvider();

  // async function fetchIndications() {
  //   try {
  //     const response = await api.get('indications', {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     console.log(response.data);
  //     setIndications(response.data);
  //     console.log('Indications:', response.data);
  //   } catch (error) {
  //     console.error('Error fetching indications:', error);
  //   } finally {
  //     setLoading(false); // Esconder o indicador de carregamento
  //   }
  // }

  // useEffect(() => {
  //   fetchIndications();
  // }, []); // Remover dependência de `indications` para evitar chamadas infinitas

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
      <Text style={styles.pageTitle}>Escolha sua empresa</Text>
      <View style={styles.content}>
        <View style={styles.sectionContainer}>
          {loading ? (
            <ActivityIndicator size="large" color="#000000" />
          ) : (
            <FlatList
              data={companys}
              keyExtractor={(item, index) => String(item.id)}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <Text style={styles.title}>{item.name}</Text>
                 
                  {/* {isAdmin && (
                    <TouchableOpacity>
                      <Feather
                        name="trash"
                        size={30}
                        color="#000000"
                        onPress={() => handleDelete(item.id)}
                      />
                    </TouchableOpacity>
                  )} */}
                </View>
              )}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default CompanysList;
