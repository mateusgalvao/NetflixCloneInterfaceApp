import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from "react-native";

import Routes from './routes'

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      primary: 'red',
      background: '#3C3C3C',
      placeholder:'#fff',
      text:'#fff'
    },
  };
  return (
    <PaperProvider theme={theme}>
      <StatusBar></StatusBar>
    <Routes></Routes>
    </PaperProvider>
  );
}




  