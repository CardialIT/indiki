import React, { useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import api from "../../services/api.js";
import { useContextProvider } from "../../context/AuthContext";

export default function Indication({ navigation }) {
  const [indicationStatus, setIndicationStatus] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false); // Estado para o indicador de carregamento
  const { userIdLogin } = useContextProvider();

  const toggleModalSucess = () => {
    if (indicationStatus === 'success' || indicationStatus === 'failed') {
      setModalVisible(!modalVisible);
      setIndicationStatus(null);
    }
  };

  const onChangeNameHandler = (name) => {
    setName(name);
    console.log(name);
  };

  const onChangeEmailHandler = (email) => {
    setEmail(email);
    console.log(email);
  };

  const postIndication = async () => {
    setLoading(true); 
   
    const requestBody = {
      email: email,
      nome: name,
      empresa_id: 1,
    };
  
    try {
      console.log("body " + requestBody + "user id" + userIdLogin)
      const response = await api.post(`/aplication/indicar/${userIdLogin}`, requestBody);
      console.log(response.status);
      if (response.status === 200 || response.status === 201) {
        setIndicationStatus("success");
      } else {
        setIndicationStatus("failed");
      }
    } catch (err) {
      console.error(err);
      setIndicationStatus("failed");
    } finally {
      setLoading(false); // Esconder o indicador de carregamento
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Feather name="arrow-left" size={16} color="black" />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Indique uma pessoa</Text>
      </View>
    
      <View style={styles.form}>
        <View style={styles.infoCard}>
          <Text style={styles.infoCardLabel}>Nome</Text>
          <TextInput
            style={styles.inputBackground}
            placeholder="Digite o nome do indicado"
            onChangeText={onChangeNameHandler}
          />
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoCardLabel}>E-mail</Text>
          <TextInput
            style={styles.inputBackground}
            placeholder="Digite o e-mail do indicado"
            onChangeText={onChangeEmailHandler}
          />
        </View>
        <View style={styles.indiqueButtonContainer}>
          <TouchableOpacity
            style={styles.indiqueButton}
            onPress={postIndication}
            disabled={loading} // Desabilitar o botão enquanto carrega
          >
            {loading ? (
              <ActivityIndicator size="small" color="#FFFFFF" />
            ) : (
              <Text style={styles.indiqueButtonText}>Indique já</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {indicationStatus === "success" ? (
              <Text>Indicação realizada com sucesso!</Text>
            ) : (
              <Text>Indicação falhou. Tente novamente.</Text>
            )}
            <TouchableOpacity style={styles.buttonCloseModalLogin} onPress={toggleModalSucess}>
              <Text style={styles.buttonTextCloseModalLogin}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
