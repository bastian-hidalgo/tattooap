import { useState } from "react"

/**
 * El Hook useForm se encarga de controlar los valores de un formulario
 * recibiendo como estado inicial un objeto vacío y retornando los valores del formulario, los cambios de los inputs y el reset del formulario
 * pero que puede recibir como parámetro un estado inicial
 * @param {*} initialState 
 * @returns {Array}
 */

export const useForm = ( initialState = {} ) => {
    const [values, setValues] = useState(initialState);

    /** Función que resetea los valores del formulario de intialState */ 
    const reset = () => {
        setValues(initialState);
    }

    /** Funcion que se dedica a obtener los valores del formulario y guardarlo en values */
    const handleInputChange = ({target}) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        })
    }

    return [ values, handleInputChange, reset ]
}
