import React from 'react'; 
/*Isso diz "encontre a exportação do reactmódulo que é explicitamente nomeado Reacte importe isso aqui como uma constante que eu quero chamar React."
*/
import ReactDOM from 'react-dom';
/*O pacote react-dom provê métodos específicos para o DOM que podem ser usados no nível superior de sua aplicação como uma válvula de escape para sair do modelo do React se você precisar. 
*/
import App from './App';
/*A linha acima é usada para importar a classe que você escreveu no arquivo App.jsno mesmo diretório .
*/
ReactDOM.render(<App />, document.getElementById('root'));
/*
controla o conteúdo do nó contêiner que você passa. 
Qualquer elemento do DOM que existe dentro será substituído na primeira chamada.
 As próximas chamadas usam o algoritmo de diferenciação do React para atualizações eficientes.

 não modifica o nó contêiner (só modifica os filhos do contêiner).
  Pode ser possível inserir um componente em um nó já existente no DOM sem sobrescrever os filhos existentes.
*/
