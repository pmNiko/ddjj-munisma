import LockOpenIcon from '@mui/icons-material/LockOpen'
import { Button, TextField } from '@mui/material'
import { CustomCard } from 'components/CustomCard'
import { useEffect, useState } from 'react'
import { useAuth } from 'services/useHttp'

const initialState = {
    cuit: '',
    password: '',
}

export const Login = () => {
    const [params, setParams] = useState(initialState)

    const { error, isLoading, response } = useAuth({ endpoint: '/signIn', params })

    const paperStyle = {
        marginTop: '3em',
        padding: 20,
        height: '28em',
        width: 300,
        margin: '20px auto',
        borderRadius: '15px 15px 15px 15px',
        boxShadow: '5px 10px 20px rgba(0, 0, 0, 0.4)',
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setParams({ cuit: '20126445807', password: '8befffdf' })
    }

    useEffect(() => {
        if (!isLoading && response.length > 0) {
            console.log(response)
        }
    }, [response])

    return (
        <CustomCard paperStyle={paperStyle} Icon={LockOpenIcon} title={'Ingreso a declaración jurada'}>
            <TextField
                sx={{
                    marginTop: '3em',
                    marginBottom: '3em',
                }}
                label="CUIT/CUIL"
                type="number"
                placeholder="Ingrese su cuit/cuil"
                size="small"
                fullWidth
                required
            />
            <TextField
                sx={{
                    marginBottom: '6em',
                }}
                label="Contraseña"
                placeholder="Ingrese su contraseña"
                type="password"
                size="small"
                fullWidth
                required
            />

            <Button variant="contained" type="submit" color="primary" fullWidth onClick={handleSubmit}>
                Ingresar
            </Button>
        </CustomCard>
    )
}
