# app-anota-o
Aplicativo de Anotação
Este é um aplicativo simples de anotações desenvolvido com React Native. Ele permite que os usuários façam, editem e visualizem anotações de forma prática. O aplicativo possui uma interface limpa e intuitiva, com a funcionalidade de salvar e editar notas, além de fechar o teclado virtual quando o usuário termina de digitar.

Funcionalidades:
Tela de Leitura: Exibe a anotação salva, ou um aviso para que o usuário faça uma anotação caso ainda não tenha sido salva.
Tela de Edição: Permite que o usuário edite a anotação e a salve. Durante a edição, o teclado virtual é exibido para facilitar a digitação.
Fechamento do Teclado: Ao tocar fora do campo de texto, o teclado virtual é fechado, proporcionando uma melhor experiência ao usuário.
Botões de Ação: Um botão flutuante "+" é mostrado para criar uma anotação, e um botão "Editar" é exibido quando há uma anotação existente. Após a edição, o botão "Salvar" permite que o usuário finalize a alteração.
Funcionalidades Técnicas:
Utiliza o React Native para desenvolvimento de aplicativos móveis.
Usa o StatusBar para personalização da barra de status.
Implementa o TouchableWithoutFeedback para interagir com o teclado.
O uso do TextInput permite que o usuário insira e edite as anotações.
O layout é completamente responsivo e se adapta bem ao formato de tela de dispositivos móveis.
Tecnologias:
React Native
React Navigation (para navegação entre telas, caso adicione mais funcionalidades)
Estado gerido pelo hook useState do React
Instalação:
Clone o repositório:
bash
Copiar código
git clone https://github.com/seu-usuario/repositorio.git
Navegue até o diretório do projeto:
bash
Copiar código
cd nome-do-projeto
Instale as dependências:
bash
Copiar código
npm install
Execute o aplicativo:
bash
Copiar código
npx react-native run-android  # Para Android
npx react-native run-ios      # Para iOS
Observações:
O projeto foi desenvolvido e testado no iOS e no Android, com foco na usabilidade e experiência do usuário.

