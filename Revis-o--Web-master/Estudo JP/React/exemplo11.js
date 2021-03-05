import React from 'react'
import { Text, SectionList, View, StyleSheet } from 'react-native'
const estilos= StyleSheet.create(
{ 
  container:{
      flex: 1,
      paddingTop: 25,
      backgroundColor: 'black'
  },
  item:{
      padding:10,
      fontSize:3,
      fontweight:bold,

  },
  titulo:{
      fontSize: 28,
      fontWeight: 'bold',
      paddingTop: 25
  },
titulosecao:{
      fontSize: 22,
      fontWeight: 'bold',
      paddingTop: 23
  }
}
);

const BandasApp = () => {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Listas de Bandas</Text>
      <SectionList 
        sections={[
          {title: 'Rock Internacional', data: ['Oasis', 'The Cure', 'The Smiths', 'The Beatles', 'Guns And Roses']},
          {title: 'Rock Nacional', data: ['Legião Urbana', 'Engenheiros do Hawaii', 'Nenhum de Nós', 'Ultraje a Rigor', 'Los Hermanos', 'Paralamas do Sucesso', 'Netos da Dona Neves']},
          {title: 'Samba e Pagode', data: ['Raça Negra', 'Grupo Raça', 'Grupo Pirraça', 'Fundo de Quintal']},
          {title: 'Outros Ritmos', data: ['Falamansa', 'Bonde do Tigrão']}
        ]}

        renderItem={
          ({item}) => <Text style={estilos.item}>{item}</Text>
        }

        renderSectionHeader={
          ({section}) => <Text style={estilos.titulosecao}>{section.title}</Text>
        }
      />
    </View>
  );
}

export default BandasApp;
