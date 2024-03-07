
import { Divider, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';

function Header() {
  return (
    <>
    <Toolbar className='bg-[#9c98e99f]'>
        <IconButton color='inherit'>
            <MenuIcon/>
        </IconButton>
        <Typography variant='h6' className='flex-1'>Blogging Website</Typography>
        <IconButton color='inherit'>
            <Badge badgeContent={4} color='secondary'>
                <NotificationsIcon />
            </Badge>
        </IconButton>
        <IconButton color='inherit'>
            <AccountCircleIcon/>
        </IconButton>
    </Toolbar>
    <Divider/>
    <Toolbar className='text-2xl uppercase justify-center font-sans'>
        Express your Emotion through the words
    </Toolbar>
    </>
  )
}

export default Header