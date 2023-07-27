import { useState } from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CreateIcon from '@mui/icons-material/Create';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate, useLocation, Link, NavLink } from 'react-router-dom';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AppBar, Box, Drawer, ListItemButton, Stack, Toolbar, Tooltip, Typography } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import  { tooltipClasses } from '@mui/material/Tooltip';

import Avatar from '@mui/material/Avatar/Avatar';

import Image from 'mui-image'
// import Typography from '@mui/material/Typography';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';


import {ReactComponent as DashboardLogo} from "../assets/dashboard.svg"
import {ReactComponent as EnquiryLogo} from "../assets/Enquiry.svg"
import {ReactComponent as AccountLogo} from "../assets/AccountService.svg"
import {ReactComponent as TransferLogo} from "../assets/Transfer.svg"
import {ReactComponent as RequestLogo} from "../assets/Request.svg"
import {ReactComponent as CallLogo} from "../assets/Call.svg"
import {ReactComponent as CardLogo} from "../assets/Card Service.svg"
import {ReactComponent as InvestmentLogo} from "../assets/Investment.svg"
import {ReactComponent as LoanLogo} from "../assets/Loan.svg"
import {ReactComponent as LogoutLogo} from "../assets/Logout.svg"
import {ReactComponent as NeedHelpLogo} from "../assets/Needhelp.svg"
import {ReactComponent as OtherLogo} from "../assets/Other.svg"
import {ReactComponent as PaymentLogo} from "../assets/Payment.svg"

import AccountMenu from './data/ProfileMenuIcon';

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';

import ClipLoader from 'react-spinners/ClipLoader';
import axios from 'axios';

//React Toasify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//Logo Image
import Image5 from "./asset/images/Image5.jpg"


const LeftAppBar = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...theme.mixins.toolbar,
}));






const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    // color: theme.palette.common.black,
    color: "#9747FF"
  },
  [`& .${tooltipClasses.tooltip}`]: {
    // backgroundColor: theme.palette.common.black,
    backgroundColor: "#9747FF",
    fontSize: 12,
    maxWidth: 100,
  },
}));

const LeftSideMenu = ({onOptionSelect}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);



  const [selectedOption, setSelectedOption] = useState('default');


  //The width of the drawer
