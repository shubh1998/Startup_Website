import MediumMobileIcon from '@components/ui-kit/Icons/iconComponents/MediumMobileIcon'
import MobileIcon from '@components/ui-kit/Icons/iconComponents/MobileIcon'
import CustomTextField from '@components/ui-kit/TextField'
import { FormContainer, styles } from '@containers/Home/Home.styles'
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'

const ConnectWithUsSection = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  const contactUsSchema = yup.object({
    name: yup.string().label('name').required('Name is required'),
    email: yup.string().label('email').email('invalidEmailFormat').required('Email is required'),
    message: yup
      .string()
      .label('message')
      .min(4, 'mustbeAtleastCharacters')
      .max(100, 'cannotExceedCharacters')
      .required('Message is required'),
    services: yup
      .string()
      .label('services')
      .min(4, 'mustbeAtleastCharacters')
      .max(100, 'cannotExceedCharacters')
      .required('services is required'),
    terms: yup.boolean().label('terms'),
  })

  const { handleSubmit, values, handleChange, errors, setFieldValue } = useFormik({
    initialValues: {
      name: '',
      email: '',
      services: '',
      message: '',
      terms: false,
    },
    validationSchema: contactUsSchema,
    onSubmit: (props) => {
      console.log('submit', props)
    },
  })

  const handleCheckbox = () => {
    setFieldValue('terms', !values.terms)
  }

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
          {/* <TextField
            sx={{ mt: '20px' }}
            required
            fullWidth
            id="outlined-required"
            defaultValue="email"
          /> */}
          <CustomTextField
            sx={{ marginBottom: '20px' }}
            label={'name'}
            placeholder={'name'}
            variant="outlined"
            fullWidth
            id="name"
            name={'name'}
            value={values.name}
            onChange={handleChange}
            error={errors.name}
            helperText={errors.name}
          />
          <CustomTextField
            sx={{ marginBottom: '20px' }}
            label={'email'}
            placeholder={'email'}
            variant="outlined"
            fullWidth
            id="email"
            name={'email'}
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            helperText={errors.email}
          />
          <CustomTextField
            sx={{ marginBottom: '20px' }}
            label={'services'}
            placeholder={'services'}
            variant="outlined"
            fullWidth
            id="services"
            name={'services'}
            value={values.services}
            onChange={handleChange}
            error={errors.services}
            helperText={errors.services}
          />
          <CustomTextField
            // sx={{ marginBottom: '20px' }}
            label={'message'}
            placeholder={'message'}
            variant="outlined"
            fullWidth
            id="message"
            name={'message'}
            rows={4}
            value={values.message}
            onChange={handleChange}
            multiline
            error={errors.message}
            helperText={errors.message}
          />
          <div style={{ marginTop: '20px' }}>
            <FormControlLabel
              checked={values.terms}
              onChange={handleCheckbox}
              control={<Checkbox defaultChecked />}
              label="Terms and conditions"
            />
          </div>
          <Button sx={styles.formButtonStyle} variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </FormContainer>
      </Grid>
    </Grid>
  )
}

export default ConnectWithUsSection
