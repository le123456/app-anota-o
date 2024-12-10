# Aplicativo de Anotações

Este é um aplicativo simples de anotações desenvolvido utilizando **React Native**. O objetivo deste aplicativo é permitir que o usuário faça e edite anotações, além de fornecer uma interface prática e limpa para interação. O aplicativo possui funcionalidades como a criação de novas anotações, edição e salvamento das mesmas.

## Funcionalidades

- **Visualização de Anotação**: Exibe a anotação atual ou um aviso solicitando para fazer uma anotação caso não haja nenhuma.
- **Criação de Anotação**: Permite adicionar uma nova anotação ou editar a existente.
- **Edição de Anotação**: Ao clicar no botão de "Editar", o usuário pode atualizar a anotação previamente salva.
- **Fechar Teclado**: O teclado é automaticamente fechado quando o usuário toca fora do campo de texto ou ao salvar a anotação.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicações móveis utilizando JavaScript e React.
- **StatusBar**: Para customizar a aparência da barra de status do dispositivo.
- **TouchableOpacity**: Para interações de clique em botões.
- **TextInput**: Para entrada de texto nas anotações.
- **Keyboard**: Para controlar o comportamento do teclado virtual.

## Funcionalidades Detalhadas

1. **Tela de Leitura**
    - Exibe a anotação atual ou um texto pedindo para o usuário fazer uma anotação.
    - Exibe um botão "+" caso não haja nenhuma anotação ou um botão "Editar" caso já exista uma anotação.
    - O botão "+" abre a tela de edição onde o usuário pode criar uma anotação.
    - O botão "Editar" permite que o usuário altere a anotação existente.

2. **Tela de Edição**
    - Permite editar o texto da anotação em um campo `TextInput`.
    - O botão "Salvar" atualiza a anotação e retorna à tela de leitura.
    - Ao tocar fora do campo de texto ou ao pressionar "Salvar", o teclado é fechado automaticamente.

## Instalação

### Pré-requisitos

- **Node.js**: Verifique se você tem o [Node.js](https://nodejs.org/) instalado em seu sistema.
- **React Native CLI**: Se não tiver o React Native CLI instalado, você pode instalá-lo usando o comando:
  ```bash
  npm install -g react-native-cli
