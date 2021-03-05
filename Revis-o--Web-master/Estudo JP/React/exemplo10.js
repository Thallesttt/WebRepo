import React from 'react'
import { Text, FlatList, View, StyleSheet } from 'react-native'

const estilos = StyleSheet.create (
  {
    container: {
      flex: 1,
      paddingTop: 25,
      backgroundColor: 'silver'
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44
    },
    titulo: {
      fontSize: 28,
      fontWeight: 'bold',
      paddingTop: 25
    }
  }
);

const BandasApp = () => {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Listas de Bandas</Text>

      <FlatList 
        data={[
          {banda: 'Linkin Park'},
          {banda: 'Motorhead'},
          {banda: 'Guns And Roses'},
          {banda: 'Jackson Five'},
          {banda: 'The Beatles'},
          {banda: 'Legião Urbana'},
          {banda: 'Turma do Pagode'},
          {banda: 'Ramones'},
          {banda: 'Fala Mansa'},
          {banda: 'Los Hermanos'},
          {banda: 'Grupo Raça'},
          {banda: 'ULtraje a rigor'},
          {banda: 'Fundo de Quintal'},
          {banda: 'Paralamas do Suceso'}
        ]}

        renderItem={
          ({item}) => <Text style={estilos.item}>{item.banda}</Text>
        }
      />
    </View>
  );
}

export default BandasApp;