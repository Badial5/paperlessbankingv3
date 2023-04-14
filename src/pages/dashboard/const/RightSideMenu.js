import { useState } from 'react';
import { AppBar, Box, Button, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { Dashboard, ExpandLess, ExpandMore, Info } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import {ReactComponent as PictureFrame} from "../assets/Picture.svg"

import {ReactComponent as DashboardLogo} from "../assets/dashboard.svg"


//MUI COMPONENTS
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AccountMenu from './data/ProfileMenuIcon';



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

// END OF MUI COMPONENTS =========================================================



const RightSideMenu = ({onOptionSelect}) => {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState('default');

  const handleClick = (page) => {
    navigate(`/${page}`);
  };

  const handleOptionClick = (option) => {
    sessionStorage.setItem('selectedOption', option);
    onOptionSelect(option);

    setSelectedOption(option);
  };

  return (
    <Box sx={{ width: "20vw", background: "#F4F7FF", fontSize: 10,
    height: "100vh" }}>
      <AppBar position="static" 
      sx={{background: "#FBFCFC", color: "#000", 
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: 1,}}>
        <Toolbar>
       

    
    
    <AccountMenu />

    
        </Toolbar>
      </AppBar>
      <List>
        <ListItem Button  onClick={() => {
            // navigate('/account-creation');
            handleOptionClick('default');
          }} 
        sx={{background: "#9747FF", color: "#fff", borderRadius: 1, }}>
          <ListItemIcon>
            <DashboardLogo sx={{color: "#B5AFAF"}} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>


        <ListItem Button sx={{fontSize: 20}}>
          <ListItemIcon>
            {/* <Info sx={{color: "#B5AFAF"}} /> */}
          </ListItemIcon>
          <ListItemText primary="Quick Links" />
        </ListItem>

        <ListItem Button style={{backgroundColor: "#fff", fontSize: "0.7rem", marginBottom: 10,
      height: "2rem", borderRadius: 1}}>
          <ListItemIcon>
           
          </ListItemIcon>
          <ListItemText primary="Bill Payments" />
        </ListItem>

        <ListItem Button style={{backgroundColor: "#fff", fontSize: "0.7rem", marginBottom: 10,
      height: "2rem", borderRadius: 1}}>
          <ListItemIcon>
            
          </ListItemIcon>
          <ListItemText primary="Manage Beneficiary" />
        </ListItem>

        <ListItem Button style={{backgroundColor: "#fff", fontSize: "0.7rem", marginBottom: 10,
      height: "2rem", borderRadius: 1}}>
          <ListItemIcon>
            
          </ListItemIcon>
          <ListItemText primary="Need Help" />
        </ListItem>

        {/* <ListItem>
          <ListItemIcon>
            <PictureFrame width={300} height={100} />
          </ListItemIcon>
          <ListItemText primary="" />
        </ListItem> */}

        <Box style={{width: "20vw", height: 200}}>
        <PictureFrame width={"20vw"} height={"100%"}/>
        </Box>

        <ListItem Button  onClick={() => {
            // navigate('/account-creation');
            handleOptionClick('default');
          }} 
        sx={{background: "#9747FF", color: "#fff", mt: 1, height: "2rem", 
        borderRadius: 1}}>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Your Acount Officer" />
        </ListItem>

        <Box style={{fontSize: 10, }}>
          <Typography>Name: </Typography> 
          <Typography>Email: </Typography>
          <Typography>Phone: </Typography>
        </Box>
        
        
      </List>
    </Box>
  );
};

export default RightSideMenu;
