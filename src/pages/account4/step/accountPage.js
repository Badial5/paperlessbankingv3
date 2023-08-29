import React, {useEffect, useState} from 'react'

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
} from "@mui/material";
import { DashboardErrorHelperText, DashboardInputLabel, DashboardTextField, GlobalErrorHelperText, GlobalFormLabel, GlobalInputLabel, GlobalPageHeader, GlobalReactPhone, GlobalSubPageHeader, GlobalTextField } from '../../../assets/GlobalStyled/Globalstyles';

// const titles = ["Mr", "Mrs", "Miss", ];

const titles = [
  {value: "", label: "----------Select-----------"},
  { value: "Mr.", label: "Mr." },
  { value: "Mrs", label: "Mrs" },
  { value: "Miss", label: "Miss" },

]



// const idTypes = ["Passport", "Ghana Card", "Voter's Card", "DVLA" ];


const idTypes = [
  {value: "", label: "----------Select--------------"},
  { value: "Passport", label: "Passport" },
  { value: "Ghanacard", label: "Ghana Card" },
  { value: "Votercard", label: "Voter's Card" },
  { value: "Dvla", label: "DVLA" },

]


const accountTypes = [
  {value: "", label: "----------Select--------------"},
  { value: "Saving", label: "Saving" },
  { value: "Current Account", label: "Current" },
  { value: "Business", label: "Business" },
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
      borderColor: "#4991FF"
    }
  },
  "& fieldset": {
    borderRadius: "6px"
  },
  "& .MuiInputBase-root": {
    height: "0.6rem"
  }
};


