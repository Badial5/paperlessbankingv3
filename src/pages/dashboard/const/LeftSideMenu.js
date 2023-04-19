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
import { AppBar, Box, ListItemButton, Stack, Toolbar, Typography } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

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



import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';

import ClipLoader from 'react-spinners/ClipLoader';


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
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);

  const [selectedOption, setSelectedOption] = useState('default');
  const [borderStyle, setBorderStyle] = useState("")





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
    <Box style={{width: "20vw", fontSize: 10}}>
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
          borderRadius: 1, color: "#fff",
          
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
          <ListItemText primary="Dashboard" />
        </ListItemButton>


          {/* Enquiry tab  */}

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
          
          sx={{ pl: 1,   mt: 1, }}>
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




        
{/* =======================REQUEST SERVICE =================================================== */}
            {/* Request Service  */}
            <ListItemButton
          selected={location.pathname.includes('/transfer')}
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
          selected={location.pathname.includes('/transfer')}
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


      
    </Box>
  );
};

export default LeftSideMenu;
