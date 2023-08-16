import { useState } from 'react';
import { AppBar, Box, Button, List, ListItem, ListItemIcon, ListItemText, Paper, Toolbar, Typography } from '@mui/material';
import { Dashboard, ExpandLess, ExpandMore, Info } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


//Alice Carousel
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./asset/style/alice.css"
// import 'react-alice-carousel/lib/alice-carousel.css';




import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import {ReactComponent as PictureFrame} from "../assets/Picture.svg"

import {ReactComponent as DashboardLogo} from "../assets/dashboard.svg"


//MUI COMPONENTS
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useForm } from 'react-hook-form';
import axios from "axios"

// import { Link as RouterLink, redirect, useNavigate } from 'react-router-dom';
// import { useState } from 'react';

import Image1 from "./asset/images/Image1.jpg"
import Image2 from "./asset/images/Image2.jpg"
import Image3 from "./asset/images/Image3.jpg"
import Image4 from "./asset/images/Image4.jpg"
import Image5 from "./asset/images/Image5.jpg"
import Image6 from "./asset/images/Image6.jpg"
import Image7 from "./asset/images/Image7.jpeg"




import AccountMenu from './data/ProfileMenuIcon';


// const baseUrl = "/accounts/v1/logout/"
const baseUrl = "https://api.inlakssolutions.com/accounts/v1/logout/"


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


// Alice Carousel 

const handleDragStart = (e) => e.preventDefault();

const AliceItems = [
  <div className="item" data-value="1">
    <img src={Image1} style={{ width: "100%", height: "100%" }} />
  
  </div>,

  // <div className="item" data-value="2">
  //   <img src={Image2} style={{ width: "100%", height: "100%" }} />
  // </div>,

  // <div className="item" data-value="3">
  //   <img src={Image3} style={{ width: "100%", height: "100%" }} />
  // </div>,

  // <div className="item" data-value="4">
  //   <img src={Image4} style={{ width: "100%", height: "100%" }} />
  //   </div>,

<div className="item" data-value="5">
<img src={Image5} style={{ width: "100%", height: "100%" }} />
</div>

//  <div className="item" data-value="6">
//     <img src={Image6} style={{ width: "100%", height: "100%" }}  />
//     </div>, 

//  <div className="item" data-value="7">
// <img src={Image7} style={{ width: "100%", height: "100%" }} />
// </div>
  
];




const RightSideMenu = ({onOptionSelect}) => {

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



  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState('default');

  const [error, setError] = useState(null)
  const [logoutStatus, setLogoutStatus] = useState('')




  const handleClick = (page) => {
    navigate(`/${page}`);
  };

  const handleOptionClick = (option) => {
    sessionStorage.setItem('selectedOption', option);
    onOptionSelect(option);

    setSelectedOption(option);
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

  return (
    <Box sx={{ width: 240, background: "#F4F7FF", fontSize: 10 }}>

      {/* <AppBar position="static" 
      sx={{background: "#FBFCFC", color: "#000", 
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: 1,}}>
        <Toolbar>
    <AccountMenu handleClick={handleLogOut} />

        </Toolbar>
      </AppBar> */}

      <Toolbar></Toolbar>


      <List>
        <ListItem Button  onClick={() => {
            // navigate('/account-creation');
            handleOptionClick('default');
          }} 
          sx={{
            // background: "#9747FF",
            // background: "#00BFFF",
            background: "#4991ff",
          // borderLeft: "5px solid #1F8EA7",
          // lineHeight: "1px",
          borderRadius: 1, color: "#fff",
          fontSize: 12,
          "&.MuiButtonBase-root:hover": {
            // bgcolor: "red"
            // background: "#9747FF",
            // background: "#00BFFF",
            background:"#4166F5",
            color: "#ffffff"
          },  }}>
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
      height: "2rem", borderRadius: 4}}>
          <ListItemIcon>
           
          </ListItemIcon>
          <ListItemText primary="Bill Payments" />
        </ListItem>

        <ListItem Button style={{backgroundColor: "#fff", fontSize: "0.7rem", marginBottom: 10,
      height: "2rem", borderRadius: 4}}>
          <ListItemIcon>
            
          </ListItemIcon>
          <ListItemText primary="Manage Beneficiary" />
        </ListItem>

        <ListItem Button style={{backgroundColor: "#fff", fontSize: "0.7rem", marginBottom: 10,
      height: "2rem", borderRadius: 4}}>
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
          
        {/* <PictureFrame width={"20vw"} height={"100%"}/> */}
<Paper sx={{width: "100%", height: "100%", }}>
        <AliceCarousel style={{width: "100px", height: '100px'}} className="item"
        autoPlay
        // autoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={3000}
        animationDuration={3000}
        animationType="slide"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={AliceItems}
        
        // activeIndex={4}
        

    />

</Paper>

        </Box>



        <ListItem Button  onClick={() => {
            // navigate('/account-creation');
            handleOptionClick('default');
          }} 
        sx={{
          // background: "#9747FF", 
          // background: "#00BFFF",
          background: "#4991ff",
          color: "#fff", mt: 1, height: "2rem", 
        borderRadius: 1}}>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Your Acount Officer" />
        </ListItem>

        <Box style={{fontSize: 12, marginTop: 20, fontFamily: "Poppins", }}>
          <Typography style={{}}>Name:  <span style={{marginLeft: 10, color: "#4991ff", fontSize: 12, my: "auto"  }}>Joseph Smith</span> </Typography> 
          <Typography>Email: <span style={{marginLeft: 10, color: "#4991ff", fontSize: 12 }}>josephsmith@domain.com</span> </Typography>
          <Typography>Phone: <span style={{marginLeft: 10, color: "#4991ff", fontSize: 12 }}>+233557000000</span> </Typography>
        </Box>
        
        
      </List>
    </Box>
  );
};

export default RightSideMenu;
