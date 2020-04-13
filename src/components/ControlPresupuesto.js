import React, { Fragment } from 'react';
import PropType from 'prop-types';
import { revisarPresupuesto } from '../helpers'

const ControlPresupuesto = ({ presupuesto, restante }) => {
    return (  
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ { presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: $ { restante }
            </div>
        </Fragment>
    );
}


ControlPresupuesto.propType = {
    presupuesto: PropType.number.isRequired,
    restante: PropType.number.isRequired,
}
 
export default ControlPresupuesto;