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
import { Box, Chip, Dialog, DialogContent, FormControl, Grid, TextField } from '@mui/material';

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


const currencySymbols = {
    GHS: '₵',
    USD: '$',
    GBP: '£',
    EUR: '€',
  };


const FixedDeposit = () => {

  const [openDialog, setOpenDialog] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const [account, setAccount] = useState()
  const [facility, setFacility] = useState()
//   const [currency, setCurrency] = useState()

  const [personName, setPersonName] = useState([]);


  //CURRENCY 
  const [value, setValue] = useState(initialPrincipal);
  const [topUp, setTopUp] = useState(initialTopup)


  const [currency, setCurrency] = useState('GHS');
  const [amount, setAmount] = useState('');

  //TENURE
  const [tenure, setTenure] = useState("0")


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

  //TENURE 
  const handleTenureChange = (event) => {
    setTenure(event.target.value);
  };

//   const handleCurrencyChange = (event) => {
//     setCurrency(event.target.value);
//   };



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


  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

//   const handleAmountChange = (event) => {
//     setAmount(event.target.value);
//   };

  

  const handleAmountChange = (event) => {
    const inputValue = event.target.value;

    // Remove non-numeric and non-decimal characters
    const numericValue = inputValue.replace(/[^0-9.]/g, '');

    // Format the value as a currency string
    const formattedValue = parseFloat(numericValue).toLocaleString('en-GH', {
      style: 'currency',
      currency: 'GHS', // Change to your desired currency code
      minimumFractionDigits: 2,
    });

    setAmount(formattedValue);
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


  //currency change la

  

  return (
    <DashboardPageBackground >

<div style={{ width: '90%',marginLeft: 110, overflowX: 'auto' }}>
      <DashboardPaper
       sx={{ mb: 10}}>
        <GlobalPageHeader>
        Investment - Fixed Deposit Request
        </GlobalPageHeader>
        <GlobalSubPageHeader>
        Securing Your Future: A Guide to Fixed Deposit Investments
        </GlobalSubPageHeader>



        <Grid container spacing={2} sx={{ rowGap: 2, display: "flex", alignItems: "center", mr: "auto", ml: "auto", width: "30rem"}}>



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






<Grid item xs={3}  >

        <GlobalInputLabel sx={{whiteSpace: 'wrap', overflow: 'visible',}}>Investment Name<span style={{color: "red"}}>*</span> </GlobalInputLabel>
        </Grid>

        <Grid xs={9} sx={{mt: 1.5}}>
            <GlobalTextField sx={{width: 300}}/>
        </Grid>






        <Grid item xs={3} >

<GlobalInputLabel sx={{whiteSpace: 'wrap', overflow: 'visible',}} >Currency<span style={{color: "red"}}>*</span> </GlobalInputLabel>
</Grid>


<Grid xs={9} sx={{mt: 1.5}}>
    <GlobalTextField sx={{width: 300}} select  
     value={account}
     onChange={handleAccountChange}>

  <MenuItem value={"GHS"}>GHS</MenuItem>
  <MenuItem value={"USD"}>USD</MenuItem>
  <MenuItem value={"GBP"}>GBP</MenuItem>
  <MenuItem value={"EUR"}>EUR</MenuItem>

     </GlobalTextField>
</Grid>


{/* ///////////////// amount ///////////////////////// */}
        <Grid item xs={3}  >

        <GlobalInputLabel sx={{whiteSpace: 'wrap', overflow: 'visible',}}>Amount<span style={{color: "red"}}>*</span> </GlobalInputLabel>
        </Grid>

        <Grid xs={9} sx={{mt: 1.5}}>
            <GlobalTextField sx={{width: 300}} 
            value={amount}
            onChange={handleAmountChange}
            />
        </Grid>




{/* /////////////////// Tenure /////////////////////// */}
        <Grid item xs={3} >

<GlobalInputLabel >Tenure<span style={{color: "red"}}>*</span> </GlobalInputLabel>
</Grid>


<Grid xs={9} sx={{mt: 1.5}}>
    <GlobalTextField sx={{width: 300}} select  
     value={tenure}
     onChange={handleTenureChange}>

  <MenuItem value={"31 days"}>31 days</MenuItem>
  <MenuItem value={"91 days"}>91 days</MenuItem>
  <MenuItem value={"182 days"}>182 days</MenuItem>
  <MenuItem value={"365 days"}>365 days</MenuItem>

     </GlobalTextField>
</Grid>





        <Grid item xs={3}  >

        <GlobalInputLabel sx={{whiteSpace: 'wrap', overflow: 'visible',}}>Negotiated Rate Code<span style={{color: "red"}}>*</span> </GlobalInputLabel>
        </Grid>

        <Grid xs={9} sx={{mt: 1.5}}>
            <GlobalTextField sx={{width: 300}} placeholder='Negotiated Rate Code' />
        </Grid>


        <Grid item xs={3} >

<GlobalInputLabel sx={{whiteSpace: 'wrap', overflow: 'visible',}} >Roll Over Instruction<span style={{color: "red"}}>*</span> </GlobalInputLabel>
</Grid>

<Grid xs={9} sx={{mt: 1.5}}>
    <GlobalTextField sx={{width: 300}} select  
     value={account}
     onChange={handleAccountChange}>

  <MenuItem value={"ROLLOVER"}>ROLLOVER</MenuItem>
  <MenuItem value={"NO ROLLOVER"}>NO ROLLOVER</MenuItem>
  <MenuItem value={"INTEREST ON MATURITY"}>INTEREST ON MATURITY</MenuItem>
  

     </GlobalTextField>
</Grid>


        <Grid item xs={3}  >

        <GlobalInputLabel sx={{whiteSpace: 'wrap', overflow: 'visible',}}>Special Instructions <span style={{color: "red"}}>*</span> </GlobalInputLabel>
        </Grid>

        <Grid xs={9} sx={{mt: 1.5}}>
            {/* <GlobalTextField sx={{width: 300,}} placeholder='Comments'  rows={4}
          maxRows={4}
          /> */}

        <TextField
          
          multiline
          rows={4}
          placeholder='Comment'
          sx={{fontFamily: "Poppins",
          fontSize: 12,
          "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
          borderColor: "#4991FF"
              }
            },  [`& fieldset`]:{
              borderRadius: "6px",  },
          "& .MuiInputBase-root": {
              height: "auto",
              width: 300,
              fontSize: 12,
              "& input::placeholder": {
                  fontSize: 12,
                },
            }}}
          
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

export default FixedDeposit
