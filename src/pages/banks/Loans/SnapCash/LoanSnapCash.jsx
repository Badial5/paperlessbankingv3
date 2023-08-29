import React, { useState } from 'react'

import { DashboardPageBackground, DashboardPaper, GlobalButton, GlobalInputLabel, GlobalPageHeader, GlobalSubPageHeader, GlobalTextField } from '../../../../assets/GlobalStyled/Globalstyles'



import Button from '@mui/material/Button';

import DialogActions from '@mui/material/DialogActions';

import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



import Confirm from "./steps/confirm"
import Failed from "./steps/failed"
import Success from "./steps/success"

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import { Box, Dialog, DialogContent, Grid } from '@mui/material';
import ConfirmSnapCash from './steps/confirm'
import GlobalConfirm from './Global/GlobalConfirm'



const LoanSnapCash = () => {

  const [openDialog, setOpenDialog] = useState(false);
  const [formValid, setFormValid] = useState(false);

  //Dialogs
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleFormSubmit = () => {
    // Perform form validation here
    // For simplicity, let's assume the form is valid
    setFormValid(true);
    // setOpenDialog(true);
    setOpen(true)
  };



  return (
    <DashboardPageBackground >
      <DashboardPaper
       sx={{ mb: 20}}>
        <GlobalPageHeader>
        Loan Snap Cash
        </GlobalPageHeader>
        <GlobalSubPageHeader>
        Cash in an Instant: Request Loan Snap Cash for Quick Financial Support
        </GlobalSubPageHeader>



        <Grid container spacing={2} sx={{ rowGap: 2, display: "flex", alignItems: "center", mr: "auto", ml: "auto", width: "30rem"}}>



        <Grid item xs={3} >

        <GlobalInputLabel >Credit Amount <span style={{color: "red"}}>*</span> </GlobalInputLabel>
        </Grid>


        <Grid xs={9} sx={{mt: 1.5}}>
            <GlobalTextField sx={{width: 300}} />
        </Grid>


        <Grid item xs={3}  >

        <GlobalInputLabel sx={{}}>Amount <span style={{color: "red"}}>*</span> </GlobalInputLabel>
        </Grid>


        <Grid xs={9} sx={{mt: 1.5}}>
            <GlobalTextField sx={{width: 300}}/>
        </Grid>



        <GlobalButton sx={{width: 200}} onClick={handleFormSubmit}>Submit</GlobalButton>


        </Grid>

        {/* <GlobalConfirm openConfirm={confirmOpen} handleConfirmClose={handleConfirmClose} handleClose={ handleClose} textProps="Are You Sure you want to update your password?" titleProps="Change Password" />  */}

        <GlobalConfirm  open={open} handleClose={handleClose} handleOpen={handleOpen} />


        {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog> */}

        {/* Render GlobalConfirm dialog */}

       

{/* <ConfirmSnapCash open={openDialog} /> */}



      </DashboardPaper>
    </DashboardPageBackground>
  )
}

export default LoanSnapCash
