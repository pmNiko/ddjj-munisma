import { Box, Grid } from "@mui/material"
import { BasicLayout } from "../layouts/BasicLayout"


export const DeclarationPage = () => {
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
                    <h3>Declaration</h3>
                </Box>
            </Grid>      
    </BasicLayout>
  )
}
