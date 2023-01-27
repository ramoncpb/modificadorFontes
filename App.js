//++++ESSA PARTE FOI DESTINADA PARA TRABALHAR COM AS IMPORTAÇÕES DO REACT++++
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

//++++ESSA PARTE FOI DESTINADA PARA TRABALHAR COM OS VALORES COLETADOS++++
export default function App() {

  //++++ESSA PARTE FOI DESTINADA PARA TRABALHAR COM A LÓGICA E ESTRUTURA DO PROJETO++++   
  
  const [corFundo, setCorFundo] = useState('white')
  const [tamFonte, setTamFonte] = useState(20)
  const [corFonte, setCorFonte] = useState('black')

  return (  
    <View style={styles.telaInteira}>
      <StatusBar hidden={true}/>
      <View style={styles.cabecalhoTela}>
          <View style={styles.regiaoCorBotoes}>
            <TouchableOpacity style={styles.botaoRosa} onPress={() => setCorFundo('#F48484') & setCorFonte('black')}>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoRoxo} onPress={() => setCorFundo('#C3ACD0') & setCorFonte('black')}>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoVerde} onPress={() => setCorFundo('#61764B') & setCorFonte('white')}>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoVinho} onPress={() => setCorFundo('#A10035') & setCorFonte('white')}>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.centroTela,{backgroundColor: corFundo}]}>
          <Text style={[styles.textoFonte, {fontSize: tamFonte, color: corFonte}]}>The Power of Programming</Text>
        </View>

        <View style={styles.rodapeTela}>
          <View style={styles.regiaoBotoesTam}>
            <TouchableOpacity style={styles.botaoTam} onPress={() => {setTamFonte(tamFonte - 2)}}>
              <Text style={styles.textoBotaoMenor}> - </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoTam} onPress={() => {setTamFonte(tamFonte + 2)}}>
              <Text style={styles.textoBotaoMaior}> + </Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}

//++++ESSA PARTE FOI DESTINADA PARA TRABALHAR COM O ESTILO DO APLICATIVO++++

const styles = StyleSheet.create({

  telaInteira: {
  flex: 1,
  },

  cabecalhoTela: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EDEDED',
  },

  regiaoCorBotoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  botaoRosa:{
    margin: 10,
    width: 70,
    height: 70,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F48484',
  },

  botaoRoxo:{
    margin: 10,
    width: 70,
    height: 70,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C3ACD0',
  },

  botaoVerde:{
    margin: 10,
    width: 70,
    height: 70,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#61764B',
  },

  botaoVinho:{
    margin: 10,
    width: 70,
    height: 70,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A10035',
  },

  centroTela: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },

  textoFonte:{
    fontFamily: 'monospace',
  },

  rodapeTela: {
    flex: 0.15,
    backgroundColor: '#EDEDED',
    
  },

  regiaoBotoesTam: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },

  botaoTam: {
    width: 140,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#191A19',
    textAlign: 'center',
    alignSelf:'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
  },

  textoBotaoMaior: {
    fontSize: 50,
    color: '#EEEEEE',
    marginVertical: -10,
    fontFamily: 'monospace',
  },

  textoBotaoMenor: {
    fontSize: 50,
    color: '#EEEEEE',
    marginVertical: -10,
    fontFamily: 'monospace',
  },

});