import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import api from "../../services/api";
import styles from "./styles";
import { useContextProvider } from "../../context/AuthContext";

export default function AddReward({ navigation }) {
  const [name, setName] = useState("");
  const [pontos, setPontos] = useState(0);
  const [estoque, setEstoque] = useState(0);


  const onChangeNameHandler = (name) => {
    setName(name);
    console.log(name);
  };

  const onChangePontosHandler = (pontos) => {
    setPontos(pontos);
    console.log(pontos);
  };

  const onChangeEstoqueHandler = (estoque) => {
    setEstoque(estoque);
    console.log(estoque);
  };

  async function postRewards() {
    const payload = {
      nome: name,
      pontos: pontos,
      estoque: estoque, 
    };

    try {
      console.log(payload);
      const response = await api.post(
        "/rewards/cadastro/recompensas/1",
        payload,
      );

      console.log(response.data);
      navigation.navigate("Rewards")
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Rewards")}
        >
          <Feather name="arrow-left" size={16} color="black" />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.topContainer}>
        <View style={styles.firstContainer}>
          <Text style={styles.title}>Adicione uma recompensa</Text>
        </View>

      </View>


  

      <View style={styles.form}>
     
     
        <TextInput
          style={styles.input}
          placeholder="Nome da recompensa"
          onChangeText={onChangeNameHandler}
 
        />


    
          <TextInput
            style={styles.input}
            placeholder="Pontuação"
            onChangeText={onChangePontosHandler}
      
          />

<TextInput
            style={styles.input}
            placeholder="Estoque"
            onChangeText={onChangeEstoqueHandler}
      
          />
       
    

        <TouchableOpacity style={styles.loginButton} onPress={postRewards}>
          <Text style={styles.loginButtonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
   
   
    </View>
  );
}
