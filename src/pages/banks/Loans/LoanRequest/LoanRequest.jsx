import React, { useState } from 'react'

import { DashboardPageBackground, DashboardPaper, GlobalButton, GlobalFormControl, GlobalInputLabel, GlobalPageHeader, GlobalSubPageHeader, GlobalTextField } from '../../../../assets/GlobalStyled/Globalstyles'

import OutlinedInput from '@mui/material/OutlinedInput';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import DialogActions from '@mui/material/DialogActions';

import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



// import Confirm from "./steps/confirm"
// import Failed from "./steps/failed"
// import Success from "./steps/success"

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import { Box, Chip, Dialog, DialogContent, FormControl, Grid } from '@mui/material';

import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';


import GlobalConfirm from '../SnapCash/Global/GlobalConfirm';
import GlobalSuccess from '../SnapCash/Global/GlobalSuccess';





const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const names = [
  'Cash Security',
  'Landed Property',
  'Equipment/Machinery',
  'Vehicle',
];






const LoanRequest = () => {

  const [openDialog, setOpenDialog] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const [account, setAccount] = useState()
  const [facility, setFacility] = useState()
  const [currency, setCurrency] = useState()

  const [personName, setPersonName] = useState([]);





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

 

  const handleAccountChange = (event) => {
    setAccount(event.target.value);
  };

  const handleFacilityChange = (event) => {
    setFacility(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };



  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  return (
    <DashboardPageBackground >

<div style={{ width: '90%',marginLeft: 110, overflowX: 'auto' }}>
      <DashboardPaper
       sx={{ mb: 10}}>
        <GlobalPageHeader>
        Loan Management - Loan Request
        </GlobalPageHeader>
        <GlobalSubPageHeader>
        Seamless Processing: Streamlining Loan Requests
        </GlobalSubPageHeader>



        <Grid container spacing={2} sx={{ rowGap: 2, display: "flex", alignItems: "center", mr: "auto", ml: "auto", width: "30rem"}}>



        <Grid item xs={3} >

        <GlobalInputLabel >Account Number<span style={{color: "red"}}>*</span> </GlobalInputLabel>
        </Grid>


        <Grid xs={9} sx={{mt: 1.5}}>
            <GlobalTextField sx={{width: 300}} select  
             value={account}
             onChange={handleAccountChange}>

          <MenuItem value={1421321298304323}>John Smith - 1421321298304323</MenuItem>
          <MenuItem value={1451328998304324}>Williams Essien - 1451328998304323</MenuItem>
          <MenuItem value={1454628228309026}>Dickson Benson - 1454628228309026</MenuItem>

             </GlobalTextField>
        </Grid>


        <Grid item xs={3}  >

        <GlobalInputLabel sx={{}}>Facility Type <span style={{color: "red"}}>*</span> </GlobalInputLabel>
        </Grid>

        <Grid xs={9} sx={{mt: 1.5}}>
            <GlobalTextField sx={{width: 300}} select  
             value={facility}
             onChange={handleFacilityChange}>

          <MenuItem value={"salary loan"}>Salary Loan</MenuItem>
          <MenuItem value={"salary advance"}>Salary Advance</MenuItem>
          <MenuItem value={"auto loan"}>Auto Loan</MenuItem>
          <MenuItem value={"mortgage"}>Mortgage</MenuItem>

             </GlobalTextField>
        </Grid>


        <Grid item xs={3}  >

        <GlobalInputLabel sx={{}}>Amount <span style={{color: "red"}}>*</span> </GlobalInputLabel>
        </Grid>

        <Grid xs={9} sx={{mt: 1.5}}>
            <GlobalTextField sx={{width: 300}}/>
        </Grid>


        <Grid item xs={3}  >

        <GlobalInputLabel sx={{}}>Purpose <span style={{color: "red"}}>*</span> </GlobalInputLabel>
        </Grid>

        <Grid xs={9} sx={{mt: 1.5}}>
            <GlobalTextField sx={{width: 300}}/>
        </Grid>


        <Grid item xs={3}  >

        <GlobalInputLabel sx={{}}>Tenure <span style={{color: "red"}}>*</span> </GlobalInputLabel>
        </Grid>

        <Grid xs={9} sx={{mt: 1.5}}>
            <GlobalTextField sx={{width: 300}}/>
        </Grid>


        <Grid item xs={3}  >

        <GlobalInputLabel sx={{}}>Mobile <span style={{color: "red"}}>*</span> </GlobalInputLabel>
        </Grid>

        <Grid xs={9} sx={{mt: 1.5}}>
            <GlobalTextField sx={{width: 300}}/>
        </Grid>


        <Grid item xs={3}  >

        <GlobalInputLabel sx={{}}>Email Address <span style={{color: "red"}}>*</span> </GlobalInputLabel>
        </Grid>

        <Grid xs={9} sx={{mt: 1.5}}>
            <GlobalTextField sx={{width: 300}}/>
        </Grid>


{/* ====================================================================== */}
        <Grid item xs={3}  >

        <GlobalInputLabel>Security Type <span style={{color: "red"}}>*</span> </GlobalInputLabel>
        </Grid>


        <Grid xs={9} sx={{mt: 1.5}}>
            {/* <GlobalTextField sx={{width: 300}}  */}
             <GlobalFormControl sx={{  width: 300 }}>
                <Select
            
          //  labelId="demo-multiple-checkbox-label"
          //  id="demo-multiple-checkbox"
           multiple
          select
           value={personName}
           onChange={handleChange}
          //  input={<OutlinedInput label="Tag" />}
           renderValue={(selected) => selected.join(', ')}
           MenuProps={MenuProps}
             
             >

            {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
           </Select>
          </GlobalFormControl> 
             {/* </GlobalTextField> */}
        </Grid>


{/* ===================================================================== */}


        <Grid item xs={3}  >

        <GlobalInputLabel sx={{}}>Security Amount <span style={{color: "red"}}>*</span> </GlobalInputLabel>
        </Grid>


        <Grid xs={9} sx={{mt: 1.5}}>
            <GlobalTextField sx={{width: 300}}/>
        </Grid>


        <Grid item xs={3}  >

        <GlobalInputLabel sx={{}}>Currency <span style={{color: "red"}}>*</span> </GlobalInputLabel>
        </Grid>


        <Grid xs={9} sx={{mt: 1.5}}>
            <GlobalTextField sx={{width: 300}} select  
             value={currency}
             onChange={handleCurrencyChange}>

          <MenuItem value={"GHS"}>GHS</MenuItem>
          <MenuItem value={"USD"}>USD</MenuItem>
          <MenuItem value={"EUR"}>EUR</MenuItem>
          <MenuItem value={"GBP"}>GBP</MenuItem>

             </GlobalTextField>
        </Grid>



        <Grid item xs={3}  >

        <GlobalInputLabel sx={{}}>Security Description <span style={{color: "red"}}>*</span> </GlobalInputLabel>
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
</div>

    </DashboardPageBackground>
  )
}

export default LoanRequest
