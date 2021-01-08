import React, {Component} from 'react';

const Location = (props) Component{

render(){
    let receta = {
        nombre: 'Pizza',
        ingredientes: ['Tomate',' Queso', 'jamon cocido'],
        calorias: 400
    };

    return(
        <div classname="mi-componente">
             <h1>{'Receta: ' + receta.nombre}</h1>
             <h2>{'Calorias: ' + receta.calorias}</h2>
             <ol>
            {
                 receta.ingredientes.map((ingrediente, i ) => {
                     console.log(ingrediente); 
                     return (
                         <li key={i}>
                             {ingrediente}
                         </li>
                     );
              })    
            }
             </ol>
             <hr/>  
          </div>
    );
}

}

export default Micomponente;