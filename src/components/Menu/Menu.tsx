import { Drawer, Typography, IconButton, List, ListItem, ListItemButton } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import StoreIcon from '@mui/icons-material/Store';
import PaidIcon from '@mui/icons-material/Paid';
import './Menu.css'

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <IconButton 
            size="large" 
            edge='start' 
            color="inherit" 
            aria-label='logo' 
            onClick={() => setIsOpen(true)} 
        >
            <MenuIcon />
        </IconButton>
        <Drawer 
            
            anchor="left" 
            open={isOpen} 
            onClose={() => setIsOpen(false)} 
        >
            <Box className="headerMenu" p={1} width='300px' textAlign='end' role='presentation'  >
                <IconButton
                    size="medium"
                    edge='start'
                    color="inherit"
                    aria-label="logo"
                    onClick={() => setIsOpen(false)}
                >
                    <ArrowBackIosNewIcon/>
                </IconButton>
            </Box>

            <List>
                <ListItem onClick={() => setIsOpen(false)} >
                    <ListItemButton >
                        <StoreIcon />
                        <Typography ml={2} >
                            Declaración Jurada
                        </Typography>
                    </ListItemButton>
                </ListItem>
                <ListItem onClick={() => window.location.href='https://10.1.61.117/botondepago'}  >
                    <ListItemButton>
                        <PaidIcon />
                        <Typography ml={2} >
                            Boton de pago
                        </Typography>
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
        </>
    )
}
