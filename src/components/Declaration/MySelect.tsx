import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useState } from 'react'

export const MySelect = () => {
    const [inputSelect, setInputSelect] = useState('')

    const handleChangeSelect = (event: SelectChangeEvent) => {
        setInputSelect(event.target.value)
    }

    return (
        <FormControl sx={{ mt: 2, p: 1, minWidth: '200px' }} size="small">
            <InputLabel id="demo-select-small" sx={{ fontSize: '0.8em', fontFamily: 'unset' }}>
                Año declarado
            </InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={inputSelect}
                label="Age"
                onChange={handleChangeSelect}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    )
}
