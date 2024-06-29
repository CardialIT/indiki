import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Modal,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import styles from './styles';
import api from '../../services/api';
import { useContextProvider } from '../../context/AuthContext';
import { Feather } from '@expo/vector-icons';

const Rewards = ({ navigation }) => {
  const { isAdmin, token } = useContextProvider();

  const [rewards, setRewards] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleDelete = async (id) => {
    try {
      console.log(`ID: ${id}`);
      const response = await api.delete(`rewards/recompensas/${id}`);
      fetchRewards(); // Atualizar a lista de recompensas após a exclusão
    } catch (error) {
      console.error('Error deleting rewards:', error);
    }
  };

  const fetchRewards = async () => {
    try {
      const response = await api.get('rewards/recompensas/1');
      setRewards(response.data);
    } catch (error) {
      console.error('Error fetching rewards:', error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchRewards();
    }, [])
  );

  const toggleModal = () => {
    setModalVisible(!modalVisible);
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

      <View style={styles.topContainer}>
        <View style={styles.firstContainer}>
          <Text style={styles.title}>Recompensas</Text>
          {/* <Text style={styles.titleScore}>Pontuação: </Text> */}
        </View>
        {isAdmin && (
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              navigation.navigate('RewardAdd');
            }}
          >
            <Feather name="plus" size={16} color="white" />
          </TouchableOpacity>
        )}
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#000000" />
      ) : (
        <FlatList
          data={rewards}
          keyExtractor={(item, index) => String(item.recom_id)}
          renderItem={({ item, index }) => (
            <View style={styles.item}>
              <View>
                <Text style={styles.name}>{item.nome}</Text>
                <Text style={styles.date}>Pontos: {item.pontos}</Text>
                <Text style={styles.date}>Estoque: {item.estoque}</Text>
              </View>
              <View style={styles.optionsReward}>
                {isAdmin && (
                  <TouchableOpacity>
                    <Feather
                      name="trash"
                      size={30}
                      color="#e63e8f"
                      onPress={() => handleDelete(item.recom_id)}
                    />
                  </TouchableOpacity>
                )}
                {isAdmin && (
                  <TouchableOpacity>
                    <Feather
                      name="bell"
                      size={30}
                      color="#e63e8f"
                      onPress={toggleModal}
                    />
                  </TouchableOpacity>
                )}
                {!isAdmin && (
                  <TouchableOpacity style={styles.resgateButton}>
                    <Text style={styles.resgateButtonText}>Resgatar</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          )}
        />
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Em breve</Text>
            <TouchableOpacity
              style={styles.buttonCloseModalLogin}
              onPress={toggleModal}
            >
              <Text style={styles.buttonTextCloseModalLogin}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Rewards;