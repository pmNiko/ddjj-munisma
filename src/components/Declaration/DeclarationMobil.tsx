import { Grid } from '@mui/material'
import { Box } from '@mui/system'

export const DeclarationMobil = () => {
    return (
        <Grid container>
            <Grid item xs={6}>
                <h4>Datos del contribuyente</h4>
                <ul>
                    <li>Denpminación</li>
                    <li>CUIT-CUIL</li>
                    <li>Documento</li>
                    <li>Personeria</li>
                    <li>Fecha de nacimineto</li>
                    <li>e-mail</li>
                    <li>Telefono</li>
                </ul>
            </Grid>
            <Grid item xs={6}>
                <Box border={1}>
                    <h4>Declaracones juradas</h4>
                    <ul>
                        <li>Denpminación</li>
                        <li>CUIT-CUIL</li>
                        <li>Documento</li>
                        <li>Personeria</li>
                        <li>Fecha de nacimineto</li>
                        <li>e-mail</li>
                        <li>Telefono</li>
                    </ul>
                </Box>
            </Grid>
        </Grid>
    )
}
