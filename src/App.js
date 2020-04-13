import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';

function App() {

  // Definir el presupuesto
  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [ mostrarpregunta, actualizarpregunta ] = useState(true)

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          { mostrarpregunta 
            ? ( 
              <Pregunta 
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarpregunta={actualizarpregunta}
              />
            )
            : (
              <div className="row">
                <div className="one-half column">
                  <Formulario />
                </div>
                <div className="one-half column">
                  
                </div>
              </div>
            )
          }          
        </div>
      </header>
    </div>
  );
}

export default App;
