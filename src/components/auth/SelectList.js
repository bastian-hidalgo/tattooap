import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select } from '@mui/material'
import regioneYComunas from '../../data/regiones_y_comunas.json';
import React, { useState } from 'react'


/**
 * Functional component que contiene los Selects del formulario de regitro.
 * Recibe como parámetros los valores iniciales del formulario y los registra en un nuevo estado
 * 
 * @param {*} param0 
 * @returns {DOMElement}
 */

export const SelectList = ({ comunaLocal, handleInputChange }) => {
    const [region, setRegion ] = useState(null);
    const handleSetRegion = (e) => setRegion(e.target.value);
    return (
        <div>
            {/** Select que contiene las regiones */}
            <FormControl sx={{ mt: 2, mb: 2, width: '100%' }}>
                <InputLabel id="demo-region-label">Región</InputLabel>
                <Select
                    labelId="demo-region-label"
                    id="demo-region"
                    name='region'
                    value={region}
                    onChange={handleSetRegion}
                    input={<OutlinedInput label="region" />}

                >
                    {regioneYComunas.regiones.map(r => (
                        <MenuItem
                            key={r.region}
                            value={r.region}
                        >
                            {r.region}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            {/** En caso de que se seleccione una región mostrará seguido el select que contiene las comunas de la región.
             * en caso contrario este no se muestra
            */}
            {region &&
                <FormControl sx={{ mt: 2, mb: 2, width: '100%' }}>
                    <InputLabel id="demo-comuna-label">Comuna</InputLabel>
                    <Select
                        labelId="demo-comuna-label"
                        id="demo-comuna"
                        name='comuna_local'
                        value={comunaLocal}
                        onChange={handleInputChange}
                        input={<OutlinedInput label="comuna" />}
                    >
                        {

                            regioneYComunas.regiones.filter(r => r.region === region).map(r => r.comunas.map(comuna =>
                                <MenuItem
                                    key={comuna}
                                    value={comuna}
                                >
                                    {comuna}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            }
        </div>
    )
}
