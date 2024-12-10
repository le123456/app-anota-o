import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function App() {
  const [estado, setarEstado] = useState('leitura');
  const [anotacao, setarAnotacao] = useState('');

  function atualizartexto() {
    setarEstado('leitura');
  }

  const fecharTeclado = () => {
    Keyboard.dismiss();
  };

  if (estado === 'leitura') {
    return (
      <TouchableWithoutFeedback onPress={fecharTeclado}>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="dark-content" />
          <View style={styles.header}>
            <Text style={styles.headerText}>Aplicativo Anotação</Text>
          </View>

          {anotacao !== '' ? (
            <View style={{ padding: 30 }}>
              <Text style={styles.anotacao}>{anotacao}</Text>
            </View>
          ) : (
            <View style={{ padding: 30 }}>
              <Text>Faça Uma Anotação</Text>
            </View>
          )}

          {anotacao === '' ? (
            <TouchableOpacity onPress={() => setarEstado('atualizando')} style={styles.btnAnotacao}>
              <Text style={styles.btnAnotacaoTxt}>+</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setarEstado('atualizando')} style={styles.btnMedium}>
              <Text style={styles.btnMediumTxt}>Editar</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  } else if (estado === 'atualizando') {
    return (
      <TouchableWithoutFeedback onPress={fecharTeclado}>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="dark-content" />
          <View style={styles.header}>
            <Text style={styles.headerText}>Aplicativo Anotação</Text>
          </View>

          <TextInput
            onChangeText={(text) => setarAnotacao(text)}
            multiline={true}
            numberOfLines={5}
            value={anotacao}
            style={styles.TxtInput}
          />

          <TouchableOpacity onPress={() => atualizartexto()} style={styles.btnMedium}>
            <Text style={styles.btnMediumTxt}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: StatusBar.currentHeight || 0,
    width: '100%',
    padding: 30,
    backgroundColor: '#4f4f4f',
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  anotacao: {
    fontSize: 15,
  },
  btnAnotacao: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    backgroundColor: '#4f4f4f',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnAnotacaoTxt: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 6,
  },
  btnMedium: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    width: 100,
    height: 50,
    backgroundColor: '#4f4f4f',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnMediumTxt: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  TxtInput: {
    padding: 20,
  },

});
