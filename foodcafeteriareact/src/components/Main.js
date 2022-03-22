import React from 'react';
/*Isso diz "encontre a exportação do reactmódulo que é explicitamente nomeado Reacte importe isso aqui como uma constante que eu quero chamar React."
*/
import Food from './Food';
/*
Importa a aplicação denomida de (Food.js) para aplicação Main.js
*/
/*
foi criado uma (VARIAVEL) em Json, que recebe nome, image e sua descrição
*/
const cafe = {
  name: 'Café',
  image: './images/cafe.jpg',
  description: 'Descrição',
};
/*
foi criado uma (VARIAVEL) em Json, que recebe nome, image e sua descrição
*/

const suco = {
  name: 'Suco',
  image: './images/suco.jpg',
  description: 'Descrição',
};
/*
foi criado uma (VARIAVEL) em Json, que recebe nome, image e sua descrição
*/
const fritas = {
  name: 'Suco',
  image: './images/fritas.jpg',
  description: 'Descrição',
};
/*
foi criado uma (VARIAVEL) em Json, que recebe nome, image e sua descrição
*/
const foods = [cafe, suco, fritas];
/* recebe uma lista das variaves, cafe, suco, fritas
*/

const Main = () => {
  return (
    <>
      <h1 className="mt-5 text-center">Cardápio</h1>

      <div>
        <button
          type="button"
          name="addFood"
          className="btn btn-primary rounded-circle fw-bold"
          data-bs-toggle="modal"
          data-bs-target="#foodModal"
          /*
          botão, vem com tipo: botão, com nome decladoro como 'addFod"
          uma clas, de cor primaria sinza, de forma circular.
          */
        >

          +
        </button> 
      </div> 
      

      <div className="row" id="itens">
        {foods.map(function (food) {
          return <Food food={food} />;
        })}
      </div>
    </>
    /* Ao clicar na função  Button, ele retorna o modal, com a opção de
    cadastro dos  idem no cardapio.
    */
  );
};
/* cosnte Main é a parte princial do conteudo datado no modal
*/

export default Main;
/*
criar módulos, e permitir que ao importar em outro arquivo,
 possa ser utilizado tudo que há naquele módulo.
*/