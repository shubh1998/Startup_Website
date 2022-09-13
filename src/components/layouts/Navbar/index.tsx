import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  const navItems = [
    'Home',
    'Services',
    'Technologies',
    'Projects',
    'Industry Solutions',
    'About Us',
  ]

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#140a42',
        boxShadow: 'none',
        height: 85,
        // border: '2px solid black',
        color: 'black',
        pt: '10px',
        pr: '10%',
        pl: '10%',
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            color: '#ffffff',
            fontWeight: 800,
            // display: { xs: 'none', sm: 'block' },
          }}
        >
          Logo
        </Typography>
        <Box
        // sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          {navItems.map((item) => (
            <Button
              key={item}
              sx={{
                color: '#ffffff',
                fontWeight: 550,
                textTransform: 'capitalize',
                height: 72,
                '&:hover': {
                  borderBottom: '3px solid #ED003F',
                  borderRadius: 0,
                },
              }}
            >
              {item}
            </Button>
          ))}
          <Button
            sx={{
              height: 40,
              borderRadius: 8,
              width: 160,
              backgroundColor: '#ED003F',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: 'purple',
              },
            }}
            variant="contained"
          >
            Start Project
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
