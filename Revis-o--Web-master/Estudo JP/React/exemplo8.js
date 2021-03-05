import React,{useState} from 'react';
import { View, TextInput } from 'react-native';
import Constants from 'expo-constants';

const  criptoApp=()=> {
  const [texto,setTexto]=useState('');
  return( 
    <View style={{padding:10}}>
      <TextInput
      style= {{borderWidth:'1px', width:"40px"}} 
      placeholder= 'Por Favor, use o campo de texto a vontade.'
      />
    <View>

  )
)};
export default CriptografiaApp;
/*import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

const CriptografiaApp = () => {
  const [texto, setTexto] = useState('');

  return (
    <View style={{padding: 10}}>
      <TextInput  
        style={{borderWidth: 1, height: 40, marginTop: 30}}
        placeholder="Digite aqui o seu texto!"
        onChangeText={texto => setTexto(texto)}
        defaultValue={texto}
      />

      <Text style={{padding: 10, fontSize: 32}}>
        {texto.split(' ').map((palavra) => palavra && '***')}
      </Text>
    </View>
  );
}

export default CriptografiaApp