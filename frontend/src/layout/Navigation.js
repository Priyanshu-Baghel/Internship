import React from "react";
import { NavLink } from "react-router-dom";
import Ava from "../media/avatar.png";

import {
  AppBar, Toolbar, Container, Typography, Menu, MenuItem, Button, IconButton,
  Tooltip, Avatar
} from "@mui/material";
import { Box } from "@mui/system";

import { Logout as LogoutIcon } from '@mui/icons-material'

import IOCL from "../media/logo/Indian_Oil_Logo.svg"

const Logo = () => (
  <Box sx={{ display: "flex", alignItems: "center", textDecoration: 'none' }} component={NavLink} to='/'>
    <Box sx={{ height: 64, mr: 1, padding: 1 }}>
      <img src={IOCL} style={{
        height: '100%'
      }} alt="" />
    </Box>
  </Box>)

const NavBox = ({ display, children }) => {
  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      {children}
    </Box>
  )
}

const navItems = [
  { url: '/admin', icon: 'floppy', label: 'Dashboard' },
  { url: '/register', icon: 'floppy', label: 'Register' },
  { url: '/geofencing', icon: 'floppy', label: 'Geofencing' },
]

function Navigation({ logoutUser, user }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    handleCloseUserMenu();
    logoutUser();
  }

  return (
    <AppBar elevation={2} position="sticky" color="transparent" sx={{
      backgroundColor: '#ffffffcc',
      backdropFilter: 'blur(6px)'
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo display='desktop' />
          <NavBox>
            {user && (<>
              {navItems.map((page) => (
                <Button
                  disableTouchRipple
                  key={page.label}
                  sx={{
                    ml:"30px",
                    color: 'grey',
                    my: 3, display: 'block',
                    '&.active': {
                      color: 'black'
                    },
                    '&.hover': {
                      backgroundColor: 'seagreen',
                      border: 'solid 5px seagreen'
                    }
                    
                  }}
                  LinkComponent={NavLink} to={page.url}
                >{page.label}</Button>
              ))}
            </>)}
          </NavBox>

          {user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Profile">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.name} src= {Ava} sx={{border:'solid', borderBlockColor:'black', borderRadius:"1px"}}>
                  </Avatar>
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Box marginX={2} marginY={2} sx={{ minWidth: 100 }}>
                  <Typography textAlign='center' variant="h6">
                    {user.name }
                  </Typography>
                  <Typography textAlign='center' variant="body1">
                    {user.email}
                  </Typography>
                </Box>
                <MenuItem onClick={handleLogout} sx={{ justifyContent: 'center', gap: 1 }}>
                  <LogoutIcon />
                  <Typography textAlign='center' variant="body1">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Button component={NavLink} variant='contained' sx={{ mt: 3, mb: 2, backgroundColor: 'black', color: 'white' }} to='/login'>
              <Typography textAlign="center">Login</Typography>
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;