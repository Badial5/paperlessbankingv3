import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

import { useForm } from 'react-hook-form';
import axios from "axios"

import { Link as RouterLink, redirect, useNavigate } from 'react-router-dom';
import { useState } from 'react';





const baseUrl = "https://banking-api.inlakssolutions.com/accounts/v1/logout/"
// const baseUrl = "/accounts/v1/logout/"


export default function AccountMenu() {

  const { handleSubmit, register, watch, setValue, formState: {errors}, reset, 
  getValues, trigger } = useForm({
    mode: "onTouched",
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      password1: "",
      // password2: "",
      // tnc: ""
    }
  })




     //error state
  const [error, setError] = useState(null)
  const [logoutStatus, setLogoutStatus] = useState('')


  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  const handleLogOut = async (data) => {
    sessionStorage.setItem("email", data.email);
    console.log("Form Data: ", data)
    // registerForm()
    // reset()
    try {
      const response = await axios.post(baseUrl, data)
      const newResponse = response.data
      console.log(newResponse)
      // newResponse()
      
      // setCurrentEmail(email)
      // console.log("EMail Context Value: ", email)
  
      // console.log("Session Storage Email ", email)
      setLogoutStatus(newResponse)
    
      navigate("/")
      reset()
  
      // console.log("Successful: ", newResponse)
    } catch (error) {
      // setError(error.response.data)
  
      if (error.response.data.message === "Request failed with status code 500") {
        console.log("Sorry You made a bad request" )
        setError("You made a bad request\n Check the Email")
      } else {
        setError(error.response.data)
      }
      // console.log("Error Message: ", error.response.data)
      console.log("Error Message from state: ", error) 
    }
  }




  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));



  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center',
    fontFamily: "Poppins" }}>
      
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
            <Avatar sx={{ width: 32, height: 32 }}>C</Avatar>

            </StyledBadge>
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={{display: "flex"}}>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem> */}
        <Divider />
        {/* <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem> */}
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>

        {/* ==================LOGOUT======================================================= */}

        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>


      </Menu>

        <Box sx={{display: "flex", flexDirection: "column"}}>
      <Typography sx={{fontSize: 10}}>Welcome back</Typography>
      <Box><Typography sx={{fontSize: 10}}>Joseph</Typography></Box>
      </Box>
      </Box>
    </React.Fragment>
  );
}