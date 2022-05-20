import { Box, Grid } from '@mui/material'
import { Declaration } from 'components/Declaration'
import { BasicLayout } from '../layouts/BasicLayout'

export const DeclarationPage = () => {
    return (
        <BasicLayout>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Box
                    sx={{
                        backgroundColor: '#ffffff',
                        minHeight: '70vh',
                    }}
                    display="flex"
                    justifyContent="center"
                >
                    <Declaration />
                </Box>
            </Grid>
        </BasicLayout>
    )
}
