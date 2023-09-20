import React, { useContext } from 'react'

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { MenuOutlined } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'

import { UIContext } from '@/context/ui'

export const Navbar = () => {
  const theme = useTheme();
  const {openSideBar} = useContext(UIContext)
  return (
    <AppBar position='sticky' elevation={0}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            onClick={openSideBar}
          >
            <MenuOutlined sx={{color: theme.palette.common.white}}></MenuOutlined>
          </IconButton>
          <Typography variant='h6'>OpenJira</Typography>
        </Toolbar>
    </AppBar>
  )
}
