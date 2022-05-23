import { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

export const MyAccordion = () => {
    const [expanded, setExpanded] = useState<string | false>(false)

    const handleChangeAccordion = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <Box p={2}>
            <div>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChangeAccordion('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '40%', flexShrink: 0 }}>Aquaterra</Typography>
                        <Typography sx={{ width: '30%', color: 'text.secondary' }}>LIC. Nro.: 2722</Typography>
                        <CheckCircleOutlineIcon color="success" sx={{ width: '30%' }} />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus
                            est, id dignissim quam.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChangeAccordion('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography sx={{ width: '40%', flexShrink: 0 }}>Aquaterra SRL</Typography>
                        <Typography sx={{ width: '30%', color: 'text.secondary' }}>LIC. Nro.: 2722</Typography>
                        <CheckCircleOutlineIcon color="success" sx={{ width: '30%' }} />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam
                            eros in elit. Pellentesque convallis laoreet laoreet.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </Box>
    )
}
