import React, {useState} from 'react'
import { MuiFileInput } from 'mui-file-input'

import {
  Typography,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Paper,
  Box,
  Avatar,
} from "@mui/material";
import { DashboardErrorHelperText, DashboardInputLabel, DashboardTextField, GlobalErrorHelperText, GlobalFormLabel, GlobalInputLabel, GlobalPageHeader, GlobalReactPhone, GlobalSubPageHeader, GlobalTextField } from '../../../assets/GlobalStyled/Globalstyles';

// const titles = ["Mr", "Mrs", "Miss", ];

const titles = [
  {value: "", label: "----------Select-----------"},
  { value: "Mr", label: "Mr" },
  { value: "Mrs", label: "Mrs" },
  { value: "Miss", label: "Miss" },

]



// const idTypes = ["Passport", "Ghana Card", "Voter's Card", "DVLA" ];


const idTypes = [
  {value: "", label: "----------Select--------------"},
  { value: "passport", label: "Passport" },
  { value: "ghanacard", label: "Ghana Card" },
  { value: "votercard", label: "Voter's Card" },
  { value: "dvla", label: "DVLA" },

]


const accountTypes = [
  {value: "", label: "----------Select--------------"},
  { value: "saving", label: "Saving" },
  { value: "current", label: "Current" },
  { value: "business", label: "Business" },
  // { value: "dvla", label: "DVLA" },

]


//STYLES FOR THE PHONE INPUT
const styles = {
  width: '100%',
  fontFamily: "Poppins",
  fontSize: 12,
  height: "1.8rem",
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": {
      borderColor: "#7833EE"
    }
  },
  "& fieldset": {
    borderRadius: "6px"
  },
  "& .MuiInputBase-root": {
    height: "0.6rem"
  }
};


const ConfirmPage2 = ({formData, handleChange, handleNext, handleBack, register, isValid, errors, upload, submitForm, }, props) => {

  //Phone Input
  const { value, defaultCountry, onChange, classes } = props;

   //Destrucitng form values
    //Destrucitng form values
    const { 
      full_name,
      title, phone_number, 
      id_type, id_number, account_type, email_address, selfie_image,  } = formData

  const onSubmit = (data) => {
    console.log(data)
   }

   const [salutation, setSalutation] = useState('');

  return (
    <Box>

<GlobalPageHeader sx={{mb: 5}}>
          Confirm Your Details
</GlobalPageHeader>

  {/* <GlobalSubPageHeader>
  Open Your Account Today: Quick and Easy Steps to Get Started!
  </GlobalSubPageHeader> */}

<Grid container spacing={1} style={{paddingLeft: 10, paddingRight: 10,  rowGap: 10, marginBottom: 2}}
      >

       



<Grid item xs={12} >
         {/* <Grid item xs={12} sx={{display: 'flex', justifyContent: "center"}}>

      {/* <Avatar  src={upload}  sx={{ width: 100, height: 56 }}
       /> */}

      <Avatar 

      src={selfie_image}
      alt='Preview' sx={{ mr: 'auto', ml: "auto",  width: 60, height: 60}}  />

      </Grid>










        
        {/* Title  */}
      <Grid item xs={2}>

      <DashboardInputLabel htmlFor='title'>
        Title
      </DashboardInputLabel>


      <GlobalTextField select 
      id='title'
      fullWidth
      variant="outlined"

     

      value={title}
    
      
      />

       

    

      </Grid>


     

      {/* +++++++++++++++++ Full Name +++++++++++++++++++++ */}
      <Grid item xs={6}>

        <DashboardInputLabel htmlFor='first_name'>
          Full Name
        </DashboardInputLabel>

        <DashboardTextField  type="text"
            id="full_name"
            fullWidth
           
            

            placeholder='eg. Joseph Smith'
            value={full_name}
            // value={firstName}
           
            />

    

      

      </Grid>




       {/* Phone number */}
<Grid item xs={4} >
  
  <DashboardInputLabel htmlFor='phone_number'>
      Phone Number
    </DashboardInputLabel>
  
    <DashboardTextField  type="text"
        id="phone_number"
        fullWidth
        error={Boolean(errors.phone_number)}
        variant="outlined"  
        
  
        placeholder='+233 500000000'
        value={phone_number}
       
       />
  
   
  
  
  
  
  </Grid>


   {/* Account Type  */}
<Grid item xs={3}>

<DashboardInputLabel htmlFor='account_type'>
  Account Type
</DashboardInputLabel>


<DashboardTextField select 
id='account_type'
fullWidth




value={account_type}


/>
  

 


</Grid>





{/* ID Type  */}
<Grid item xs={4}>

<DashboardInputLabel htmlFor='title'>
  ID Type
</DashboardInputLabel>


<DashboardTextField select 
id='id_type'
fullWidth

value={id_type}

placeholder="account"
/>


</Grid>




       {/* ID Number */}
<Grid item xs={5}>

  <DashboardInputLabel htmlFor='id_number'>
    ID Number
  </DashboardInputLabel>

  <DashboardTextField  type="text"
      id="id_number"
      fullWidth
      value={id_number}
     
      />



</Grid>




{/* Email */}
<Grid item xs={6}>

  <DashboardInputLabel htmlFor='email'>
    Email
  </DashboardInputLabel>

  <DashboardTextField  type="text"
      id="email"
      fullWidth
      error={Boolean(errors.email)}
      variant="outlined"  

    

      placeholder='eg. someone@domain.com'
      value={email_address}
     
      />


  

</Grid>





{/* Upload Session */}
{/* <Grid item xs={6}>

  <DashboardInputLabel htmlFor='selfie_image'>
    Upload
  </DashboardInputLabel>

  <MuiFileInput 
      id="selfie_image"
      fullWidth
      // inputProps={{ accept: '.png, .jpeg' }}
      error={Boolean(errors.selfie_image)}
      variant="outlined"  
    

      sx={{
        fontFamily: 'Poppins',
        fontSize: 12,
        '& .MuiOutlinedInput-root.Mui-focused': {
          '& > fieldset': {
            borderColor: "#4991FF",
          },
        },
        '& .MuiInputBase-root': {
          height: '2rem',
          fontSize: "0.7rem",
          "& input::placeholder": {
            fontSize: 12,
          },
        },
        '& fieldset': {
          borderRadius: '6px',
        },
        
      }}

      // placeholder='XXXXX - XXXXX'
      // value={selfie_image}
      value={selfie_image}
      // onChange={handleImageChange('selfie_image')}
    
      />

  


</Grid> */}


   


 
      </Grid>





      </Box>
  )
}

export default ConfirmPage2
