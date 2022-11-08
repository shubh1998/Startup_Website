import MediumMobileIcon from '@components/ui-kit/Icons/iconComponents/MediumMobileIcon'
import MobileIcon from '@components/ui-kit/Icons/iconComponents/MobileIcon'
import { FormContainer, styles } from '@containers/Home/Home.styles'
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
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
          Get In Touch
        </Typography>
        <Typography sx={styles.formBody} gutterBottom>
          Talk to our experts about your project requirement. We would love to talking with you and
          helping you in the best possible manner.
        </Typography>
        <FormContainer>
          <TextField required fullWidth id="outlined-required" defaultValue="name" />
          <TextField
            sx={{ mt: '20px' }}
            required
            fullWidth
            id="outlined-required"
            defaultValue="email"
          />
          <TextField
            sx={{ mt: '20px' }}
            required
            fullWidth
            id="outlined-required"
            defaultValue="services"
          />
          <TextField
            sx={{ mt: '20px' }}
            required
            fullWidth
            id="outlined-required"
            defaultValue="message"
            multiline
            rows={4}
          />
          <div style={{ marginTop: '20px' }}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Terms and conditions" />
          </div>
          <Button sx={styles.formButtonStyle} variant="contained">
            Submit
          </Button>
        </FormContainer>
      </Grid>
    </Grid>
  )
}

export default ConnectWithUsSection
