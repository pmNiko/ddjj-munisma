import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import StoreIcon from '@mui/icons-material/Store'
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Grid, Typography } from '@mui/material'
import { CustomCard } from 'components/CustomCard'

export const DeclarationDescktop = () => {
    const paperStyle: React.CSSProperties = {
        width: '90%',
        borderRadius: '15px 15px 15px 15px',
        boxShadow: '5px 10px 20px rgba(0, 0, 0, 0.4)',
        minHeight: '60vh',
        padding: '2em',
        textAlign: 'center',
    }

    return (
        <Grid container>
            <Grid item xs={6} pr={5}>
                <CustomCard paperStyle={paperStyle} Icon={StoreIcon} title={'Datos del contribuyente'}>
                    <Typography variant="subtitle1"> Denominación </Typography>

                    <Typography variant="subtitle1"> CUIT-CUIL </Typography>

                    <Typography variant="subtitle1"> Documento </Typography>

                    <Typography variant="subtitle1"> Personería </Typography>

                    <Typography variant="subtitle1"> Fecha de nacimiento </Typography>

                    <Typography variant="subtitle1"> e-mail </Typography>

                    <Typography variant="subtitle1"> Telefono </Typography>
                </CustomCard>
            </Grid>

            <Grid item xs={6}>
                <Box border={1} p={1}>
                    <h4>Declaracones juradas</h4>
                    <Divider />
                    <select name="selectYear">
                        <option value="01">2022</option>
                        <option value="02">2021</option>
                        <option value="03">2020</option>
                        <option value="04">2019</option>
                    </select>
                </Box>
                <Box border={1} p={1}>
                    <div>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Acuaterra</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                                    ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Accordion 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                                    ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion disabled>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography>Disabled Accordion</Typography>
                            </AccordionSummary>
                        </Accordion>
                    </div>
                </Box>
            </Grid>
        </Grid>
    )
}
