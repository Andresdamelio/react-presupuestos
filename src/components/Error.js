import React from 'react';
import PropType from 'prop-types';

const Error = ({mensaje}) => (
    <p className="alert alert-danger error">{ mensaje }</p>
)


Error.propType = {
    mensaje: PropType.string.isRequired
}
 
export default Error;