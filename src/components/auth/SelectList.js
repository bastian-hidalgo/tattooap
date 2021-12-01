import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select } from '@mui/material'
import data from '../../data/states.json'
import React from 'react'

export const SelectList = ({ region, comuna, userType, handleInputChange }) => {

    // --------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------

    const [states] = data;
    const { regions } = states;







    return (
        <div>
            <FormControl sx={{ mt: 2, mb: 2, width: '100%' }}>
                <InputLabel id="demo-region-label">Región</InputLabel>
                <Select
                    labelId="demo-region-label"
                    id="demo-region"
                    name='region'
                    value={region}
                    onChange={handleInputChange}
                    input={<OutlinedInput label="region" />}

                >
                    {regions.map(r => (
                        <MenuItem
                            key={r.name}
                            value={r.name}
                        >
                            {r.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            {region &&
                <FormControl sx={{ mt: 2, mb: 2, width: '100%' }}>
                    <InputLabel id="demo-comuna-label">Comuna</InputLabel>
                    <Select
                        labelId="demo-comuna-label"
                        id="demo-comuna"
                        name='comuna'
                        value={comuna}
                        onChange={handleInputChange}
                        input={<OutlinedInput label="comuna" />}
                    >
                        {

                            regions.filter(r => r.name === region).map(r => r.communes.map(comuna =>
                                <MenuItem
                                    key={comuna.name}
                                    value={comuna.name}
                                >
                                    {comuna.name}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            }

            <FormControl component="fieldset">
                <FormLabel component="legend">Tipo de usuario</FormLabel>
                <RadioGroup
                    row aria-label="gender"
                    name="row-radio-buttons-group"
                    aria-label="gender"
                    name="userType"
                    value={userType}
                    onChange={handleInputChange}
                >
                    <FormControlLabel value="personaNatural" control={<Radio />} label="Persona natural" />
                    <FormControlLabel value="tatuador" control={<Radio />} label="Tatuador" />
                </RadioGroup>
            </FormControl>

        </div>
    )
}
