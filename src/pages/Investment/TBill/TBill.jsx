import React, { useState } from 'react'

import { DashboardPageBackground, DashboardPaper, GlobalButton, GlobalFormControl, GlobalInputLabel, GlobalPageHeader, GlobalSubPageHeader, GlobalTextField } from '../../../assets/GlobalStyled/Globalstyles'

// import { DashboardPageBackground } from '../../../assets/GlobalStyled/Globalstyles';

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




import GlobalConfirm from '../../banks/Loans/SnapCash/Global/GlobalConfirm';
import GlobalSuccess from '../../banks/Loans/SnapCash/Global/GlobalSuccess';





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


const initialPrincipal = "0";
const initialTopup = "0"




const TBill = () => {

  const [openDialog, setOpenDialog] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const [account, setAccount] = useState()
  const [facility, setFacility] = useState()
  const [currency, setCurrency] = useState()

  const [personName, setPersonName] = useState([]);


  //CURRENCY 
  const [value, setValue] = useState(initialPrincipal);
  const [topUp, setTopUp] = useState(initialTopup)



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


  //CURRENCIES

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    // Remove non-numeric and non-decimal characters
    const numericValue = inputValue.replace(/[^0-9.]/g, '');

    // Format the value as a currency string
    const formattedValue = parseFloat(numericValue).toLocaleString('en-GH', {
      style: 'currency',
      currency: 'GHS', // Change to your desired currency code
      minimumFractionDigits: 2,
    });

    setValue(formattedValue);
  };


  const handleTopupChange = (event) => {
    const inputValue = event.target.value;

    // Remove non-numeric and non-decimal characters
    const numericValue = inputValue.replace(/[^0-9.]/g, '');

    // Format the value as a currency string
    const formattedValue = parseFloat(numericValue).toLocaleString('en-GH', {
      style: 'currency',
      currency: 'GHS', // Change to your desired currency code
      minimumFractionDigits: 2,
    });

    setTopUp(formattedValue);
  };


  return (
    <DashboardPageBackground >

<div style={{ width: '90%',marginLeft: 110, overflowX: 'auto' }}>
      <DashboardPaper
       sx={{ mb: 10}}>
        <GlobalPageHeader>
        Investment - T-Bills Request
        </GlobalPageHeader>
        <GlobalSubPageHeader>
        Seizing Opportunities: Requesting T-Bills Investments
        </GlobalSubPageHeader>



        <Grid container spacing={2} sx={{ rowGap: 2, display: "flex", alignItems: "center", mr: "auto", ml: "auto", width: "30rem"}}>



        <Grid item xs={3} >

        <GlobalInputLabel >Security Type<span style={{color: "red"}}>*</span> </GlobalInputLabel>
        </Grid>


        <Grid xs={9} sx={{mt: 1.5}}>
            <GlobalTextField sx={{width: 300}} select  
             value={account}
             onChange={handleAccountChange}>

          <MenuItem value={"91 days"}>91 DAYS</MenuItem>
          <MenuItem value={"182 days"}>182 DAYS</MenuItem>
          <MenuItem value={"1 year"}>1 YEAR</MenuItem>
          <MenuItem value={"2 yeas"}>2 YEARS</MenuItem>
          <MenuItem value={"3 year"}>3 YEARS</MenuItem>
          <MenuItem value={"5 years"}>5 YEARS</MenuItem>
          <MenuItem value={"7 year"}>7 YEARS</MenuItem>

             </GlobalTextField>
        </Grid>




        <Grid item xs={3} >

<GlobalInputLabel >Requested Type<span style={{color: "red"}}>*</span> </GlobalInputLabel>
</Grid>


<Grid xs={9} sx={{mt: 1.5}}>
    <GlobalTextField sx={{width: 300}} select  
     value={account}
     onChange={handleAccountChange}>

  <MenuItem value={"Junior"}>Junior</MenuItem>
  <MenuItem value={"Joint"}>Joint</MenuItem>
  <MenuItem value={"Individual"}>Individual</MenuItem>
  <MenuItem value={"Limited Liability Company"}>Limited Liability Company</MenuItem>
  <MenuItem value={"Sole Proprietorship"}>Sole Proprietorship</MenuItem>
  <MenuItem value={"Association"}>Association</MenuItem>

     </GlobalTextField>
</Grid>


        <Grid item xs={3} >

        <GlobalInputLabel sx={{whiteSpace: 'wrap', overflow: 'visible',}} >Account Number<span style={{color: "red"}}>*</span> </GlobalInputLabel>
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



        <Grid item xs={3} >

<GlobalInputLabel sx={{whiteSpace: 'wrap', overflow: 'visible',}} >Source Fund<span style={{color: "red"}}>*</span> </GlobalInputLabel>
</Grid>


<Grid xs={9} sx={{mt: 1.5}}>
    <GlobalTextField sx={{width: 300}} select  
     value={account}
     onChange={handleAccountChange}>

  <MenuItem value={"Salary"}>Salary</MenuItem>
  <MenuItem value={"Gift and Inheritance"}>Gift and Inheritance</MenuItem>
  <MenuItem value={"Investment Proceeds"}>Investment Proceeds</MenuItem>

  <MenuItem value={"Business Proceeds"}>Business Proceeds</MenuItem>

  <MenuItem value={"Savings"}>Savings</MenuItem>

  <MenuItem value={"Other"}>Other</MenuItem>

     </GlobalTextField>
</Grid>




        <Grid item xs={3}  >

        <GlobalInputLabel sx={{whiteSpace: 'wrap', overflow: 'visible',}}>Amount Tendered <span style={{color: "red"}}>*</span> </GlobalInputLabel>
        </Grid>

        <Grid xs={9} sx={{mt: 1.5}}>
            <GlobalTextField sx={{width: 300}} 
            value={value}
            onChange={handleInputChange}
            />
        </Grid>


        <Grid item xs={3}  >

        <GlobalInputLabel sx={{whiteSpace: 'wrap', overflow: 'visible',}}>Phone Number <span style={{color: "red"}}>*</span> </GlobalInputLabel>
        </Grid>

        <Grid xs={9} sx={{mt: 1.5}}>
            <GlobalTextField sx={{width: 300}}/>
        </Grid>


        <Grid item xs={3}  >

        <GlobalInputLabel sx={{whiteSpace: 'wrap', overflow: 'visible',}}>Face Value <span style={{color: "red"}}>*</span> </GlobalInputLabel>
        </Grid>

        <Grid xs={9} sx={{mt: 1.5}}>
            <GlobalTextField sx={{width: 300}}/>
        </Grid>





        <Grid item xs={3}  >

<GlobalInputLabel sx={{whiteSpace: 'wrap', overflow: 'visible',}}>Maturity Instruction <span style={{color: "red"}}>*</span> </GlobalInputLabel>
</Grid>

<Grid xs={9} sx={{mt: 1.5}}>
    <GlobalTextField sx={{width: 300}} select  
     value={account}
     onChange={handleAccountChange}>

  <MenuItem value={"Junior"}>Junior</MenuItem>
  <MenuItem value={"Joint"}>Joint</MenuItem>
  <MenuItem value={"Individual"}>Individual</MenuItem>
  <MenuItem value={"Limited Liability Company"}>Limited Liability Company</MenuItem>
  <MenuItem value={"Sole Proprietorship"}>Sole Proprietorship</MenuItem>
  <MenuItem value={"Association"}>Association</MenuItem>

     </GlobalTextField>
</Grid>












        <Grid item xs={3}  >

<GlobalInputLabel sx={{whiteSpace: 'wrap', overflow: 'visible',}}>Maturity TopUp Amount <span style={{color: "red"}}>*</span> </GlobalInputLabel>
</Grid>

<Grid xs={9} sx={{mt: 1.5}}>
    <GlobalTextField sx={{width: 300}} 
    value={topUp}
    onChange={handleTopupChange}
    />
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

export default TBill
