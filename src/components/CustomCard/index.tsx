import { Avatar, Box, Divider, Grid, Paper, Typography } from '@mui/material'

interface Props {
    children: JSX.Element | JSX.Element[]
    paperStyle: React.CSSProperties
    Icon?: any
    title?: string
}

export const CustomCard = ({ children, paperStyle, Icon, title }: Props) => {
    return (
        <Grid display="flex" flexDirection="column">
            <Paper style={paperStyle}>
                <Grid display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                    <Avatar sx={{ backgroundColor: '#2ea3f2', boxShadow: '3px 3px 4px  rgba(60,60,60,0.5)' }}>
                        <Icon />
                    </Avatar>
                    <br />
                    <Typography gutterBottom variant="body1" component="div" textAlign="center">
                        <Box fontWeight="fontWeightBold">{title}</Box>
                    </Typography>
                </Grid>

                {children}
            </Paper>
        </Grid>
    )
}
