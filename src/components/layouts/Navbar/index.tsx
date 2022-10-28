import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import React, { useState } from 'react'

const drawerWidth = 240

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

const Navbar = () => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const navItems = [
    'Home',
    'Services',
    'Technologies',
    'Projects',
    'Industry Solutions',
    'About Us',
  ]

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#140a42',
          boxShadow: 'none',
          height: 85,
          // border: '2px solid black',
          color: 'black',
          pt: '10px',
          pr: { xs: '5%', lg: '10%' },
          pl: { xs: '5%', lg: '10%' },
        }}
      >
        <Toolbar>
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerOpen}
            sx={{ color: 'white', display: { xs: 'block', lg: 'none' } }}
          >
            <MenuIcon sx={{ fontSize: '32px' }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: '#ffffff',
              fontWeight: 800,
              textAlign: { xs: 'end', lg: 'start' },
              // display: { xs: 'none', sm: 'block' },
            }}
          >
            Logo
          </Typography>
          <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
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
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {navItems.map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <ListItem disablePadding>
          <ListItemButton>
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
          </ListItemButton>
        </ListItem>
      </Drawer>
    </>
  )
}

export default Navbar
