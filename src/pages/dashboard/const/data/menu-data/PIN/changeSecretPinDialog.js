import { useState, forwardRef } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Button, Grid, Paper } from '@mui/material';
import { GlobalInputLabel, GlobalTextField } from '../../../../../../assets/GlobalStyled/Globalstyles';
import ConfirmPIN from './ConfirmPin';

// import GlobalConfirm from '../../../../../../assets/Global/GlobalConfirm/GlobalConfirm';


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const ChangePinDialog = ({ openDialog, handleClose, handleOpen }) => {

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
          <DialogTitle textAlign='center' sx={{ fontFamily: 'Poppins', backgroundColor: 'rgba(151, 71, 255, 0.5)', color: 'black' }}>
            {"Change PIN"}
          </DialogTitle>
          <hr />

          <DialogContent>
            <Grid container sx={{ padding: 5, rowGap: 2 }}>

              <Grid item xs={12}>
                <GlobalInputLabel htmlFor='current_password'>Current PIN</GlobalInputLabel>
                <GlobalTextField id='current_password' fullWidth/>
                </Grid>

              <Grid item xs={12}>
                <GlobalInputLabel htmlFor='new_password'>New PIN</GlobalInputLabel>
                <GlobalTextField id='new_password' fullWidth/>
              </Grid>

              <Grid item xs={12}>
                <GlobalInputLabel htmlFor='confirm_password'>Confirm PIN *</GlobalInputLabel>
                <GlobalTextField id='confirm_password' fullWidth/>
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

      <ConfirmPIN openConfirm={confirmOpen} handleConfirmClose={handleConfirmClose} handleClose={ handleClose} textProps="Are You Sure you want to update your PIN?" titleProps="Change PIN" /> {/* Render GlobalConfirm dialog */}
    </div>
  );
}

export default ChangePinDialog;