const AccountPage2 = ({formData, handleChange,  handleNext, handleBack, register, isValid, errors, setValue, watch, unregister, 
  handleImageChange 
}, props) => {

  //Phone Input
  const { value, defaultCountry, onChange, classes, } = props;

   //Destrucitng form values
   const { 
    full_name,
    title, phone_number, 
    id_type, id_number, account_type, email_address, selfie_image,  } = formData


    const [file, setFile] = useState(null)

  // const handleImageChange2 = (newFile) => {
  //   setFile(newFile)
  // }




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 

 

    console.log( "Selfie Image: ", selfie_image)



  const onSubmit = (data) => {
    console.log(data)
   }

   const [salutation, setSalutation] = useState('');

  return (
    <Box>

<GlobalPageHeader>
          Account Creation
</GlobalPageHeader>

  <GlobalSubPageHeader>
  Open Your Account Today: Quick and Easy Steps to Get Started!
  </GlobalSubPageHeader>

    <Grid container spacing={1} style={{paddingLeft: 10, paddingRight: 10,  rowGap: 10, marginBottom: 2}}
      >

       


        
        {/* Title  */}
      <Grid item xs={2}>

      <DashboardInputLabel htmlFor='title'>
        Title
      </DashboardInputLabel>


      <GlobalTextField select 
      id='title'
      fullWidth
      error={Boolean(errors.title)}
      variant="outlined"

      {...register("title", {
        required: {
          value: true,
          message: "required"
        }
      })}

      value={title}
      onChange={handleChange('title')}
      
      >

        {titles.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}

      </GlobalTextField>

      {(errors.title?.message) && (
    <DashboardErrorHelperText>
      {errors.title?.message}
    </DashboardErrorHelperText>
  )}

      </Grid>


     

      {/* +++++++++++++++++ Full Name +++++++++++++++++++++ */}
      <Grid item xs={6}>

        <DashboardInputLabel htmlFor='first_name'>
          Full Name
        </DashboardInputLabel>

        <DashboardTextField  type="text"
            id="full_name"
            fullWidth
            error={Boolean(errors.full_name)}
           
            {...register("full_name", 
            {
              required: {
                value: true,
                message: "Full name is required"
              }
            }
            )}

            placeholder='eg. Joseph Smith'
            value={full_name}
            // value={firstName}
            onChange={handleChange('full_name')}
            >

        </DashboardTextField>

        { (errors.full_name?.message  ) &&
            <DashboardErrorHelperText>
              {errors.full_name?.message}
            </DashboardErrorHelperText> 
          }

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
        {...register("phone_number", {
          required: {
            value: true,
            message: "Phone Number is required"
          }
        })}
  
        placeholder='+233 500000000'
        value={phone_number}
        onChange={handleChange('phone_number')}
        >
  
    </DashboardTextField>
  
    { (errors.phone_number?.message  ) &&
        <DashboardErrorHelperText>
          {errors.phone_number?.message}
        </DashboardErrorHelperText> 
      }
  
  
  </Grid>


   {/* Account Type  */}
<Grid item xs={3}>

<DashboardInputLabel htmlFor='account_type'>
  Account Type
</DashboardInputLabel>


<DashboardTextField select 
id='account_type'
fullWidth
error={Boolean(errors.account_type)}
variant="outlined"

{...register("account_type", {
  required: {
    value: true,
    message: "required"
  }
})}

value={account_type}
onChange={handleChange('account_type')}

>
  

  {accountTypes.map((option) => (
  <MenuItem key={option.value} value={option.value}>
    {option.label}
  </MenuItem>
))}

</DashboardTextField>

{(errors.account_type?.message) && (
<DashboardErrorHelperText>
{errors.account_type?.message}
</DashboardErrorHelperText>
)}

</Grid>





{/* ID Type  */}
<Grid item xs={4}>

<DashboardInputLabel htmlFor='title'>
  ID Type
</DashboardInputLabel>


<DashboardTextField select 
id='id_type'
fullWidth
error={Boolean(errors.id_type)}
variant="outlined"

{...register("id_type", {
  required: {
    value: true,
    message: "required"
  }
})}

value={id_type}
onChange={handleChange('id_type')}
placeholder="account"
>

  {idTypes.map((option) => (
  <MenuItem key={option.value} value={option.value}>
    {option.label}
  </MenuItem>
))}

</DashboardTextField>

{(errors.id_type?.message) && (
<DashboardErrorHelperText>
{errors.id_type?.message}
</DashboardErrorHelperText>
)}

</Grid>




       {/* ID Number */}
<Grid item xs={5}>

  <DashboardInputLabel htmlFor='id_number'>
    ID Number
  </DashboardInputLabel>

  <DashboardTextField  type="text"
      id="id_number"
      fullWidth
      error={Boolean(errors.id_number)}
      variant="outlined"  
      {...register("id_number", {
        required: {
          value: true,
          message: "ID Number is required"
        }
      })}

      placeholder='XXXXX - XXXXX'
      value={id_number}
      onChange={handleChange('id_number')}
      >

  </DashboardTextField>

  { (errors.id_number?.message  ) &&
      <DashboardErrorHelperText>
        {errors.id_number?.message}
      </DashboardErrorHelperText> 
    }

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

      {...register("email_address", {required: {
        value: true,
        message: "required", 
        
        }, 
        pattern: {
        value: /^[^\d][A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
        message: "Please enter a valid email address"

        }
        })}

      placeholder='eg. someone@domain.com'
      value={email_address}
      onChange={handleChange('email_address')}
      >

  </DashboardTextField>

  { (errors.email_address?.message  ) &&
      <DashboardErrorHelperText>
        {errors.email_address?.message}
      </DashboardErrorHelperText> 
    }

</Grid>





{/* Upload Session */}
<Grid item xs={6}>

  <DashboardInputLabel htmlFor='selfie_image'>
    Upload
  </DashboardInputLabel>

  <MuiFileInput 
      id="selfie_image"
      fullWidth
      // inputProps={{ accept: '.png, .jpeg' }}
      error={Boolean(errors.selfie_image)}
      variant="outlined"  
      {...register("selfie_image", {
        required: {
          value: false,
          // message: "required"
        }
      })}

      getInputText={(value) => value ? 'Thanks!' : 'No File'}

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
      onChange={handleImageChange}
      />

  

  { (errors.id_number?.message  ) &&
      <DashboardErrorHelperText>
        {errors.id_number?.message}
      </DashboardErrorHelperText> 
    }

</Grid>


   


 {/* Phone number  */}

 {/* <Grid item xs={4}>
          <GlobalInputLabel htmlFor='phone_number'>Phone Number</GlobalInputLabel>

<GlobalReactPhone 
fullWidth
  component={TextField} 
  id='phone_number'

  {...register("phone_number", {
    required: {
      value: true,
      message: "phone_number is required"
    }, 
  })} 
  value={('phone_number')}
  country={'gh'}
  error={Boolean(errors.phone_number)}
  onChange={onChange}
  enableSearch={true}
  disableSearchIcon={true}
  inputStyle={styles}
  inputProps={{
    maxLength: 16,
    ...register('phone_number') // add register function to input props
  }}

  placeholder='+233 500000000'
/>
{ (errors.phone_number?.message  ) &&
        <GlobalErrorHelperText>{errors.phone_number?.message}</GlobalErrorHelperText> 
}

         
        </Grid> */}




      {/* Close on Grid Container  */}
      </Grid>

      </Box>
  )
}

export default AccountPage2
