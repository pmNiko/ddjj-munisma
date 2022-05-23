import StoreIcon from '@mui/icons-material/Store'
import { Grid } from '@mui/material'
import { CustomCard } from 'components/CustomCard'
import { MyAccordion } from './MyAccordion'
import { MySelect } from './MySelect'

export const DecalrationForm = () => {
    return (
        <Grid item xs={6}>
            <CustomCard Icon={StoreIcon} title={'Declaraciones juradas'}>
                <MySelect />

                <MyAccordion />
            </CustomCard>
        </Grid>
    )
}
