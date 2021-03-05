/*fazer um document.write pegando os valores de uma variável*/

//game[0]= mario bros
//game[1]= mario bros 2
//game[2]= mario bros 3
//game[3]= new super mario bros 
//game[4]= super mario 64
//game[5]= super mario galaxy
//game[6]= super mario galaxy 2
//game[7]= super mario 3d land 
//game[8]= super mario 3d world
//game[9]= super mario odyssey
//Essa é minha lista de títulos de jogos que vou abordar
var gameName=["mario bros","mario bros 2","mario bros 3","new super mario bros",
"super mario 64","super mario galaxy","super mario galaxy 2",
"super mario 3d land","super mario 3d world","super mario odyssey"];

function descricao(){
  document.getElementById('borda').style.visibility="visible";
  document.getElementById('texto_sensivel_a_imagem').innerHTML= gameName[0];
}
function fechar(){
    document.getElementById('borda').style.visibility="hidden";
  }

  
  /*no teste tem uma div preparada para isso*/ 


/*gamename[0]=description[0]= Nesse jogo a princesa do reino dos cogumelos, peach, foi sequestrada
e coube a mario, entre as maiores dificuldades que o NES podia executar, foi ao resgate!*/
document.getElementsByClassName('texto_sensivel_a_imagem').innerHTML="gameName[0]";

