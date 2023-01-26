//++++ESSA PARTE FOI DESTINADA PARA TRABALHAR COM AS IMPORTAÇÕES DO REACT++++
import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


//++++ESSA PARTE FOI DESTINADA PARA TRABALHAR COM OS VALORES COLETADOS++++
export default function App() {

//++++ESSA PARTE FOI DESTINADA PARA TRABALHAR COM A LÓGICA E ESTRUTURA DO PROJETO++++  
  return (  
    <View style={styles.telaInteira}>
      <View Style={styles.topoTela}>
        <View style={styles.areaZoom}>
            <TouchableOpacity style={styles.botaoZoom}
              onPress={() => {
                setTamFonte(tamFonte + 2)
              }
              }
            >
              <Text style={styles.textoBotao}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoZoom}
              onPress={() => {
                setTamFonte(tamFonte - 2)
              }}
            >
              <Text style={styles.textoBotao}>-</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.areaBotaoCor}>
            <TouchableOpacity style={styles.botaoPreto}
              onPress={() => mudarCorFonte('Preto')}
            >
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoVermelho}
              onPress={() => mudarCorFonte('Vermelho')}
            >
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoAzul}
              onPress={() => mudarCorFonte('Azul')}
            >
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoVerde}
              onPress={() => mudarCorFonte('Verde')}
            >
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.centroTela}>
          <Text style={styles.textoTeste}>Teste</Text>
        </View>

        <View Style={styles.inferiorTela}>
          
          <View style={styles.areaBotaoCor}>
            <TouchableOpacity style={styles.botao}
              onPress={() => mudarFonte('Sans')}
            >
              <Text style={styles.textoBotao1}>Sans-Serif</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
              onPress={() => mudarFonte('Serif')}
            >
              <Text style={styles.textoBotao2}>Serif</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
              onPress={() => mudarFonte('Mono')}
            >
              <Text style={styles.textoBotao3}>Mono</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
              onPress={() => mudarFonte('Pixel')}
            >
              <Text style={styles.textoBotao4}>Pixel</Text>
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
    backgroundColor: 'purple',
  },
  topoTela: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  areaZoom: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  areaBotaoCor: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  botaoZoom:{
    margin: 10,
    width: 70,
    height: 70,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  botaoPreto:{
    margin: 10,
    width: 70,
    height: 70,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  botaoVermelho:{
    margin: 10,
    width: 70,
    height: 70,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  botaoAzul:{
    margin: 10,
    width: 70,
    height: 70,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  botaoVerde:{
    margin: 10,
    width: 70,
    height: 70,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  centroTela: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  inferiorTela: {
    flex: 0.3,
    background: 'blue',
  },
  botao: {
    margin: 10,
    width: 380,
    height: 60,
    borderRadius: 10,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotao1: {
    fontSize: 30,
    color: 'blue',
    fontFamily: 'sans-serif',
  },
  textoBotao2: {
    fontSize: 30,
    color: 'blue',
    fontFamily: 'serif',
  },
  textoBotao3: {
    fontSize: 30,
    color: 'blue',
    fontFamily: 'monospace',
  },
  textoBotao4: {
    fontSize: 30,
    color: 'blue',
    fontFamily: '',
  },

});