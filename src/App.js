import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';

function App() {

  // Definir el presupuesto
  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [ mostrarpregunta, actualizarpregunta ] = useState(true)
  const [ gastos, guardarGastos ] = useState([]);

  // Funcion para agregar nuevo gasto
  const agregarNuevoGasto = gasto => {
    guardarGastos([
      ...gastos,
      gasto
    ]);
  }

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
                  <Formulario
                    agregarNuevoGasto={agregarNuevoGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado
                    gastos={gastos}
                  />
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
