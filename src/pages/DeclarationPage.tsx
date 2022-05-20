import { Box, Grid } from '@mui/material'
import { Declaration } from 'components/Declaration'
import { BasicLayout } from '../layouts/BasicLayout'

export const DeclarationPage = () => {
    return (
        <BasicLayout>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Box
                    sx={{
                        paddingTop: '1rem',
                        backgroundColor: '#ffffff',
                        height: '70%',
                        marginBottom: '1rem',
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
