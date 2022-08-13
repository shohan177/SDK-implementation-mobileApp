import React, { useState, useEffect, useMemo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './src/Navigation/Routes';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Greetings from './src/Screen/Greetings/Greetings';
import { Provider as PaperProvider } from 'react-native-paper';


const Stack = createNativeStackNavigator();

function App() {
  return (

    <PaperProvider>
      <Routes />
    </PaperProvider>


  );
}

export default App;