const drawerWidth = 240


  const handleClick = () => {
    setOpen(!open);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const handleClick3 = () => {
    setOpen3(!open3);
  };

  const handleClick4 = () => {
    setOpen4(!open4);
  };

  const handleClick5 = () => {
    setOpen5(!open5);
  };

  const handleClick6 = () => {
    setOpen6(!open6);
  };

  const handleClick7 = () => {
    setOpen7(!open7);
  };

  const handleClick8 = () => {
    setOpen8(!open8);
  };

  const handleClick9 = () => {
    setOpen9(!open9);
  };

  const handleClick10 = () => {
    setOpen10(!open10);
  };


  // Enquiry 
  const handleAccountBalanceClick = () => {
    navigate('/enquiry-balance');
  };

  const handleAccountStatementClick = () => {
    navigate('/enquiry-statement');
  };

  const handleAccountOfficerDetailsClick = () => {
    navigate('/enquiry-officer-details');
  };

  const handleExchangeRateClick = () => {
    navigate('/enquiry-exchange-rate');
  };


  // Account Service 
  const handleAccountCreationClick = () => {
    navigate('/account-creation');
  };

  const handleAccountOfficerClick = () => {
    navigate('/account-officer');
  };

  const handleBankAppointment = () => {
    navigate('/bank-appointment');
  };

  // const handleOptionClick = (option) => {
  //   onOptionSelect(option);
  // };

  //FOR LOGOUT API
  const handleLogout = async () => {
    try {
      const response = await axios.get('https://banking-api.inlakssolutions.com/accounts/v1/logout/');
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



  const handleOptionClick = (option) => {
    sessionStorage.setItem('selectedOption', option);
    onOptionSelect(option);

    setSelectedOption(option);
  };

  const handleOptionClick2 = (option) => {
    sessionStorage.setItem('selectedOption', option);
    onOptionSelect(option);

    setSelectedOption(option);
  };


  const handleLogOut = async (data) => {
    
  }





  console.log("Selected Option: ", selectedOption)

  return (
    // <Box style={{width: "20vw", fontSize: 10}}>
        
     
    <>
     
      <Drawer
        sx={{
          width: drawerWidth,
          fontSize: 10,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >

        <AppBar position="fixed" sx={{background: "#FBFCFC", color: "#000", borderRadius: 1,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"}}>
                <Toolbar>
                  <Box sx={{display: "flex", justifyContent: "space-between"}}>

                  {/* <Typography variant="h6" component="div" sx={{ 
                  //  color: "#9747FF", 
                  color: "#000", width: 240,
                fontSize: 14, fontFamily: "Poppins",  fontWeight: "300"}}>

                    Internet Banking

                  </Typography> */}

                  {/* Image Box  */}
                  <Box sx={{ width: 240, my: "auto", 
                  marginRight: "auto"
                  }}>
                    <Image 
                    // src="./asset/images/Image1.jpg" 
                    src={Image5}
                    width={150} height={50} 
                    easing="ease-in-out"
                    duration={325} 
                    fit='cover'
                    sx={{borderRadius: 16}}
                     />

                    {/* <Avatar 
                    alt="Logo"
                    src="./asset/images/Image5.jpg" /> */}
                  </Box>

                  {/* Center AppBar Contents */}
                  <Box sx={{display: 'flex', marginLeft: 30,  fontFamily: "Poppins", alignItems: 'center'}}>
                    <Box sx={{border: "1px solid #9747FF", paddingLeft: 2, paddingRight: 2, borderRadius: 50, }}>
                  <Typography sx={{fontWeight: 200, fontSize: 9,}}>Retail Banking </Typography>
                  </Box>


                  <Box sx={{display: 'flex',  marginLeft: 5, alignItems: 'center', width: "auto"}}>
                    <LocationOnIcon fontSize='small' sx={{color: '#9747FF', mr: 1}} />
                    <Box sx={{display: 'flex', flexDirection: 'column', }}>
                    <Typography sx={{fontSize: 10, fontWeight: 300}}>197.221.82.30</Typography>

                    <Typography sx={{fontSize: 10, fontWeight: 300, color: '#9747FF'}}>Last Login IP</Typography>

                    </Box>
                  </Box>




                  <Box sx={{display: 'flex',  marginLeft: 5, alignItems: 'center'}}>
                    <AccessTimeIcon fontSize='small' sx={{color: '#9747FF', mr: 1}} />
                    <Box sx={{display: 'flex', flexDirection: 'column', }}>
                    <Typography sx={{fontSize: 10, fontWeight: 300}}>19-Jun-2023 04 09 PM</Typography>

                    <Typography sx={{fontSize: 10, fontWeight: 300, color: '#9747FF'}}>Last Login Date</Typography>

                    </Box>
                  </Box>
                  </Box>

                  <Box sx={{display: 'flex', marginLeft: 10}}>

                  <AccountMenu handleClick={handleLogOut}  />

                  </Box>

                 

                  </Box>
                </Toolbar>
        </AppBar>



        <Toolbar></Toolbar>

              

      <List sx={{fontSize: 12}}>


        <ListItemButton
          selected={location.pathname === '/'}
          // onClick={() => navigate('/')} 
          onClick={() => {
            // navigate('/account-creation');
            handleOptionClick('default');
          }}
          sx={{background: "#9747FF",
          // borderLeft: "5px solid #1F8EA7",
          // lineHeight: "1px",
          borderRadius: 1, color: "#fff",
          fontSize: 10,
          
          "&.MuiButtonBase-root:hover": {
            // bgcolor: "red"
            background: "#9747FF",
            color: "#ffffff"
          },  }}
        >

          <ListItemIcon>
            {/* <DashboardIcon sx={{color: "#B5AFAF"}} />  */}
            <DashboardLogo />
          </ListItemIcon>
          <ListItemText primary="Dashboard"  />
        </ListItemButton>





          {/* Enquiry tab  */}
          {/* Enquiry Tab  */}

          <ListItemButton
          selected={location.pathname.includes('/enquiry')}
          onClick={handleClick2}
          
          sx={{ pl: 1,   mt: 1, }}>
          <ListItemIcon>
            <EnquiryLogo sx={{color: "#B5AFAF"}} />
          </ListItemIcon>
          <ListItemText primary="Enquiry" />
          {open2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>

        <Collapse in={open2} timeout="auto" unmountOnExit>
          {/* <List component="div" disablePadding>

            <ListItemButton
              selected={location.pathname === '/enquir'}
              // sx={{ pl: 4, borderLeft: '2px solid red' }}
              sx={{pl:3, }}
              onClick={() => {
                // navigate('/account-creation');
                handleOptionClick('/enquiry-balance');
              }}
              
            >
              <ListItemIcon>
                <CreateIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="Account Balance" />
            </ListItemButton>



            <ListItemButton
              selected={location.pathname === '/enquiry-statement'}
              // sx={{ pl: 4 }}
              sx={{pl:3, }}
              // onClick={handleAccountOfficerClick}
              onClick={() => {
                // navigate('/account-creation');
                handleOptionClick('enquiry-statement');
              }}
            >
              <ListItemIcon>
                <AssignmentIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="Enquiry Statement" />
            </ListItemButton>

            
          </List> */}
           <List component="div" disablePadding>


            {/* <ListItemButton
              selected={location.pathname === '/account-balance'}
              // sx={{ pl: 4, borderLeft: '2px solid red' }}
              sx={{pl:3, }}
              onClick={() => {
                // navigate('/account-creation');
                // Link="account-creation"
                handleOptionClick('account-balance');
              }}
              
            >
              <ListItemIcon>
                <CreateIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="Account Balance Games" />
            </ListItemButton> */}






            <ListItemButton
              selected={location.pathname === '/account-officer'}
              // sx={{ pl: 4 }}
              sx={{pl:3, }}
              // onClick={handleAccountOfficerClick}
              onClick={() => {
                // navigate('/account-creation');
                handleOptionClick('account-officer');
              }}
            >
              <ListItemIcon>
                <AssignmentIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="Account Officer Details" />
            </ListItemButton>

          </List>
        </Collapse>
       



{/* ============================================================================== */}
          {/* Account Service  */}
        <ListItemButton
          selected={location.pathname.includes('/account')}
          onClick={handleClick}
          
          sx={{ pl: 1,   mt: 1, }}>
          <ListItemIcon>
            <AccountLogo sx={{color: "#B5AFAF"}} />
          </ListItemIcon>
          <ListItemText primary="Account Service" />
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>


            {/* This is the Old Account Creation */}
  {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++           */}
            {/* <ListItemButton
              selected={location.pathname === '/account-creation'}
              // sx={{ pl: 4, borderLeft: '2px solid red' }}
              sx={{pl:3, }}
              onClick={() => {
                // navigate('/account-creation');
                handleOptionClick('account-creation');
              }}
              
            >
              <ListItemIcon>
                <CreateIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="Account Creation" />
            </ListItemButton> */}

            <ListItemButton 
            // component={Link} to="account-creation"
              selected={location.pathname === '/account-create'}
              // sx={{ pl: 4, borderLeft: '2px solid red' }}
              sx={{pl:3, }}
              onClick={() => {
                // navigate('account-creation');
                // handleAccountCreationClick
                // Link="account-creation" 
                // <NavLink to="account-creation">Account Creation</NavLink>

                handleOptionClick('account-balance');
              }}

              // onClick={handleAccountCreationClick}
              
            >
              <ListItemIcon>
                <CreateIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="Create Account" />
            </ListItemButton>




            <ListItemButton
              selected={location.pathname === '/account-officer'}
              // sx={{ pl: 4 }}
              sx={{pl:3, }}
              // onClick={handleAccountOfficerClick}
              onClick={() => {
                // navigate('/account-officer');
                // handleOptionClick('account-officer');
              }}
            >
              <ListItemIcon>
                <AssignmentIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="Account Officer Details" />
            </ListItemButton>

          </List>
        </Collapse>
          

        {/* <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Transfer" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
          </List>
          </Collapse> */}



{/* =======================TRANSFER SERVICE =================================================== */}
            {/* Transfer Service  */}
        <ListItemButton
          selected={location.pathname.includes('/transfer')}
          onClick={handleClick3}
          
          sx={{ pl: 1,   mt: 1, }}>
          <ListItemIcon>
            <TransferLogo sx={{color: "#B5AFAF"}} />
          </ListItemIcon>
          <ListItemText primary="Transfer Service" />
          {open3 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>

        <Collapse in={open3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>


          <ListItemButton
              selected={location.pathname === '/third-party-transfer'}
              // sx={{ pl: 4, borderLeft: '2px solid red' }}
              sx={{pl:3, }}
              onClick={() => {
                // navigate('/account-balance');
                handleOptionClick('third-party-transfer');
              }}
              
            >
              <ListItemIcon>
                <CreateIcon sx={{color: "#B5AFAF",}} />
              </ListItemIcon>
              <ListItemText primary="Third Party Transfer" />
            </ListItemButton>



          <ListItemButton
              selected={location.pathname === '/own-account-transfer'}
              // sx={{ pl: 4, borderLeft: '2px solid red' }}
              sx={{pl:3, }}
              onClick={() => {
                // navigate('/account-creation');
                handleOptionClick('own-account-transfer');
              }}
              
            >
              <ListItemIcon>
                <CreateIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="Own Account Transfer" />
            </ListItemButton>


            <ListItemButton
              selected={location.pathname === '/bank-transfer'}
              // sx={{ pl: 4, borderLeft: '2px solid red' }}
              sx={{pl:3, }}
              onClick={() => {
                // navigate('/account-creation');
                handleOptionClick('bank-transfer');
              }}
              
            >
              <ListItemIcon>
                <CreateIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="Bank Transfer" />
            </ListItemButton>

            <ListItemButton
              selected={location.pathname === '/manage-beneficiary'}
              // sx={{ pl: 4 }}
              sx={{pl:3, }}
              // onClick={handleAccountOfficerClick}
              onClick={() => {
                // navigate('/account-creation');
                handleOptionClick('manage-beneficiary');
              }}
            >
              <ListItemIcon>
                <AssignmentIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="Manage Beneficiary" />
            </ListItemButton>



            <ListItemButton
              selected={location.pathname === '/transfer-history'}
              // sx={{ pl: 4 }}
              sx={{pl:3, }}
              // onClick={handleAccountOfficerClick}
              onClick={() => {
                // navigate('/account-creation');
                handleOptionClick('transfer-history');
              }}
            >
              <ListItemIcon>
                <AssignmentIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="Transfer History" />
            </ListItemButton>


            <ListItemButton
              selected={location.pathname === '/my-schedule'}
              // sx={{ pl: 4 }}
              sx={{pl:3, }}
              // onClick={handleAccountOfficerClick}
              onClick={() => {
                // navigate('/account-creation');
                handleOptionClick('my-schedule');
              }}
            >
              <ListItemIcon>
                <AssignmentIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="My Schedules" />
            </ListItemButton>

          </List>
        </Collapse>




        
{/* =======================REQUEST SERVICE =================================================== */}
            {/* Request Service  */}
            <ListItemButton
          selected={location.pathname.includes('/bank')}
          onClick={handleClick4}
          
          sx={{ pl: 1,   mt: 1,}}>
          <ListItemIcon>
            <RequestLogo sx={{color: "#B5AFAF"}} />
          </ListItemIcon>
          <ListItemText primary="Request" />
          {open4 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>

        <Collapse in={open4} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>


  <BootstrapTooltip title="Request for Cheque Book" 
     placement="right-start" arrow>
      <ListItemButton
       selected={location.pathname === '/bank-request'}
      
       sx={{pl:3, }}
     
       onClick={() => {
         // navigate('/bank-appointment');
         handleOptionClick('chequebook-request');
         // return handleBankAppointment
       }}

       
     >
       <ListItemIcon>
         <CreateIcon sx={{color: "#B5AFAF"}} />
       </ListItemIcon>
       <ListItemText primary="Cheque Book Request" />
     </ListItemButton>
  </BootstrapTooltip>


     <BootstrapTooltip title="Register Mobile Banking" 
     placement="right-start" arrow>
     <ListItemButton
       selected={location.pathname === '/banking-request'}
      
       sx={{pl:3, }}
     
       onClick={() => {
         // navigate('/bank-appointment');
         handleOptionClick('register-mobile-banking');
         // return handleBankAppointment
       }}

       
     >
       <ListItemIcon>
         <CreateIcon sx={{color: "#B5AFAF"}} />
       </ListItemIcon>
       <ListItemText primary="Register Mobile Banking" />
     </ListItemButton>
     </BootstrapTooltip>


     <BootstrapTooltip title="Activate SMS and Email notifications on your account" 
     placement="right-start" arrow>
     <ListItemButton
       selected={location.pathname === '/banking-request'}
      
       sx={{pl:3, }}
     
       onClick={() => {
         // navigate('/bank-appointment');
         handleOptionClick('e-subscription-alert');
         // return handleBankAppointment
       }}

       
     >
       <ListItemIcon>
         <CreateIcon sx={{color: "#B5AFAF"}} />
       </ListItemIcon>
       <ListItemText primary="E-Alert Subscription" />
     </ListItemButton>
     </BootstrapTooltip>


     <BootstrapTooltip title="Stop Cheque" 
     placement="right-start" arrow>
     <ListItemButton
       selected={location.pathname === '/banking-request'}
      
       sx={{pl:3, }}
     
       onClick={() => {
         // navigate('/bank-appointment');
         handleOptionClick('stop-cheque');
         // return handleBankAppointment
       }}

       
     >
       <ListItemIcon>
         <CreateIcon sx={{color: "#B5AFAF"}} />
       </ListItemIcon>
       <ListItemText primary="Stop Cheque" />
     </ListItemButton>
     </BootstrapTooltip>



     <BootstrapTooltip title="Request for electronic statements on your account" 
     placement="right-start" arrow>
     <ListItemButton
       selected={location.pathname === '/banking-request'}
      
       sx={{pl:3, }}
     
       onClick={() => {
         // navigate('/bank-appointment');
         handleOptionClick('e-statement-subscription');
         // return handleBankAppointment
       }}

       
     >
       <ListItemIcon>
         <CreateIcon sx={{color: "#B5AFAF"}} />
       </ListItemIcon>
       <ListItemText primary="E-Statement Subscription" />
     </ListItemButton>
     </BootstrapTooltip>



     <BootstrapTooltip title="Update your Mobile Banking PIN to ensure maximum security for your account" 
     placement="right-start" arrow>
     <ListItemButton
       selected={location.pathname === '/banking-request'}
      
       sx={{pl:3, }}
     
       onClick={() => {
         // navigate('/bank-appointment');
         handleOptionClick('change-mobile-banking');
         // return handleBankAppointment
       }}

       
     >
       <ListItemIcon>
         <CreateIcon sx={{color: "#B5AFAF"}} />
       </ListItemIcon>
       <ListItemText primary="Change Mobile Banking PIN" />
     </ListItemButton>
     </BootstrapTooltip>


     <BootstrapTooltip title="Request Log Record" 
     placement="right-start" arrow>
     <ListItemButton
       selected={location.pathname === '/banking-request'}
      
       sx={{pl:3, }}
     
       onClick={() => {
         // navigate('/bank-appointment');
         handleOptionClick('request-history');
         // return handleBankAppointment
       }}

       
     >
       <ListItemIcon>
         <CreateIcon sx={{color: "#B5AFAF"}} />
       </ListItemIcon>
       <ListItemText primary="Request History" />
     </ListItemButton>
     </BootstrapTooltip>


    



     <BootstrapTooltip title="Securing Your Financial Future: A Bank Appointment You Can't Afford to Miss" 
     placement="right-start" arrow>
          <ListItemButton
       
          selected={location.pathname === '/bank-appointment'}
         
          sx={{pl:3, }}
        
          onClick={() => {
            // navigate('/bank-appointment');
            handleOptionClick('bank-appointment');
            // return handleBankAppointment
          }}

          
        >
          <ListItemIcon>
            <CreateIcon sx={{color: "#B5AFAF"}} />
          </ListItemIcon>
          <ListItemText primary="Bank Appointment" />
        </ListItemButton>
    </BootstrapTooltip>



    <BootstrapTooltip title="Your One-Stop Destination for All Your Financial Needs: Welcome to Our Bank Branch" 
     placement="right-start" arrow>
            <ListItemButton
              selected={location.pathname === 'bank'}
              // sx={{ pl: 4 }}
              sx={{pl:3, }}
              
              onClick={() => {
                // navigate('/account-creation');
                handleOptionClick('bank-branch');
                // return handleBankAppointment
              }}
            >
              <ListItemIcon>
                <AssignmentIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="Bank Branch" />
            </ListItemButton>
    </BootstrapTooltip>



   

            

          </List>
        </Collapse>





        {/* =======================PAYMENT SERVICE =================================================== */}
            {/* Payment Service  */}
            <ListItemButton
          selected={location.pathname.includes('/transfer')}
          onClick={handleClick5}
          
          sx={{ pl: 1,   mt: 1, }}>
          <ListItemIcon>
            <PaymentLogo sx={{color: "#B5AFAF"}} />
          </ListItemIcon>
          <ListItemText primary="Payment" />
          {open5 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>

        <Collapse in={open5} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              selected={location.pathname === '/account-creation'}
              // sx={{ pl: 4, borderLeft: '2px solid red' }}
              sx={{pl:3, }}
              onClick={() => {
                // navigate('/account-creation');
                handleOptionClick('account-creation');
              }}
              
            >
              <ListItemIcon>
                <CreateIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="Transfer" />
            </ListItemButton>

            <ListItemButton
              selected={location.pathname === '/account-officer'}
              // sx={{ pl: 4 }}
              sx={{pl:3, }}
              // onClick={handleAccountOfficerClick}
              onClick={() => {
                // navigate('/account-creation');
                handleOptionClick('account-officer');
              }}
            >
              <ListItemIcon>
                <AssignmentIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="Account Officer Details" />
            </ListItemButton>

          </List>
        </Collapse>



         {/* =======================CARD SERVICE =================================================== */}
            {/* Card Service  */}
            <ListItemButton
          selected={location.pathname.includes('/debit')}
          onClick={handleClick6}
          
          sx={{ pl: 1,   mt: 1, }}>
          <ListItemIcon>
            <CardLogo sx={{color: "#B5AFAF"}} />
          </ListItemIcon>
          <ListItemText primary="Card Service" />
          {open6 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>

        <Collapse in={open6} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>



            <BootstrapTooltip title="Debit Card Request" 
     placement="right-start" arrow>

            <ListItemButton
              selected={location.pathname === '/card-service'}
              // sx={{ pl: 4 }}
              sx={{pl:3, }}
              // onClick={handleAccountOfficerClick}
              onClick={() => {
                // navigate('/account-creation');
                handleOptionClick('debitcard-service');
              }}
            >
              <ListItemIcon>
                <AssignmentIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="Debit Card Request" />
            </ListItemButton>
            </BootstrapTooltip>


            <BootstrapTooltip title="Block Card" 
     placement="right-start" arrow>

            <ListItemButton
              selected={location.pathname === '/card-service'}
              // sx={{ pl: 4 }}
              sx={{pl:3, }}
              // onClick={handleAccountOfficerClick}
              onClick={() => {
                // navigate('/account-creation');
                handleOptionClick('block-card');
              }}
            >
              <ListItemIcon>
                <AssignmentIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="Block Card" />
            </ListItemButton>
            </BootstrapTooltip>


            <BootstrapTooltip title="Change the spending limit on your card" 
     placement="right-start" arrow>

            <ListItemButton
              selected={location.pathname === '/card-service'}
              // sx={{ pl: 4 }}
              sx={{pl:3, }}
              // onClick={handleAccountOfficerClick}
              onClick={() => {
                // navigate('/account-creation');
                handleOptionClick('amend-card');
              }}
            >
              <ListItemIcon>
                <AssignmentIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="Amend Card Limit" />
            </ListItemButton>
            </BootstrapTooltip>



            <BootstrapTooltip title="Unblock Card" 
     placement="right-start" arrow>

            <ListItemButton
              selected={location.pathname === '/card-service'}
              // sx={{ pl: 4 }}
              sx={{pl:3, }}
              // onClick={handleAccountOfficerClick}
              onClick={() => {
                // navigate('/account-creation');
                handleOptionClick('unblock-card');
              }}
            >
              <ListItemIcon>
                <AssignmentIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="UnBlock Card" />
            </ListItemButton>
            </BootstrapTooltip>


            <BootstrapTooltip title="Prepaid Card Request" 
     placement="right-start" arrow>

            <ListItemButton
              selected={location.pathname === '/card-service'}
              // sx={{ pl: 4 }}
              sx={{pl:3, }}
              // onClick={handleAccountOfficerClick}
              onClick={() => {
                // navigate('/account-creation');
                handleOptionClick('prepaid-card-request');
              }}
            >
              <ListItemIcon>
                <AssignmentIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="Prepaid Card Request" />
            </ListItemButton>
            </BootstrapTooltip>



            <BootstrapTooltip title="View and generate your card statement" 
     placement="right-start" arrow>

            <ListItemButton
              selected={location.pathname === '/card-service'}
              // sx={{ pl: 4 }}
              sx={{pl:3, }}
              // onClick={handleAccountOfficerClick}
              onClick={() => {
                // navigate('/account-creation');
                handleOptionClick('card-statement');
              }}
            >
              <ListItemIcon>
                <AssignmentIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="Card Statement" />
            </ListItemButton>
            </BootstrapTooltip>




          </List>
        </Collapse>



          {/* =======================INVESTMENT SERVICE =================================================== */}
            {/* Investment Service  */}
            <ListItemButton
          selected={location.pathname.includes('/transfer')}
          onClick={handleClick7}
          
          sx={{ pl: 1,   mt: 1, }}>
          <ListItemIcon>
            <InvestmentLogo sx={{color: "#B5AFAF"}} />
          </ListItemIcon>
          <ListItemText primary="Investment" />
          {open7 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>

        <Collapse in={open7} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              selected={location.pathname === '/account-creation'}
              // sx={{ pl: 4, borderLeft: '2px solid red' }}
              sx={{pl:3, }}
              onClick={() => {
                // navigate('/account-creation');
                handleOptionClick('account-creation');
              }}
              
            >
              <ListItemIcon>
                <CreateIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="Transfer" />
            </ListItemButton>

            <ListItemButton
              selected={location.pathname === '/account-officer'}
              // sx={{ pl: 4 }}
              sx={{pl:3, }}
              // onClick={handleAccountOfficerClick}
              onClick={() => {
                // navigate('/account-creation');
                handleOptionClick('account-officer');
              }}
            >
              <ListItemIcon>
                <AssignmentIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="Account Officer Details" />
            </ListItemButton>

          </List>
        </Collapse>



          {/* =======================LOAN SERVICE =================================================== */}
            {/* Loan Service  */}
            <ListItemButton
          selected={location.pathname.includes('/transfer')}
          onClick={handleClick8}
          
          sx={{ pl: 1,   mt: 1, }}>
          <ListItemIcon>
            <LoanLogo sx={{color: "#B5AFAF"}} />
          </ListItemIcon>
          <ListItemText primary="Loan Service" />
          {open8 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>

        <Collapse in={open8} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              selected={location.pathname === '/account-creation'}
              // sx={{ pl: 4, borderLeft: '2px solid red' }}
              sx={{pl:3, }}
              onClick={() => {
                // navigate('/account-creation');
                handleOptionClick('account-creation');
              }}
              
            >
              <ListItemIcon>
                <CreateIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="Transfer" />
            </ListItemButton>

            <ListItemButton
              selected={location.pathname === '/account-officer'}
              // sx={{ pl: 4 }}
              sx={{pl:3, }}
              // onClick={handleAccountOfficerClick}
              onClick={() => {
                // navigate('/account-creation');
                handleOptionClick('account-officer');
              }}
            >
              <ListItemIcon>
                <AssignmentIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="Account Officer Details" />
            </ListItemButton>

          </List>
        </Collapse>



          {/* =======================OTHER SERVICE =================================================== */}
            {/* Other Service  */}
            <ListItemButton
          selected={location.pathname.includes('/transfer')}
          onClick={handleClick9}
          
          sx={{ pl: 1,   mt: 1,}}>
          <ListItemIcon>
            <OtherLogo sx={{color: "#B5AFAF"}} />
          </ListItemIcon>
          <ListItemText primary="Other Service" />
          {open9 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>

        <Collapse in={open9} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              selected={location.pathname === '/account-creation'}
              // sx={{ pl: 4, borderLeft: '2px solid red' }}
              sx={{pl:3, }}
              onClick={() => {
                // navigate('/account-creation');
                handleOptionClick('account-creation');
              }}
              
            >
              <ListItemIcon>
                <CreateIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="Transfer" />
            </ListItemButton>

            <ListItemButton
              selected={location.pathname === '/account-officer'}
              // sx={{ pl: 4 }}
              sx={{pl:3, }}
              // onClick={handleAccountOfficerClick}
              onClick={() => {
                // navigate('/account-creation');
                handleOptionClick('account-officer');
              }}
            >
              <ListItemIcon>
                <AssignmentIcon sx={{color: "#B5AFAF"}} />
              </ListItemIcon>
              <ListItemText primary="Account Officer Details" />
            </ListItemButton>

          </List>
        </Collapse>



          {/* LOGOUT  */}
        <ListItemButton
          selected={location.pathname.includes('#')}
          
          
          sx={{ pl: 0.5,  mt: 2,
          
          "&:hover": {
            backgroundColor: "#9C8AD0",
            borderRadius: 10,
            borderLeft: "2px solid #9747FF"
          },

          "&:active": {
            backgroundColor: "#9747FF",
            borderLeft: "2px solid #9747FF"
          },
          
          }}>
          <ListItemIcon>
            <LogoutLogo sx={{color: "#B5AFAF"}} />
          </ListItemIcon>
          <ListItemText primary="Log out" />
        
        </ListItemButton>




          {/* NEED HELP  */}
          <ListItemButton
          selected={location.pathname.includes('#')}
          
          
          sx={{ pl: 1,   mt: 1,
          
          "&:hover": {
            backgroundColor: "#9C8AD0",
            borderRadius: 10,
            borderLeft: "2px solid #9747FF"
          },

          "&:active": {
            backgroundColor: "#9747FF",
            borderLeft: "2px solid #9747FF"
          },
          
          }}>
          <ListItemIcon>
            <NeedHelpLogo sx={{color: "#B5AFAF"}} />
          </ListItemIcon>
          <ListItemText primary="Need Help" />
        
        </ListItemButton>


         {/* CALL CENTER  */}
         <ListItemButton
          selected={location.pathname.includes('#')}
          
          
          sx={{ pl: 1,   mt: 1,
          
          "&:hover": {
            backgroundColor: "#9C8AD0",
            borderRadius: 10,
            borderLeft: "2px solid #9747FF"
          },

          "&:active": {
            backgroundColor: "#9747FF",
            borderLeft: "2px solid #9747FF"
          },
          
          }}>
          <ListItemIcon>
            <CallLogo sx={{color: "#B5AFAF"}} />
          </ListItemIcon>
          <ListItemText primary="Call Center" />
        
        </ListItemButton>


      </List>
      </Drawer>


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

  
     </> 
  );
};

export default LeftSideMenu;
