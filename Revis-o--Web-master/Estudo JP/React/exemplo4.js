import React from 'react';
import { View, Image, Text, ScrollView, TextInput } from 'react-native';
  
const getNome=(pnome,snome,tnome)=>{
return pnome+" "+snome+" "+tnome;
}
const Aplic=()=>{
return(
  <Text> Essa aqui é uma aplicação normal, ta certo? E seu nome de projeto é,  {getNome("Easy_as","ONE, TWO", "THREE")}!</Text>
);
}
export default Aplic;