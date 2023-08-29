import React from 'react'
import { useState, forwardRef } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Button, Paper, Typography, Box } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import GlobalSuccess from './GlobalSuccess';
// import GlobalSuccess from '../GlobalSuccess/GlobalSuccess';



const GlobalConfirm = ({open, handleClose, handleOpen, }) => {
   
    //FOR SUCCESS DIALOG
  const [successOpen, setSuccessOpen] = useState(false);

  const handleSuccessOpen = () => {
    setSuccessOpen(true);
  };


//   const handleSuccessClose = () => {
//     setSuccessOpen(false);
//   };


  const handleSuccessClose = (confirmed) => {
    setSuccessOpen(false);
    if (confirmed) {
      // Perform action when changes are confirmed
      handleClose() 
      //  handleConfirmClose();
    }
  };


  


  return (
    <>
    <Dialog
        open={open}
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth={'xl'}
        sx={{ backdropFilter: "blur(5px) sepia(5%)" }}
        PaperProps={{ sx: { borderRadius: 5 } }}
        
      >
       <Paper sx={{ backgroundColor: '#f5f5f5', width: '30vw', maxWidth: '600px', margin: '0 auto' }}>
          {/* <DialogTitle textAlign='center' sx={{ fontFamily: 'Poppins', backgroundColor: 'RGBA(73, 145, 255, 0.5)', color: 'black' }}>
            Reset Security Question
          </DialogTitle>
          <hr /> */}

          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>


                <HelpOutlineIcon  fontSize='large' sx={{ fontSize: 100, mb: 1, color: 'RGBA(73, 145, 255, 0.9)' }} />

                <Typography sx={{ fontFamily: 'Poppins', fontSize: 18, fontWeight: 300 }}>
                  Complete Request
                </Typography>

                <Typography sx={{ fontFamily: 'Poppins', fontSize: 12, fontWeight: 400 }}>
                  Are you sure You want to submit request details?
                </Typography>
              </Box>
            </DialogContentText>
          </DialogContent>

          <hr />

          <DialogActions sx={{ paddingRight: 5 }}>
            <Button variant='outlined' color='info' onClick={handleSuccessOpen}>Submit</Button>
            <Button variant='outlined' color='error' onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Paper>
      </Dialog>


      <GlobalSuccess  handleSuccessOpen={handleSuccessOpen} successOpen={successOpen}  handleSuccessClose={ handleSuccessClose} handleClose={handleClose} />


      </>
  )
}

export default GlobalConfirm
