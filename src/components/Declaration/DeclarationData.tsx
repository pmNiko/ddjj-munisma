import StoreIcon from '@mui/icons-material/Store'
import { Grid } from '@mui/material'
import { CustomCard } from 'components/CustomCard'
import { ItemList } from './ItemList'

export const DeclarationData = () => {
    const contents = [
        'Denominación',
        'CUIT-CUIL',
        'Documento',
        'Personería',
        'Fecha de nacimiento',
        'e-mail',
        'Telefono',
    ]
    return (
        <Grid item xs={6} pr={5}>
            <CustomCard Icon={StoreIcon} title={'Datos del contribuyente'}>
                <ItemList contents={contents} />
            </CustomCard>
        </Grid>
    )
}
