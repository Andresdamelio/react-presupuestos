import React, { Fragment, useState } from 'react';
import PropType from 'prop-types';
import Error from './Error';

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarpregunta }) => {

    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);

    // Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value,10));
    }

    // submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar
        if( cantidad < 1 || isNaN(cantidad) ) {
            guardarError(true);
            return;
        }

        // Si se pasa de la validacion
        guardarError(false);

        // Guardar presupuesto
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarpregunta(false);
    }


    return (  
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            <form onSubmit={agregarPresupuesto}>
            { error ? <Error mensaje="El presupuesto es incorrecto" /> : null}
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
}

Pregunta.propType = {
    guardarPresupuesto: PropType.func.isRequired, 
    guardarRestante:PropType.func.isRequired, 
    actualizarpregunta: PropType.func.isRequired
}
 
export default Pregunta;