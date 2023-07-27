import React from 'react'


import { DashboardPageBackground, DashboardPaper, GlobalPageHeader, GlobalSubPageHeader } from '../../assets/GlobalStyled/Globalstyles'
import { Avatar, Box } from '@mui/material'


import ContactMailIcon from '@mui/icons-material/ContactMail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';


import PP1 from "./const/profile_pics/Campbell.jpg"
import PP2 from "./const/profile_pics/Joseph.jpg"
import PP3 from "./const/profile_pics/Michaella.jpg"

const AccountOfficer = () => {
  
  const emailLink = "mailto:YourAccountOfficer@inlaks.com";
  const phoneNumberLink = "tel:+23355555555000";

  return (
    <DashboardPageBackground>
      <DashboardPaper>

        <Box>
          <GlobalPageHeader sx={{fontSize: 22}}>Your Account Officer</GlobalPageHeader>
          {/* <GlobalSubPageHeader>"Empowering Your Financial Dreams 💼🌟"</GlobalSubPageHeader> */}

          <GlobalSubPageHeader>"Unlocking a World of Financial Possibilities with Your Account Officer! 👀💼"</GlobalSubPageHeader>
        </Box>

      <Box sx={{display: "flex", justifyContent: "center"}}>
          <Avatar src={PP2} 
          sx={{ width: 240, height: 240 }}
          />
      </Box>

      <Box sx={{display: "flex", justifyContent: "center"}}>

        <Box sx={{width: "50%", display: "flex", justifyContent: "space-between"}}>

        <a href={emailLink}>
          <ContactMailIcon 
          // fontSize='large'
           sx={{color: "#9747FF", fontSize: 50 }}  />
        </a>

        <a href={phoneNumberLink}>
          <ContactPhoneIcon 
           sx={{color: "#9747FF", fontSize: 50 }}
          />
          </a>

        </Box>

      </Box>
        
       
      </DashboardPaper>
    </DashboardPageBackground>
  )
}

export default AccountOfficer