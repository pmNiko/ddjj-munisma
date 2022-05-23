import { Box, Grid } from '@mui/material'
import { DecalrationForm, DeclarationData } from 'components/Declaration'
import { BasicLayout } from '../layouts/BasicLayout'

export const DeclarationPage = () => {
    return (
        <BasicLayout>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Box
                    sx={{
                        paddingTop: '1rem',
                        backgroundColor: '#ffffff',
                        minHeight: '70vh',
                        marginBottom: '1rem',
                    }}
                    display="flex"
                    justifyContent="center"
                >
                    <Grid container height="auto" width="95vw" mt={2} mb={2} p={1}>
                        <DeclarationData />
                        <DecalrationForm />
                    </Grid>
                </Box>
            </Grid>
        </BasicLayout>
    )
}
