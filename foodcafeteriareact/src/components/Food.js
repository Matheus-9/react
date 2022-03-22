import React from 'react';
/*Isso diz "encontre a exportação do reactmódulo que é explicitamente nomeado Reacte importe isso aqui como uma constante que eu quero chamar React."
*/

const Food = (props) => { 
  return (
    <div>
      <div className="col">
        <div className="card"> 
          <img
            src={props.food.image}
            className="card-img-top"
            alt="..."
            width="30%"
          />
          <div className="card-body">
            <h5 className="card-title">{props.food.name}</h5>
            <p className="card-text">{props.food.description}</p>
            <a href="#" className="btn btn-primary">
              Adicionar
            </a>
            
          </div>
        </div>
      </div>
    </div>
  ); 
} 
/*etona o conteudo de um componente aparentemente um cartde
com Image, nome, descrição e um link para adicionar.*/

export default Food;
/*
criar módulos, e permitir que ao importar em outro arquivo,
 possa ser utilizado tudo que há naquele módulo.
*/
