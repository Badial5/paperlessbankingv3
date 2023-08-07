import * as Yup from 'yup';
// import "yup-phone-lite";

import axios from 'axios';

import PhoneTextField from "mui-phone-textfield";

import { useState } from 'react';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment, Alert, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField } from '../../../components/hook-form';
import { NameInputLabel } from '../../../components/hook-form/NameLabel';
import Button from '../../../theme/overrides/Button';





// ----------------------------------------------------------------------

const baseUrl = "https://banking-api.inlakssolutions.com/accounts/v1/signup/"


export default function RegisterForm() {
  const { register } = useAuth();

  const isMountedRef = useIsMountedRef();

  const [showPassword, setShowPassword] = useState(false);



  const [isoValue, setIsoValue] = useState(""); // The input value.
  const [isocountry, setIsoCountry] = useState("GH"); // The selected country.
  const [phoneNumber, setPhoneNumber] = useState(); // The PhoneNumber instance.


  // REGEX FOR PHONE NUMBER 
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/




  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    // phoneNumber: Yup.string().required('Password is required').matches(phoneRegExp, 'Phone number is not valid')
    phoneNumber: Yup.string().required('Password is required').matches(phoneRegExp, 'Phone number is not valid')


    // phoneNumber: Yup.string().phone("US", "Please enter a valid phone number").required("A phone number is required")

   
  });

  const defaultValues = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password1: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
    mode: "onChange"
  });



  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {

    try {
      const response = await axios.post(baseUrl, data.email, data.password, data.firstName, data.lastName, data.phoneNumber)
      reset();

      console.log("Form Data Values: ", response)


    // try {
    //   await register(data.email, data.password, data.firstName, data.lastName, data.phoneNumber);
    } catch (error) {
      console.error(error);
      // reset();
      if (isMountedRef.current) {
        setError('afterSubmit', { ...error, message: error.message });
      }
    }
  };



  const onChangeIso = ({ formattedValue, phoneNumber: {number} }) => {
    setIsoValue(formattedValue);
   //  setPhoneNumber(phoneNumber);
   setPhoneNumber(number);
   //  setValue("phone_number", number)
 
    console.log("PhoneNumber Value Inside: ", phoneNumber.number)
 
   //  const { number } = phoneNumber;
 
    console.log("Destructure Phone Number: ", number)
    console.log("ISO VALUE: ", isoValue)
    console.log("Value for Phone: ", phone)
 };


 const onCountrySelect = ({ country, formattedValue, phoneNumber }) => {
  setIsoValue(formattedValue);
  setIsoCountry(country);
  setPhoneNumber(phoneNumber);
};

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      {/* <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <NameInputLabel htmlFor='first_name'>First Name</NameInputLabel>
          <RHFTextField name="firstName"  id="first_name" />
          <RHFTextField name="lastName" label="Last name" />
        </Stack>

        <RHFTextField name="email" label="Email address" />

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Register
        </LoadingButton>
      </Stack> */}
     
     <Grid container spacing={1} >

      <Grid item xs={6}>

        <NameInputLabel htmlFor='first_name'>First Name</NameInputLabel>
        
        <RHFTextField name="first_name" id="first_name" 
        {...register("first_name")} />
        
      </Grid>


      <Grid item xs={6}>

      <NameInputLabel htmlFor='last_name' {...register("last_name")} >Last Name</NameInputLabel>

      <RHFTextField name="lastName" id="last_name" />

      </Grid>


      <Grid item xs={12}>

      <NameInputLabel htmlFor='phone_number'>Phone Number</NameInputLabel>

      <RHFTextField name="phoneNumber" id="phone_number" {...register("phone_number")} />

      </Grid>

      {/* <Grid item={12}>

      <PhoneTextField 
   placeholder="(+233) 000 000 000"
  // error={Boolean(setIsoValue && phoneNumber?.country !== country)} 
  value={isoValue}
  country={isocountry}
  onCountrySelect={onCountrySelect}
  
  onChange={(event) => {
    // handleInputChange(event);
    // isocountry(event)
   
    onChangeIso(event)
    handleFieldChange(event); 
    setFormComplete(prevState => ({
      phone_number: event.target.value !== '',
      ...prevState,
    }));
  }}

  // onChange={(event) => {
   
  //   // handleFieldChange(event);
  //   handleInputChangePhone(event)
  //   setFormComplete(prevState => ({
  //     phone_number: event.target.value,
  //     ...prevState,
  //   }));
  // }}
  
  // setFormComplete(prevState => ({
   
  //   last_name: event.target.value,
  //   ...prevState,
  // }));

  // onChange={(event) => {
  //   handleInputChange(event);
  //   setFormComplete(prevState => ({
  //     first_name: event.target.value,
  //     ...prevState,
  //   }));
  // }}

// inputRef={register({ required: true, maxLength: 13, minLength: 12 })} 
// onCountryChange={handleCountrySelection} 

//   {...register("phone_number" ,{required: {
//     value: true,
//     message: "Phone number is required"
//   },

//   maxLength: {
//     value: 13,
//     message: "The length must be 13"
//   }, 

//   minLength: {
//     value: 12,
//     message: "You’ve entered an invalid phone number"
//   }

// })}


variant="outlined" fullWidth
    sx={{  
      
      padding: "5px 16px",
      "& .MuiOutlinedInput-root.Mui-focused": {
        "& > fieldset": {
  borderColor: "#7833EE"
        }
      },  [`& fieldset`]:{
        borderRadius: "6px" }
    }}
    InputProps={{
      
      style: {
        height: "2rem",
        fontSize: 12,
        // fontFamily: 'Helvetica Neue'
        fontFamily: 'Poppins'
},
}}



// placeholder='(+233) 000 000 000'
// onChange={handleInputChange}

/>

      </Grid> */}


      <Grid item xs={12}>

      <NameInputLabel htmlFor='email_address' {...register("email")}>Email Address</NameInputLabel>

      <RHFTextField name="email" id="email_address" />

      </Grid>


      <Grid item xs={12}>

      <NameInputLabel htmlFor='password'>Password</NameInputLabel>

      <RHFTextField name="password" id="password" {...register("password1")} />

      </Grid>



      <Grid item xs={12}>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Register
        </LoadingButton>

      </Grid>







      

     </Grid>
    </FormProvider>
  );
}
