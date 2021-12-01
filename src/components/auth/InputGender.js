import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material'
import React from 'react'

export const InputGender = ({gender, handleInputChange}) => {

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
