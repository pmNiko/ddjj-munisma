import { Box, Grid } from '@mui/material'
import { Login } from 'components/Login/Login'
import { BasicLayout } from 'layouts/BasicLayout'

export const LoginPage = () => {
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
                    <Login />
                </Box>
            </Grid>
        </BasicLayout>
    )
}
