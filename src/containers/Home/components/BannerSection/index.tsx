import Navbar from '@components/layouts/Navbar'
import LaptopIcon from '@components/ui-kit/Icons/iconComponents/LaptopIcon'
import { BannerSectionRoot, styles } from '@containers/Home/Home.styles'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import ReactTyped from 'react-typed'
import Wave from 'react-wavify'

const BannerSection = () => {
  return (
    <>
      <Navbar />
      <Wave
        style={styles.waveStyle}
        fill="#140a42"
        paused={false}
        options={{
          height: 10,
          amplitude: 40,
          speed: 0.4,
          points: 2,
        }}
      />
      <BannerSectionRoot>
        <Grid container sx={styles.bannerGridContainer}>
          <Grid item xs={12} lg={6} sx={styles.bannerContentStyle}>
            <div>
              <ReactTyped
                strings={[
                  'We are a team of Developers, Designers, Innovators...',
                  'We Provide Secure IT Solutions for a More Secure Environment!',
                ]}
                typeSpeed={60}
                backSpeed={60}
                loop
                style={styles.typedText}
              />
              <Typography sx={styles.subHeadingBanner}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                dictum est a, mattis tellus.
              </Typography>

              <Button sx={styles.buttonStyle} variant="contained">
                Contact Us
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} lg={6} sx={styles.laptopIconStyle}>
            <LaptopIcon />
          </Grid>
        </Grid>
      </BannerSectionRoot>
    </>
  )
}

export default BannerSection
