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
import { useNavigate, useLocation } from 'react-router-dom';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AppBar, Box, ListItemButton, Toolbar, Typography } from '@mui/material';


import {ReactComponent as DashboardLogo} from "../assets/dashboard.svg"
import {ReactComponent as EnquiryLogo} from "../assets/Enquiry.svg"
import {ReactComponent as AccountLogo} from "../assets/AccountIcon.svg"


const LeftAppBar = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...theme.mixins.toolbar,
}));

const LeftSideMenu = ({onOptionSelect}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [selectedOption, setSelectedOption] = useState('default');
  const [borderStyle, setBorderStyle] = useState("")





  const handleClick = () => {
    setOpen(!open);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };


  // Enquiry 
  const handleAccountBalance = () => {
    navigate('/enquiry-balance');
  };

  const handleAccountStatement = () => {
    navigate('/enquiry-statement');
  };

  const handleAccountOfficerDetails = () => {
    navigate('/enquiry-officer-details');
  };

  const handleExchangeRate = () => {
    navigate('/enquiry-exchange-rate');
  };


  // Account Service 
  const handleAccountCreationClick = () => {
    navigate('/account-creation');
  };

  const handleAccountOfficerClick = () => {
    navigate('/account-officer');
  };

  // const handleOptionClick = (option) => {
  //   onOptionSelect(option);
  // };

  const handleOptionClick = (option) => {
    sessionStorage.setItem('selectedOption', option);
    onOptionSelect(option);

    setSelectedOption(option);
  };


  const selectedOptionStyle = {
    borderLeft: '5px solid red',
    '& .MuiListItemIcon-root': {
      color: '#B5AFAF',
    },
    '&:hover': {
      background: '#9747FF',
      color: '#ffffff',
    },
  };

  console.log("Selected Option: ", selectedOption)

  return (
    <Box style={{width: "20vw"}}>
      <AppBar position="static" sx={{background: "#FBFCFC", color: "#000", borderRadius: 1,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,
          //  color: "#9747FF", 
          color: "#000",
        fontSize: 14, fontFamily: "Poppins",  }}>
            Paperless Banking
          </Typography>
        </Toolbar>
      </AppBar>

      <List>
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
          borderRadius: 1,
          
          "&.MuiButtonBase-root:hover": {
            // bgcolor: "red"
            background: "#9747FF",
            color: "#ffffff"
          }, color: "#fff" }}
        >

          <ListItemIcon>
            {/* <DashboardIcon sx={{color: "#B5AFAF"}} />  */}
            <DashboardLogo />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>


          {/* Enquiry tab  */}

          <ListItemButton
          selected={location.pathname.includes('/enquiry')}
          onClick={handleClick2}
          
          sx={{ pl: 1, borderLeft: '2px solid black' }}>
          <ListItemIcon>
            <EnquiryLogo sx={{color: "#B5AFAF"}} />
          </ListItemIcon>
          <ListItemText primary="Enquiry" />
          {open2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>

        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            <ListItemButton
              selected={location.pathname === '/enquiry-balance'}
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
              <ListItemText primary="Enquiry Balance" />
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

            
          </List>
        </Collapse>
       




          {/* Account Service  */}
        <ListItemButton
          selected={location.pathname.includes('/account')}
          onClick={handleClick}
          
          sx={{ pl: 1, borderLeft: '2px solid black' }}>
          <ListItemIcon>
            <AccountLogo sx={{color: "#B5AFAF"}} />
          </ListItemIcon>
          <ListItemText primary="Account Service" />
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
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
              <ListItemText primary="Account Creation" />
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
      </List>
    </Box>
  );
};

export default LeftSideMenu;
