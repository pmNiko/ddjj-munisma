import { Grid, Typography } from '@mui/material'

/** Component Footer Page */
export const CustomFooter = () => {
    return (
        <Grid container sx={{ background: '#1f1f1f', marginTop: '2rem', height: '25vh' }}>
            <Grid item xs={12} textAlign="center" fontSize={15} color="white" pt={5} mb={4}>
                <Typography>Municipalidad de San Martín de los Andes</Typography>
            </Grid>
            <Grid item xs={12} textAlign="center" fontSize={13} color="white" mx={3} mb={1}>
                General Roca y Juan Manuel de Rosas
            </Grid>
            <Grid item xs={12} textAlign="center" fontSize={13} color="white" mx={3} mb={8}>
                CP Q8370, Neuquén Tel +54 2972 427315
            </Grid>
        </Grid>
    )
}
