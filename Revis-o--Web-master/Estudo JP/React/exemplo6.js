import React from 'react';
import { View, Image, Text, ScrollView, TextInput } from 'react-native';
  
const Cachorro = (props) => {
  return (
    <Text>Meu {props.posicao}º cachorro foi {props.name}</Text>
  );
}
const meusCachorros=()=>{
return(
  <View>
<Cachorro posicao="1" name="cristal"/>
<Cachorro posicao="2" name="nulo"/>
<Cachorro posicao="3" name="nulo"/>
<Cachorro posicao="4" name="nulo"/>
<Cachorro posicao="5" name="nulo"/>

</View>
);
}

export default meusCachorros;
