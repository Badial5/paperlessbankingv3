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
import { Paper } from '@mui/material'
import { motion } from "framer-motion"


import { useForm } from 'react-hook-form';
import axios from "axios"

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import { Link as RouterLink, redirect, useNavigate } from 'react-router-dom';
import { useState } from 'react';
//React Toasify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




//DIALOGS
import ChangePasswordDialog from './menu-data/PASSWORD/changePasswordDialog';
import ChangePinDialog from './menu-data/PIN/changeSecretPinDialog';
import ForgotSecretPinDialog from './menu-data/FORGOTPIN/ForgotSecretPinDialog';
import ConfirmSecurityAnswer from './menu-data/SECURITYANSWER/ConfirmSecurityA'
import TinUpdateDialog from './menu-data/TINUPDATE/FORGOTPIN/TINUpdateDialog';
import UnSubscribeDialog from './menu-data/UNSUBSCRIBE/UnSubscribeDialog';



const baseUrl = "https://api.inlakssolutions.com/accounts/v1/logout/"
// const baseUrl = "/accounts/v1/logout/"


export default function AccountMenu({userName}) {


  //STATES FOR DIALOGS
  const [openDialog, setOpenDialog] = React.useState(false);

  const [openPasswordDialog, setOpenPasswordDialog] = React.useState(false);


  const [openPinDialog, setOpenPinDialog] = React.useState(false)

  //Forgot Secret Pin
  const [openFSPDialog, setOpenFSPDialog] = useState(false)

  //Forgot Security Answer
  const [openForgotSecurityAnswer, setOpenForgotSecurityAnswer] = useState(false)

  //TIN UPDATE
  const[openTinUpdate, setOpenTinUpdate] = useState(false)

  //UNSUBSCRIBE UPDATE
  const[openUnsubscribe, setOpenUnsubscribe] = useState(false)




  //HANDLERS =======================+++++++++++++++++++++++++++++++++++++++++++++++

   //FOR LOGOUT API
   const handleLogout = async () => {
    try {
      const response = await axios.post('https://api.inlakssolutions.com/accounts/v1/logout/', {}, {withCredentials: true});
      // Perform any necessary actions after successful logout
      console.log(response.data); // Example: Log the response data
  
      // Show a success toast notification
      toast.success('You have successfully logged out.');
  
      // Redirect the user to the homepage or perform any other necessary actions
      window.location.href = '/'; // Replace with the appropriate homepage URL
    } catch (error) {
      // Handle any errors that occurred during the logout process
      console.error(error);
    }
  }



  //CHANGE PASSWORD
  const handleOpenPasswordDialog = () => {
    setOpenPasswordDialog(true);
  };

  const handleClosePasswordDialog = () => {
    setOpenPasswordDialog(false);
  };


  //CHANGE SECURITY PIN
  const handleOpenPinDialog = () => {
    setOpenPinDialog(true);
  };

  const handleClosePinDialog = () => {
    setOpenPinDialog(false);
  };


  //FORGOT SECURITY PIN
  const handleOpenFSPDialog = () => {
    setOpenFSPDialog(true)
  }

  const handleCloseFSPDialog = () => {
    setOpenFSPDialog(false)
  }


  // FORGOT SECURITY ANSWER
 const handleOpenForgotSecurityAnswer = () => {
  setOpenForgotSecurityAnswer(true)
 }

 const handleCloseForgotSecurityAnswer = () => {
  setOpenForgotSecurityAnswer(false)
 }


//  TIN HANDLERS 
const handleOpenTin = () => {
  setOpenTinUpdate(true)
}

const handleCloseTin = () => {
  setOpenTinUpdate(false)
}


//  UNSUBSCRIBE HANDLER
const handleOpenSubscribe = () => {
  setOpenUnsubscribe(true)
}

const handleCloseSubscribe = () => {
  setOpenUnsubscribe(false)
}


  console.log("Profile Menu Icon: ", openDialog)


  const { handleSubmit, register, watch, setValue, formState: {errors}, reset, 
  getValues, trigger } = useForm({
    mode: "onTouched",
    defaultValues: {
     
      password1: "",
      // password2: "",
      // tnc: ""
    }
  })




   


  // const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  const handleLogOut = async (data) => {
   
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


  console.log("Forgot Security Answer: ", openForgotSecurityAnswer)

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

      {/* <Paper sx={{borderRadius: 90, background: "black"}}> */}
        
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            // fontSize: 8,
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


        
        <MenuItem onClick={handleClose} sx={{display: 'flex'}}>
          <Avatar /> <Typography sx={{fontSize: 14, ml: 2}}>Profile</Typography>
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

        {/* <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem> */}

        {/* ==================COOLS======================================================= */}



        {/* LIST AND ICONS  */}

        {/* ============================================================================= */}

        <MenuItem onClick={handleOpenPasswordDialog}  sx={{fontSize: 12, ":hover": {backgroundColor: '#9747FF', borderRadius: 5, color: '#fff' }}}>
          <ListItemIcon >
            <ArrowDropUpIcon fontSize="small"  sx={{color: '#9747FF', fontSize: 16}} />
          </ListItemIcon>
          Change Password
        </MenuItem>


        <MenuItem onClick={handleOpenPinDialog} sx={{fontSize: 12, ":hover": {backgroundColor: '#9747FF', borderRadius: 5, color: '#fff' }}}>
          <ListItemIcon >
            <ArrowDropUpIcon fontSize="small"   sx={{color: '#9747FF', fontSize: 16}} />
          </ListItemIcon>
          Change Secret Pin
        </MenuItem>


        <MenuItem onClick={handleOpenFSPDialog} sx={{fontSize: 12, ":hover": {backgroundColor: '#9747FF', borderRadius: 5, color: '#fff' }}}>
          <ListItemIcon >
            <ArrowDropUpIcon fontSize="small"   sx={{color: '#9747FF', fontSize: 16}} />
          </ListItemIcon>
          Forgot Secret Pin
        </MenuItem>


        <MenuItem onClick={handleOpenForgotSecurityAnswer} sx={{fontSize: 12, ":hover": {backgroundColor: '#9747FF', borderRadius: 5, color: '#fff' }}}>
          <ListItemIcon >
            <ArrowDropUpIcon fontSize="small"   sx={{color: '#9747FF', fontSize: 16}} />
          </ListItemIcon>
          Forgot Secret Answers
        </MenuItem>

        <MenuItem onClick={handleOpenTin} sx={{fontSize: 12, ":hover": {backgroundColor: '#9747FF', borderRadius: 5, color: '#fff' }}}>
          <ListItemIcon >
            <ArrowDropUpIcon fontSize="small"   sx={{color: '#9747FF', fontSize: 16}} />
          </ListItemIcon>
          TIN Update
        </MenuItem>


        {/* <MenuItem onClick={handleLogOut} sx={{fontSize: 12, ":hover": {backgroundColor: '#9747FF', borderRadius: 5, color: '#fff' }}}>
          <ListItemIcon >
            <ArrowDropUpIcon fontSize="small"   sx={{color: '#9747FF', fontSize: 16}} />
          </ListItemIcon>
          Manage Your Account
        </MenuItem> */}

        <MenuItem onClick={handleOpenSubscribe} sx={{fontSize: 12, ":hover": {backgroundColor: '#9747FF', borderRadius: 5, color: '#fff' }}}>
          <ListItemIcon >
            <ArrowDropUpIcon fontSize="small"   sx={{color: '#9747FF', fontSize: 16}} />
          </ListItemIcon>
          Un-Subscribe
        </MenuItem>

        {/* <MenuItem onClick={handleLogOut} sx={{fontSize: 12, ":hover": {backgroundColor: '#9747FF', borderRadius: 5, color: '#fff' }}}>
          <ListItemIcon >
            <ArrowDropUpIcon fontSize="small"   sx={{color: '#9747FF', fontSize: 16}} />
          </ListItemIcon>
          Proxy Management
        </MenuItem> */}



        <MenuItem onClick={handleLogout} sx={{fontSize: 12, ":hover": {backgroundColor: '#E0F3FF', borderRadius: 5, color: '#F7AD83' }}}>
          <ListItemIcon>
            <Logout fontSize="small" sx={{color: '#9747FF', fontSize: 16}} />
          </ListItemIcon>
          Logout
        </MenuItem>



       

      </Menu>

      {/* </Paper> */}


        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
      <Typography sx={{fontSize: 14, color: '#4991ff'}}>Welcome back</Typography>
      <Box><Typography sx={{fontSize: 10, ml: 1, fontWeight: 600}}>
        {/* Joseph Smith  */}
        {userName ?  userName : "User"}
        </Typography></Box>
      </Box>
      
      <Tooltip title="Sign Out from online banking" placement='bottom'>
      <MenuItem onClick={handleLogout}  sx={{fontSize: 12, marginLeft: 5, ":hover": { borderRadius: 5, color: '#F7AD83', }}}>
          <ListItemIcon> 
            <Logout fontSize="small" sx={{color: '#9747FF', fontSize: 16, ":hover": {backgroundColor: '#E0F3FF', borderRadius: 5, color: '#F7AD83' }}} />
          </ListItemIcon>
        </MenuItem>
      </Tooltip>

      </Box>


      {/* DIALOGS FOR THE MENUS  */}

        {/* CHANGE PASSWORD DIALOG  */}
      <ChangePasswordDialog openDialog={openPasswordDialog} handleClose={handleClosePasswordDialog} />

        {/* CHANGE PIN DIALOG  */}
      <ChangePinDialog openDialog={openPinDialog} handleClose={handleClosePinDialog} />

        {/* FORGOT SECRET PIN DIALOG  */}
      <ForgotSecretPinDialog openDialog={openFSPDialog} handleClose={handleCloseFSPDialog} />


        {/* FORGOT SECRET ANSWERS DIALOG  */}
      {/* <ForgotSecutiry openDialog={openResetSQDialog} handleClose={handleCloseResetSQSQDialog} /> */}

      <ConfirmSecurityAnswer openDialog={openForgotSecurityAnswer} handleClose={handleCloseForgotSecurityAnswer} />

        {/* TIN UPDATE DIALOG  */}
      <TinUpdateDialog openDialog={openTinUpdate} handleClose={handleCloseTin} />


       {/* TIN UPDATE DIALOG  */}
       <UnSubscribeDialog openDialog={openUnsubscribe} handleClose={handleCloseSubscribe}  
          
       />


<ToastContainer
          position="top-right"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
      />



    </React.Fragment>
  );
}