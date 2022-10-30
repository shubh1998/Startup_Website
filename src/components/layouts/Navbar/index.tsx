import CloseIcon from '@mui/icons-material/Close'
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
import React, { useState } from 'react'

import { DrawerHeader, styles } from './Navbar.styles'

const navItems = ['Home', 'Services', 'Technologies', 'Projects', 'Industry Solutions', 'About Us']

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const handleDrawer = () => {
    setOpen(!open)
  }

  return (
    <>
      <AppBar position="fixed" sx={styles.appBarRoot}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={styles.logoText}>
            Logo
          </Typography>
          <IconButton onClick={handleDrawer} sx={styles.hamIconContainer}>
            <MenuIcon sx={{ fontSize: '32px' }} />
          </IconButton>
          <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={styles.navItemStyle}>
                {item}
              </Button>
            ))}
            <Button sx={styles.buttonStyle} variant="contained">
              Start Project
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer sx={styles.drawerRoot} variant="persistent" anchor="right" open={open}>
        <DrawerHeader>
          <Button sx={{ ...styles.buttonStyle, marginLeft: 1 }} variant="contained">
            Start Project
          </Button>
          <IconButton onClick={handleDrawer}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {navItems.map((text) => (
            <ListItem key={text} disablePadding sx={{ borderBottom: '0.1px solid grey' }}>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <ListItem disablePadding>
          <ListItemButton>
            <Button sx={styles.buttonStyle} variant="contained">
              Start Project
            </Button>
          </ListItemButton>
        </ListItem> */}
      </Drawer>
    </>
  )
}

export default Navbar
