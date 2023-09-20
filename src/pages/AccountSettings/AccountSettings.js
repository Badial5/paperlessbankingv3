import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import React, { useCallback } from 'react'
import { Card, Grid, Box, Stack, Typography, TextField, Avatar } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { RHFUploadAvatar } from '../../components/hook-form/RHFUpload'

import { useSnackbar } from 'notistack'
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// _mock
import { countries } from '../../_mock';

// utils
// import { fData } from '../../../../utils/formatNumber';
import { fData } from '../../utils/formatNumber';


import RHFSwitch from '../../components/hook-form/RHFSwitch';
import useAuth from '../../hooks/useAuth';
import RHFTextField from '../../components/hook-form/RHFTextField';
import RHFSelect from '../../components/hook-form/RHFSelect';
import { GlobalButton, GlobalTextField } from '../../assets/GlobalStyled/Globalstyles';
import RadialBarChart from '../dashboard/dashboard_components/charts/RadialBarChar';


const AccountSettings2 = () => {

  //redux
  const dispatch = useDispatch()

  const bank_account = useSelector(state => state.accounts.accounts)

  console.log(bank_account[4])

  //destructuring information from the account
  const { title, full_name, id_type, id_number, account_type, phone_number, email_address, selfie_image } = bank_account[4]


  const { enqueueSnackbar } = useSnackbar();



  const { user } = useAuth();



  const UpdateUserSchema = Yup.object().shape({
    displayName: Yup.string().required('Name is required'),
  });

  const defaultValues = {
    displayName: user?.displayName || '',
    email: user?.email || '',
    photoURL: user?.photoURL || '',
    phoneNumber: user?.phoneNumber || '',
    country: user?.country || '',
    address: user?.address || '',
    state: user?.state || '',
    city: user?.city || '',
    zipCode: user?.zipCode || '',
    about: user?.about || '',
    isPublic: user?.isPublic || false,
  };






  const methods = useForm({
    resolver: yupResolver(UpdateUserSchema),
    defaultValues,
  });



  
  const {
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      enqueueSnackbar('Update success!');
    } catch (error) {
      console.error(error);
    }
  };




  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
  
      if (file) {
        setValue(
          'photoURL',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setValue]
  );



  return (
    <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ py: 10, px: 3, textAlign: 'center' }}>
            <RHFUploadAvatar
            src={selfie_image}
              name="photoURL"
              maxSize={3145728}
              onDrop={handleDrop}
              helperText={
                <Typography
                  variant="caption"
                  sx={{
                    mt: 2,
                    mx: 'auto',
                    fontSize: 10,
                    display: 'block',
                    textAlign: 'center',
                    color: 'text.secondary',
                  }}
                >
                  Allowed *.jpeg, *.jpg, *.png, *.gif
                  <br /> max size of {fData(3145728)}
                </Typography>
              }
            />

            {/* <Avatar  src={selfie_image} 
            sx={{ width: 150, height: 150 }}  /> */}

         

            <RHFSwitch name="isPublic" labelPlacement="start" label="Public Profile" sx={{ mt: 5, fontSize: 10 }} />
          </Card>
        </Grid>



        <Grid item sx={{ml: "auto", }} xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box
              sx={{
                display: 'grid',
                rowGap: 3,
                columnGap: 2,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <GlobalTextField placeholder='full name'  value={`${title} ${full_name}`} disabled />
              <GlobalTextField  placeholder="Email Address" value={email_address} />

              <GlobalTextField  placeholder="Phone Number" value={phone_number} />
              {/* <GlobalTextField  placeholder="Email Address" /> */}

              
              <GlobalTextField  placeholder="ID Type"  value={id_type} />
              <GlobalTextField  placeholder="ID Number" value={id_number} />

              <GlobalTextField  placeholder="Account Type" value={account_type}/>
              {/* <GlobalTextField  placeholder="ID Number" /> */}

              {/* <GlobalTextField name="country"  placeholder="Country">
                <option value="" />
                {countries.map((option) => (
                  <option key={option.code} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </GlobalTextField> */}

              {/* <RHFTextField name="state" label="State/Region" />

              <RHFTextField name="city" label="City" />
              <RHFTextField name="zipCode" label="Zip/Code" /> */}
            </Box>

            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
              {/* <TextField name="about" multiline rows={4} placeholder="About" /> */}

              {/* <LoadingButton type="submit" variant="contained" 
              loading={isSubmitting}
              >
                Save Changes
              </LoadingButton> */}
              <GlobalButton loading={isSubmitting}>
                Save Changes
              </GlobalButton>
            </Stack>
          </Card>
        </Grid>


        <Grid item xs={12} md={4}></Grid>

        <Grid item xs={12} md={8}>
          <Card sx={{ }}>
            <RadialBarChart /> 
          </Card>
        </Grid>

      
    </Grid>
  )
}

export default AccountSettings2
