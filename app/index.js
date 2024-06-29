import React, {useEffect} from 'react';
import Routes from '../src/routes';
import { useFonts  } from 'expo-font';
import {ContextProvider} from "../src/context/AuthContext"
import { View, Text, TouchableOpacity, TextInput, StatusBar, FlatList, ActivityIndicator } from 'react-native';



export default function App(){



  return(
    <ContextProvider>
<Routes/>
</ContextProvider>
  );

}