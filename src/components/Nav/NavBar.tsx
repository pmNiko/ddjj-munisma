import { Box, IconButton } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Menu } from 'components/Menu/Menu'
import sma from './sma.png'

/**
 * Component NavBar
 */
export const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: '#2ea3f2' }}>
                <Toolbar>
                    <Menu />
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ ml: 1 }}>
                        <img src={sma} alt="logo" width={'130px'} />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        align="right"
                        padding={1}
                        marginRight={3}
                    >
                        <Typography fontSize={16}>Municipalidad de San Martín de los Andes</Typography>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
