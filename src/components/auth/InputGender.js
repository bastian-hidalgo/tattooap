import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material'
import React from 'react'

// Functional component: Contiene formulario de registro sobre el género

export const InputGender = ({gender, handleInputChange}) => {

    {/** valores del select gender en un array*/}

    const genders = ['Femenino', 'Masculino', 'Prefiero no decir']


    // --------------------------------------------------------------------------------

    


    return (
        <div>
            <FormControl sx={{ mt: 2, mb: 2, width: '100%' }}>
                <InputLabel id="demo-multiple-gender-label">Género</InputLabel>
                <Select
                    labelId="demo-gender-label"
                    id="demo-gender"
                    name='gender'
                    value={gender}
                    onChange={handleInputChange}
                    input={<OutlinedInput label="gender" />}
                    
                >
                    {/** mapeo de cada género que existe en el array */}
                    {genders.map((gender) => (
                        <MenuItem
                            key={gender}
                            value={gender}
                        >
                            {gender}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

// Datos de salida: Select input con los géneros
