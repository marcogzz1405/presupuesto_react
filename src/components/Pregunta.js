import React, { Fragment, useState } from 'react';

const Pregunta = () => {

    const [ cantidad, guardarCantidad ] = useState(0);

    // Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10))
    }

    return(
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            <form>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Defiir presupuesto"
                />
            </form>
        </Fragment>
    );
}

export default Pregunta;