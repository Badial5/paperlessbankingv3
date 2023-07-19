import { Avatar, Box, Button, Input, Typography } from '@mui/material';
import React, { useState } from 'react';

const Upload = ({ image, setImage, formData, setFormData }) => {

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFormData(prevState => ({
      ...prevState,
      upload: URL.createObjectURL(file)
    }));
    setImage(URL.createObjectURL(file));
  };

  return (
    <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Typography variant='h5' sx={{ mb: 2 }}>Upload an Image</Typography>
      <Input
        type='file'
        name='file'
        accept='.jpg,.jpeg,.png,.gif'
        onChange={handleImage}
        sx={{ display: 'none' }}
        id='upload-button'
      />
      <label htmlFor='upload-button'>
        <Button
          variant='contained'
          component='span'
          sx={{
            backgroundColor: '#3f51b5',
            color: 'white',
            '&:hover': {
              backgroundColor: '#303f9f'
            }
          }}
        >
          Choose File
        </Button>
      </label>
      {image && (
        <Box sx={{ mt: 2 }}>
          <Avatar src={formData.upload} alt='Preview' sx={{ width: 200, height: 200 }} />
        </Box>
      )}
      <Box sx={{ mt: 2 }}>
       
      </Box>
    </Box>
  );
};

export default Upload;
