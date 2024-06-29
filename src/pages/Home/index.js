import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { useContextProvider } from "../../context/AuthContext";
import { useEffect } from "react";

export default function App({ navigation }) {
  const { name, isAdmin } = useContextProvider();

useEffect(() => {
  console.log(name)
  console.log(isAdmin)
}, [])

  return (
    <View style={styles.container}>
         <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.containerHeader}>
        <View style={styles.viewInformation}>
          <Text style={styles.nameText}>Olá, {name}</Text>
           <Text>200 pts</Text> 
        </View>

        <TouchableOpacity>
          {/* <Feather
            name="bell"
            size={30}
            color="#000000"
            onPress={() => navigation.navigate("Animals")}
          /> */}
        </TouchableOpacity>
      </View>

      <View style={styles.containerButtons}>



    
          <TouchableOpacity
            style={styles.buttonHome}
            onPress={() => navigation.navigate("Indications")}
          >
            <View>
              <Text style={styles.buttonHomeTextTitle}>Indicações</Text>

              {isAdmin && (
                 <Text style={styles.buttonHomeTextSubtitle}>
                 Confira seus futuros clientes
                </Text>
  )}
                     {!isAdmin && (
                 <Text style={styles.buttonHomeTextSubtitle}>
                 Veja quem você já indicou
                </Text>
  )}
            </View>
          </TouchableOpacity>
             




{isAdmin && (
          <TouchableOpacity
            style={styles.buttonHome}
            onPress={() => navigation.navigate("Indicators")}
          >
            <View>
              <Text style={styles.buttonHomeTextTitle}>Indicadores</Text>

              <Text style={styles.buttonHomeTextSubtitle}>
                Veja quem te ajuda nessa causa
              </Text>
            </View>
          </TouchableOpacity>
             )}

        {!isAdmin && (
          <TouchableOpacity
            style={styles.buttonHome}
            onPress={() => navigation.navigate("Indication")}
          >
            <View>
              <Text style={styles.buttonHomeTextTitle}>Indique uma pessoa</Text>

              <Text style={styles.buttonHomeTextSubtitle}>
                E receba recompensas
              </Text>
            </View>

          
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.buttonHome}
          onPress={() => navigation.navigate("Rewards")}
        >
          <View>
            <Text style={styles.buttonHomeTextTitle}>Recompensas</Text>
 {!isAdmin && (
            <Text style={styles.buttonHomeTextSubtitle}>
              Confira o que está disponível
            </Text>

 )}
  {isAdmin && (
            <Text style={styles.buttonHomeTextSubtitle}>
              Gerencie as recompensas que você oferecerá
            </Text>

 )}
          </View>

        
        </TouchableOpacity>
      </View>
    </View>
  );
}
