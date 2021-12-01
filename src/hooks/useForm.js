import { useState } from "react"


export const useForm = ( initialState = {} ) => {
    const [values, setValues] = useState(initialState);

    // Función que resetea los valores del formulario de intialState
    const reset = () => {
        setValues(initialState);
    }

    // Funcion que se dedica a obtener los valores del formulario y guardarlo en values
    const handleInputChange = ({target}) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        })
    }

    // const handleSelectChange = ({target}) => {
        
    //     setValues({
    //         ...values,
    //         typeof {target.value === 'string' ? target.value : target.value}
    //     })
    // }

    return [ values, handleInputChange, reset ]
}
