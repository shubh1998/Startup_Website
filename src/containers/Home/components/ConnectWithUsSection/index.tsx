import MediumMobileIcon from '@components/ui-kit/Icons/iconComponents/MediumMobileIcon'
import MobileIcon from '@components/ui-kit/Icons/iconComponents/MobileIcon'
import { FormContainer, styles } from '@containers/Home/Home.styles'
import { Button, Grid, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const ConnectWithUsSection = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Grid container sx={styles.connectWithUsRoot}>
      <Grid item xs={12} lg={6} sx={styles.connectWithUsImage}>
        {matches ? <MobileIcon /> : <MediumMobileIcon />}
      </Grid>
      <Grid item xs={12} lg={6} sx={styles.formRoot}>
        <Typography sx={styles.formHeading} gutterBottom>
          Connect With Us
        </Typography>
        <Typography sx={styles.formBody} gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
          est a, mattis tellus.
        </Typography>
        <FormContainer>
          <TextField required fullWidth id="outlined-required" defaultValue="Hello World" />
          <TextField
            sx={{ mt: '20px' }}
            required
            fullWidth
            id="outlined-required"
            defaultValue="Hello World"
          />
          <Button sx={styles.buttonStyle} variant="contained">
            Submit
          </Button>
        </FormContainer>
      </Grid>
    </Grid>
  )
}

export default ConnectWithUsSection
