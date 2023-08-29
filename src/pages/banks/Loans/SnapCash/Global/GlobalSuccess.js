import React from 'react'
import { useState, forwardRef, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Button, Paper, Typography, Box } from '@mui/material';
import Lottie from 'react-lottie';
import { Link as RouterLink } from 'react-router-dom';

//IMAGES
import onSuccessAnimation from "./onSuccess.json"


const GlobalSuccess = ({successOpen, handleSuccessClose,  handleClose}) => {

    const [loadingInProgress, setLoadingInProgress] = useState(false);



     
//React Spinner 
useEffect(() => {
    setLoadingInProgress(true)
    const timer = setTimeout(() => {
      setLoadingInProgress(false);
    }, 2000);
  
    return () => clearTimeout(timer);
  }, []);
  
  


  return (
    <Dialog 
    // open={successOpen}
   
    // keepMounted
    // onClose={ handleClose}
    // aria-describedby="alert-dialog-slide-description"
    // maxWidth={'xl'} // Adjust the width as needed
    // sx={{ backdropFilter: "blur(5px) sepia(5%)"}}
    // PaperProps={{ sx: { borderRadius: 5 } }}

    open={successOpen}
    // TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
    maxWidth={'xl'} // Adjust the width as needed
    sx={{ backdropFilter: "blur(5px) sepia(5%)"}}
    PaperProps={{ sx: { borderRadius: 5 } }}
  >
    <Paper sx={{ backgroundColor: '#f5f5f5', width: '30vw', maxWidth: '600px', margin: '0 auto' }}> {/* Apply styles for width and centering */}
      {/* <DialogTitle textAlign='center' sx={{fontFamily: 'Poppins', backgroundColor: 'rgba(151, 71, 255, 0.5)', color: 'black' }}
>{titleProps}</DialogTitle> */}
      {/* <hr />  */}

      <DialogContent >
        <DialogContentText id="alert-dialog-slide-description">
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

               <Box>

               <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    color: 'red',

                    animationData: onSuccessAnimation,

                  }}
                  height={150}
                  width={150}
                />


             <Typography sx={{fontFamily: 'Poppins',  fontSize: 18, fontWeight: 600, textAlign: 'center'}}>
                    Request was successful
                </Typography>

                <Typography sx={{fontFamily: 'Poppins',  fontSize: 12, fontWeight: 400, textAlign: 'center'}}>
                    Thank You!
                </Typography>


               </Box>

                {/* <Typography sx={{fontFamily: 'Poppins',  fontSize: 18, fontWeight: 300}}>
                    Confirm Changes
                </Typography> */}

                {/* <Typography sx={{fontFamily: 'Poppins',  fontSize: 12, fontWeight: 400}}>
                    {textProps}
                </Typography> */}



            </Box>
        </DialogContentText>
      </DialogContent>

      {/* <hr /> */}

      <DialogActions sx={{marginLeft: 'auto', marginRight: 'auto'}}>

      {/* <Button variant='outlined' LinkComponent={RouterLink} to='/user-dashboard'  sx={{display: 'flex', alignItems: 'center', mx: 'auto'}} color='success'  onClick={handleSuccessClose}>Home</Button> */}

      <Button variant='outlined' LinkComponent={RouterLink} to='/user-dashboard'  sx={{display: 'flex', alignItems: 'center', mx: 'auto'}} color='success'  onClick={
        // handleClose
        handleSuccessClose
        }>Home</Button>

        {/* <Button variant='outlined' color='inherit' onClick={handleConfirmClose}>Cancel</Button> */}
      </DialogActions>
    </Paper>
  </Dialog>
  )
}

export default GlobalSuccess
