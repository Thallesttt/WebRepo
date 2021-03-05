import React,{useState} from 'react';
import { View, Image, Text, ScrollView, TextInput,Button } from 'react-native';
  
const Cachorro = (props) => {
  const [isHungry,setIsHungry]=useState(true);
  return (
   <View> <Text>Meu {props.posicao}º cachorro foi {props.name} e ele está {isHungry?"com fome":"sem fome"}</Text>
    <Button style={{height:200, backgroundColor:'red'}} onPress={()=>{ setIsHungry(false) } } disabled={!isHungry?true:false}> 
    </Button>
</View>  );
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
//condição ternária, var=mel?verdadeiro:falso