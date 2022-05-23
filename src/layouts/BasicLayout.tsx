import { Box, Grid } from '@mui/material'
import { CustomFooter } from 'components/Footer'
import { NavBar } from 'components/Nav'
import { NotifyToast } from 'components/NotifyToast'

interface Props {
    children: JSX.Element
}

/**
 * Layout BasicLayout
 * @description Layout básico para modificar el body de la página.
 * @param children : JSX.Element
 * @returns JSX.Element
 */
export const BasicLayout = ({ children }: Props) => {
    return (
        <>
            <NavBar />
            <NotifyToast />

            <Grid container display="flex" justifyContent="center" sx={{ backgroundColor: '#ffffff' }}>
                {children}
            </Grid>

            <CustomFooter />
        </>
    )
}
