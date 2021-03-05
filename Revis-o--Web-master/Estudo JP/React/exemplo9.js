import React from 'react'
import { Text, Image, ScrollView } from 'react-native'
const logo=(uri:'upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg')
const LinguagemApp = () => {
  return (
    <ScrollView style={{padding: 10}}>
      <Text 
      />
      <Image style={{height:50, width:50}}source={logo} 
      />
    </ScrollView>
    
  );
}

export default LinguagemApp;

/*import React from 'react'
import { Text, Image, ScrollView } from 'react-native'

const logo = {
  uri: 'upload.wikimedia.org/wikipedia/commons/7/73/Javascript-736400_960_720.png',
  width: 150,
  height: 150
}

const LinguagemApp = () => {
  return (
    <ScrollView style={{padding: 10}}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 20 }}>Aprenda JavaScript</Text>

      <Image source={logo} style={{ marginTop: 20}} />

      <Text style={{ fontSize: 14, marginTop: 10, lineHeight: 17 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar ex ex, non eleifend libero pretium ut. Donec volutpat odio erat, at egestas odio lobortis at. Aliquam iaculis tincidunt tellus et aliquet. Aenean commodo condimentum aliquam. Duis sapien urna, pulvinar quis tristique mollis, lacinia vel elit. Maecenas elementum tristique nulla ac ornare. Maecenas nisi enim, dictum sit amet ex id, tristique vulputate lorem. In hac habitasse platea dictumst. Proin auctor porttitor nunc, in maximus erat lacinia eget. Aenean at consectetur velit. Sed at lobortis leo.</Text>
      <Text style={{ fontSize: 14, marginTop: 10, lineHeight: 17 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar ex ex, non eleifend libero pretium ut. Donec volutpat odio erat, at egestas odio lobortis at. Aliquam iaculis tincidunt tellus et aliquet. Aenean commodo condimentum aliquam. Duis sapien urna, pulvinar quis tristique mollis, lacinia vel elit. Maecenas elementum tristique nulla ac ornare. Maecenas nisi enim, dictum sit amet ex id, tristique vulputate lorem. In hac habitasse platea dictumst. Proin auctor porttitor nunc, in maximus erat lacinia eget. Aenean at consectetur velit. Sed at lobortis leo.</Text>
      <Text style={{ fontSize: 14, marginTop: 10, lineHeight: 17 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar ex ex, non eleifend libero pretium ut. Donec volutpat odio erat, at egestas odio lobortis at. Aliquam iaculis tincidunt tellus et aliquet. Aenean commodo condimentum aliquam. Duis sapien urna, pulvinar quis tristique mollis, lacinia vel elit. Maecenas elementum tristique nulla ac ornare. Maecenas nisi enim, dictum sit amet ex id, tristique vulputate lorem. In hac habitasse platea dictumst. Proin auctor porttitor nunc, in maximus erat lacinia eget. Aenean at consectetur velit. Sed at lobortis leo.</Text>
      <Text style={{ fontSize: 14, marginTop: 10, lineHeight: 17 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar ex ex, non eleifend libero pretium ut. Donec volutpat odio erat, at egestas odio lobortis at. Aliquam iaculis tincidunt tellus et aliquet. Aenean commodo condimentum aliquam. Duis sapien urna, pulvinar quis tristique mollis, lacinia vel elit. Maecenas elementum tristique nulla ac ornare. Maecenas nisi enim, dictum sit amet ex id, tristique vulputate lorem. In hac habitasse platea dictumst. Proin auctor porttitor nunc, in maximus erat lacinia eget. Aenean at conse