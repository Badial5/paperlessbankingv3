import { useState, forwardRef } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Button, Paper, Typography, Box } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import GlobalSuccess from '../GlobalSuccess/GlobalSuccess';
// import SuccessSecurityQuestion from './SuccessPassword';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmSecurityAnswer = ({ handleClose, openDialog,  textProps, titleProps }) => {
  

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
      //  handleConfirmClose();
    }
  };



  return (
    <div>
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth={'xl'}
        sx={{ backdropFilter: "blur(5px) sepia(5%)" }}
        PaperProps={{ sx: { borderRadius: 5 } }}
      >
        <Paper sx={{ backgroundColor: '#f5f5f5', width: '30vw', maxWidth: '600px', margin: '0 auto' }}>
          <DialogTitle textAlign='center' sx={{ fontFamily: 'Poppins', backgroundColor: 'RGBA(73, 145, 255, 0.5)', color: 'black' }}>
            Reset Security Question
          </DialogTitle>
          <hr />

          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>


                <HelpOutlineIcon  fontSize='large' sx={{ fontSize: 100, mb: 1, color: '#9747FE' }} />

                <Typography sx={{ fontFamily: 'Poppins', fontSize: 18, fontWeight: 300 }}>
                  Confirm Changes
                </Typography>

                <Typography sx={{ fontFamily: 'Poppins', fontSize: 12, fontWeight: 400 }}>
                  Are you sure You want to reset Your security Question?
                </Typography>
              </Box>
            </DialogContentText>
          </DialogContent>

          <hr />

          <DialogActions sx={{ paddingRight: 5 }}>
            <Button variant='outlined' color='info' onClick={handleSuccessOpen}>Submit</Button>
            <Button variant='outlined' color='inherit' onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Paper>
      </Dialog>

      {/* <SuccessSecurityQuestion successOpen={successOpen} handleClose={handleSuccessClose} titleProps='Security question submitted to your email' /> */}
    </div>
  );
}

export default ConfirmSecurityAnswer;
