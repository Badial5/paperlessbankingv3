import { Avatar, Box, Button, Input, Typography } from '@mui/material';
import React, { useState } from 'react';

const Upload = ({ image, setImage, formData, setFormData, globalImage, setGlobalImage }) => {

  

  const handleImage = (e) => {

    const { selfie_image } = formData

    const file = e.target.files[0];
    setFormData(prevState => ({
      ...prevState,
      selfie_image: URL.createObjectURL(file)
    }));
    setImage(URL.createObjectURL(file));
  };

// I will uncomment it after 
  // const handleImage = (e) => {
  //   const file = e.target.files[0];
  //   setFormData(prevState => ({
  //     ...prevState,
  //     upload: URL.createObjectURL(file)
  //   }));
  //   setImage(URL.createObjectURL(file));
  // };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setFormData({ ...formData, selfie_image: imageFile });
  };


  const handleGlobalImageChange = (e) => {
    const file = e.target.files[0];
    setGlobalImage(prevState => ({
      ...prevState,
      upload: URL.createObjectURL(file)
    }));
    setGlobalImage(URL.createObjectURL(file));
  };
  

  return (
    <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Typography variant='h5' sx={{ mb: 2 }}>Upload an Image</Typography>
      <Input
        type='file'
        name='file'
        // accept='.jpg,.jpeg,.png,.gif'
        accept="image/jpeg,image/png,image/gif"
        onChange={handleImage}
        // onChange={handleGlobalImageChange}
        sx={{ display: 'none' }}
        id='upload-button'
      />
      <label htmlFor='upload-button'>
        <Button
          variant='contained'
          component='span'
          sx={{
            backgroundColor: '#9747FF',
            color: 'white',
            '&:hover': {
              backgroundColor: '#9747FF'
            }
          }}
        >
          Choose File
        </Button>
      </label>

      {image && (
        <Box sx={{ mt: 2 }}>
          <Avatar 
          // src={formData.upload} 
          src={formData.selfie_image} 
          alt='Preview' sx={{ width: 200, height: 200 }} />
        </Box>
      )}

{/* {globalImage && (
        <Box sx={{ mt: 2 }}>
          <Avatar src={formData.upload} alt='Preview' sx={{ width: 200, height: 200 }} />
        </Box>
      )} */}
      <Box sx={{ mt: 2 }}>
       
      </Box>
    </Box>
  );
};

export default Upload;
