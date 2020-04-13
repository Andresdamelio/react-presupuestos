import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {

  // Definir el presupuesto
  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [ mostrarpregunta, actualizarpregunta ] = useState(true)
  const [ gastos, guardarGastos ] = useState([]);
  const [gasto, guardarGasto ] = useState({});
  const [crearGasto, guardarCrearGasto ] = useState(false);
  

  // useEffect que actualiza el restante
  useEffect(() => {

    // Agrega el nuevo presupuesto
    if(crearGasto) {
      guardarGastos([
        ...gastos,
        gasto
      ]);

      // Resta del presupuesto actual
      const presupuestorestante = restante - gasto.cantidad;
      guardarRestante(presupuestorestante);

      guardarCrearGasto(false);
    }

  },[gasto, gastos, crearGasto, restante]);



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
                    guardarGasto={guardarGasto}
                    guardarCrearGasto={guardarCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado
                    gastos={gastos}
                  />

                  <ControlPresupuesto 
                    presupuesto={presupuesto}
                    restante={restante}
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
