import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native-web';

export default function App() {

  const [frase, setFrases] = useState('Clique para receber uma mensagem positiva do horóscopo')
  const frases = [
    'Você terá um dia feliz',
    'Hoje o dia será produtivo',
    'Parabéns, você será contemplado',

  ]
  const [cor, setCores] = useState('')
  const cores = [
    'vermelho',
    'azul',
    'amarelo'
  ]




function trocaValores(){
  let aleatorio = Math.floor(Math.random() * cores.length)
  setCores(cores[aleatorio])
  setFrases(frases[aleatorio])
}
  return (
    <View style={styles.container}>
      <Text>Horoscopo</Text>
      <TouchableOpacity
      onPress={ () => trocaValores()}
        style={{margin:30, padding:30, backgroundColor:'violet', borderRadius:30}}>
        <Text>{frase}</Text>
        <Text>Sua cor é: {cor} </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
