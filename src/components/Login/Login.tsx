import LockOpenIcon from '@mui/icons-material/LockOpen'
import { Avatar, Button, Grid, Paper, TextField } from '@mui/material'

export const Login = () => {
    const paperStyle = {
        marginTop: '3em',
        padding: 20,
        height: '28em',
        width: 300,
        margin: '20px auto',
        borderRadius: '15px 15px 15px 15px',
        boxShadow: '5px 10px 20px rgba(0, 0, 0, 0.4)',
    }

    return (
        <Grid display="flex" flexDirection="column">
            <Paper elevation={10} style={paperStyle}>
                <Grid display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                    <Avatar sx={{ backgroundColor: '#2ea3f2', boxShadow: '3px 3px 4px  rgba(60,60,60,0.5)' }}>
                        <LockOpenIcon />
                    </Avatar>
                    <h3>Ingreso a declaración jurada</h3>
                </Grid>

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

                <Button variant="contained" type="submit" color="primary" fullWidth>
                    Buscar
                </Button>
            </Paper>
        </Grid>
    )
}
