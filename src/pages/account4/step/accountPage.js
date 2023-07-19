import React, {useState} from 'react'

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


const AccountPage2 = ({formData, handleChange, handleNext, handleBack, register, isValid, errors}, props) => {

  //Phone Input
  const { value, defaultCountry, onChange, classes } = props;

   //Destrucitng form values
   const { first_name, last_name, title, phone_number, id_type, id_number, account_type, email } = formData


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


      <DashboardTextField select 
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

      </DashboardTextField>

      {(errors.title?.message) && (
    <DashboardErrorHelperText>
      {errors.title?.message}
    </DashboardErrorHelperText>
  )}

      </Grid>

      {/* First Name */}
      <Grid item xs={5}>

        <DashboardInputLabel htmlFor='first_name'>
          First Name
        </DashboardInputLabel>

        <DashboardTextField  type="text"
            id="first_name"
            fullWidth
            error={Boolean(errors.first_name)}
            variant="outlined"  
            {...register("first_name", {
              required: {
                value: true,
                message: "First name is required"
              }
            })}

            placeholder='eg. Joseph'
            value={first_name}
            onChange={handleChange('first_name')}
            >

        </DashboardTextField>

        { (errors.first_name?.message  ) &&
            <DashboardErrorHelperText>
              {errors.first_name?.message}
            </DashboardErrorHelperText> 
          }

      </Grid>


          {/* Last Name */}
      <Grid item xs={5} >
        
      <DashboardInputLabel htmlFor='last_name'>
          Last Name
        </DashboardInputLabel>

        <DashboardTextField  type="text"
            id="lastt_name"
            fullWidth
            error={Boolean(errors.last_name)}
            variant="outlined"  
            {...register("last_name", {
              required: {
                value: true,
                message: "Last name is required"
              }
            })}

            placeholder='eg. Smith'
            value={last_name}
            onChange={handleChange('last_name')}
            >

        </DashboardTextField>

        { (errors.last_name?.message  ) &&
            <DashboardErrorHelperText>
              {errors.last_name?.message}
            </DashboardErrorHelperText> 
          }


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
<Grid item xs={8}>

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



{/* Email */}
<Grid item xs={5}>

  <DashboardInputLabel htmlFor='email'>
    Email
  </DashboardInputLabel>

  <DashboardTextField  type="text"
      id="email"
      fullWidth
      error={Boolean(errors.email)}
      variant="outlined"  
      // {...register("email", {
      //   required: {
      //     value: true,
      //     message: "Email is required"
      //   }
      // })}

      {...register("email", {required: {
        value: true,
        message: "required", 
        
        }, 
        pattern: {
        // value: /^\S+@\S+$/i,
        // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        
        value: /^[^\d][A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
        message: "Please enter a valid email address"
        }
        })}

      placeholder='eg. someone@domain.com'
      value={email}
      onChange={handleChange('email')}
      >

  </DashboardTextField>

  { (errors.email?.message  ) &&
      <DashboardErrorHelperText>
        {errors.email?.message}
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
