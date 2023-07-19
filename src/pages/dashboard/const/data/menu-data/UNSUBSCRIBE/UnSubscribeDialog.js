import { useState, forwardRef } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box, Button, Grid, Paper, Tooltip, Typography, Zoom } from '@mui/material';
import { GlobalInputLabel, GlobalTextField } from '../../../../../../assets/GlobalStyled/Globalstyles';
// import ConfirmPIN from './ConfirmUnsubscribe';

import ConfirmUnsubscribe from './ConfirmUnsubscribe';

import ContactSupportIcon from '@mui/icons-material/ContactSupport';



// import GlobalConfirm from '../../../../../../assets/Global/GlobalConfirm/GlobalConfirm';


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const UnSubscribeDialog = ({ openDialog, handleClose, handleOpen }) => {

  //FOR CONFIRM DIALOGS
  const [confirmOpen, setConfirmOpen] = useState(false); // State to manage GlobalConfirm dialog

  const handleSaveChanges = () => {
    setConfirmOpen(true); // Open GlobalConfirm dialog when Save Changes button is clicked
  };

  const handleConfirmClose = (confirmed) => {
    setConfirmOpen(false); // Close GlobalConfirm dialog
    if (confirmed) {
      // Perform action when changes are confirmed
      handleClose();
    }
  };

  console.log("HandleDialog OPtion: ", openDialog);
  console.log("Confirm Handler Open: ", confirmOpen);

  return (
    <div>
      <Dialog 
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth={'xl'} // Adjust the width as needed
        sx={{ backdropFilter: "blur(5px) sepia(5%)" }}
        PaperProps={{ sx: { borderRadius: 5 } }}
      >
        <Paper sx={{ backgroundColor: '#f5f5f5', width: '30vw', maxWidth: '600px', margin: '0 auto' }}>
          <DialogTitle textAlign='center' sx={{ fontFamily: 'Poppins', backgroundColor: 'rgba(151, 71, 255, 0.5)', color: 'black', fontSize: 18 }}>
          Un-Subcribe from Online Banking
          </DialogTitle>
          <hr />

          <DialogContent>
            <Grid container sx={{ padding: 5, rowGap: 2 }}>

              <Grid item xs={12} >
                {/* <Typography sx={{fontSize: 10}}>Once you submit this request, you will no longer have access to online banking
                Secret PIN * 
                </Typography> */}

                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Tooltip title="Once you submit this request, you will no longer have access to online banking"  TransitionComponent={Zoom}
                  TransitionProps={{ timeout: 2000 }} placement='top' followCursor >

                <ContactSupportIcon fontSize='large' sx={{color: '#9747FF', mx: 'auto'}} />
                </Tooltip>

                </Box>

                <GlobalInputLabel htmlFor='current_password'>PIN</GlobalInputLabel>
                <GlobalTextField id='current_password' fullWidth/>
                </Grid>

             
            </Grid>
          </DialogContent>

          <hr />

          <DialogActions sx={{ paddingRight: 5 }}>
            <Button variant='outlined' color='secondary' onClick={handleClose}>Close</Button>

            <Button variant='outlined' color='info' onClick={handleSaveChanges}>Save Request</Button>
          </DialogActions>
        </Paper>
      </Dialog>

      <ConfirmUnsubscribe openConfirm={confirmOpen} handleConfirmClose={handleConfirmClose} handleClose={ handleClose} textProps="Once you submit this request, you will no longer have access to online banking Secret PIN * " titleProps="Un-Subcribe from Online Banking" /> 
    </div>
  );
}

export default UnSubscribeDialog
