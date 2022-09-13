import MobileIcon from '@components/ui-kit/Icons/iconComponents/MobileIcon'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const ConnectWithUsSection = () => {
  return (
    <div style={{ marginTop: 30 }}>
      <Grid
        container
        sx={{ width: { xl: '80%', lg: '90%', xs: '100%' }, margin: '60px auto auto auto' }}
      >
        <Grid item xs={6}>
          <MobileIcon />
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{
              fontWeight: 800,
              mt: '20px',
              fontSize: '28px',
              width: '80%',
              textAlign: 'left',
            }}
            gutterBottom
          >
            Connect With Us
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: '18px',
              width: '100%',
              width: '70%',
              textAlign: 'left',
              color: 'gray',
            }}
            gutterBottom
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
            dictum est a, mattis tellus.
          </Typography>
          <div style={{ display: 'block', width: '60%', marginTop: '40px' }}>
            <TextField required fullWidth id="outlined-required" defaultValue="Hello World" />
            <TextField
              sx={{ mt: '20px' }}
              required
              fullWidth
              id="outlined-required"
              defaultValue="Hello World"
            />
            <Button
              sx={{
                height: 40,
                mt: '10px',
                borderRadius: 8,
                width: 150,
                backgroundColor: '#5b5b98',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'purple',
                },
              }}
              variant="contained"
            >
              Submit
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default ConnectWithUsSection
