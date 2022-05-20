import { Grid, Hidden } from '@mui/material'
import { DeclarationDescktop } from './DeclarationDescktop'
import { DeclarationMobil } from './DeclarationMobil'

export const Declaration = () => {
    return (
        <Grid height="78vh" width="95vw" mt={2} mb={2} p={1}>
            <Hidden only={['xs', 'sm']}>
                <DeclarationDescktop />
            </Hidden>
            <Hidden only={['md', 'lg', 'xl']}>
                <DeclarationMobil />
            </Hidden>
        </Grid>
    )
}
