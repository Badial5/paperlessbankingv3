import { useState, forwardRef } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Button, Paper, Typography, Box } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


import SuccessTin from './SuccessTIN';


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmTin = ({ openConfirm, handleConfirmClose, handleClose, textProps, titleProps }) => {
  console.log("Global Confirm handler: ", openConfirm);

  //FOR SUCCESS DIALOG
  const [successOpen, setSuccessOpen] = useState(false);

  const handleSuccessOpen = () => {
    setSuccessOpen(true);
  };

  const handleSuccessClose = (confirmed) => {
    setSuccessOpen(false);
    if (confirmed) {
      // Perform action when changes are confirmed
      handleClose() 
       handleConfirmClose();
    }
  };



  return (
    <div>
      <Dialog
        open={openConfirm}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleConfirmClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth={'xl'}
        sx={{ backdropFilter: "blur(5px) sepia(5%)" }}
        PaperProps={{ sx: { borderRadius: 5 } }}
      >
        <Paper sx={{ backgroundColor: '#f5f5f5', width: '30vw', maxWidth: '600px', margin: '0 auto' }}>
          <DialogTitle textAlign='center' sx={{ fontFamily: 'Poppins', backgroundColor: 'rgba(151, 71, 255, 0.5)', color: 'black' }}>{titleProps}</DialogTitle>
          <hr />

          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>


                <HelpOutlineIcon  fontSize='large' sx={{ fontSize: 100, mb: 1, color: '#9747FE' }} />

                <Typography sx={{ fontFamily: 'Poppins', fontSize: 18, fontWeight: 300 }}>
                  Confirm Changes
                </Typography>

                <Typography sx={{ fontFamily: 'Poppins', fontSize: 12, fontWeight: 400 }}>
                  {textProps}
                </Typography>
              </Box>
            </DialogContentText>
          </DialogContent>

          <hr />

          <DialogActions sx={{ paddingRight: 5 }}>
            <Button variant='outlined' color='info' onClick={handleSuccessOpen}>Submit</Button>
            <Button variant='outlined' color='inherit' onClick={handleConfirmClose}>Cancel</Button>
          </DialogActions>
        </Paper>
      </Dialog>

      <SuccessTin successOpen={successOpen} handleClose={handleSuccessClose} titleProps='PIN Updated' />
    </div>
  );
}

export default ConfirmTin;
