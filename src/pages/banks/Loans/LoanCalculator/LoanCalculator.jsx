import React, { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';

import { DashboardPageBackground, DashboardPaper, GlobalButton, GlobalInputLabel, GlobalPageHeader, GlobalSubPageHeader, GlobalTextField } from '../../../../assets/GlobalStyled/Globalstyles'



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
import { Box, Dialog, DialogContent, Grid, MenuItem } from '@mui/material';

import GlobalConfirm from '../SnapCash/Global/GlobalConfirm';
import GlobalSuccess from '../SnapCash/Global/GlobalSuccess';


const LoanCalculator = () => {

  const [openDialog, setOpenDialog] = useState(false);
  const [formValid, setFormValid] = useState(false);



    //++++++++++++++++++ Loan Calculator +++++++++++++++++++++++++++++++
    // ++++++++++++++++++++ LOAN CALCULATOR ++++++++++++++++++++++++++++++
  const initialLoanType = "";
  const initialPrincipal = "";
  const initialInterest = "2.5";
  const initialNumeric = "0"; // Assuming initial value is 0


  const [loanType, setLoanType] = useState(initialLoanType);
  const [value, setValue] = useState(initialPrincipal);
  const [numeric, setNumeric] = useState(initialNumeric);
  const [interest, setInterest] = useState(initialInterest);
  const [loanResult, setLoanResult] = useState(null);

  //LOADING ANIMATION
  const [isLoading, setIsLoading] = useState(false);
  const [calculating, setCalculating] = useState(false);


  console.log("INTEREST INITIAL AMOUNT: ", interest)



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

//   const handleloantypeChange = (e) => {
//     setLoanType(e.target.value)
//   }


const handleloantypeChange = (e) => {
    const selectedLoanType = e.target.value;
    
    setLoanType(selectedLoanType);
  
    // Set interest rate based on loan type
    if (selectedLoanType === "education") {
      setInterest("2.2");
    } else if (selectedLoanType === "funeral") {
      setInterest("3.5");
    } else if (selectedLoanType === "personal") {
      setInterest("2");
    }
  };
  


  


  

  const handleNumericInputChange = (event) => {
    const inputValue = event.target.value;

    // Allow only numeric characters
    const numericValue = inputValue.replace(/[^0-9]/g, '');

    setNumeric(numericValue);
  };


  const handleInterestChange = (event) => {
    const inputValue = event.target.value;

    // Allow only numeric characters
    const numericValue = inputValue.replace(/[^0-9]/g, '');

    setInterest(numericValue);
  };


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


//   =======================================================================
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //LOAN CALCULATIONS 

//   const calculateLoan = () => {

//     setCalculating(true); // Start the loading animation

//     // Convert values to appropriate data types (you can adjust as needed)
//     const principal = parseFloat(value.replace(/[^0-9.]/g, ''));
//     const interestRate = parseFloat(interest);
//     const months = parseFloat(numeric);
  
//     // Perform the loan calculation
//     const interestAmount = (principal * interestRate * months) / 100;
//     const totalAmount = principal + interestAmount;
  
//     // Format the results
//     const formattedInterestAmount = interestAmount.toLocaleString('en-GH', {
//       style: 'currency',
//       currency: 'GHS',
//       minimumFractionDigits: 2,
//     });
  
//     const formattedTotalAmount = totalAmount.toLocaleString('en-GH', {
//       style: 'currency',
//       currency: 'GHS',
//       minimumFractionDigits: 2,
//     });
  
//     // Set the calculated result
//     setLoanResult({
//       interestAmount: formattedInterestAmount,
//       totalAmount: formattedTotalAmount,
//     });


//     // setCalculating(false)

//     // const handleloantypeChange = (e) => {
//     //     const selectedLoanType = e.target.value;
//     //     setLoanType(selectedLoanType);
    
//     //     // Set interest rate based on selected loan type
//     //     switch (selectedLoanType) {
//     //       case 'personal':
//     //         setInterest('2.5');
//     //         break;
//     //       case 'funeral':
//     //         setInterest('3.5');
//     //         break;
//     //       case 'education':
//     //         setInterest('2.2');
//     //         break;
//     //       default:
//     //         setInterest(initialInterest);
//     //     }
//     //   };


//   };

const calculateLoan = () => {
    // Convert values to appropriate data types (you can adjust as needed)
    const principal = parseFloat(value.replace(/[^0-9.]/g, ''));
    const interestRate = parseFloat(interest) / 100; // Convert to decimal
    
    const months = parseFloat(numeric);
  
   


 // Calculate the total amount including compound interest
 const totalAmount = principal * Math.pow(1 + interestRate, months / 12);
  
 // Calculate the interest amount
 const interestAmount = totalAmount - principal;
   
 
  
    // Format the results
    const formattedInterestAmount = interestAmount.toLocaleString('en-GH', {
      style: 'currency',
      currency: 'GHS',
      minimumFractionDigits: 2,
    });
  
    const formattedTotalAmount = totalAmount.toLocaleString('en-GH', {
      style: 'currency',
      currency: 'GHS',
      minimumFractionDigits: 2,
    });
  
    // Set the calculated result
    setLoanResult({
      interestAmount: formattedInterestAmount,
      totalAmount: formattedTotalAmount,
    });
  };


  
  const formatNumber = (number) => {
    return number.toLocaleString('en-GH', {
      style: 'currency',
      currency: 'GHS',
      minimumFractionDigits: 2,
    });
  };



  
  


   // Function to handle the form reset
   const handleReset = () => {
    setLoanType(initialLoanType);
    setValue(initialPrincipal);
    setNumeric(initialNumeric);
    setInterest(initialInterest);
    setLoanResult(null);
  };


  return (
    <DashboardPageBackground >
      <DashboardPaper
       sx={{ mb: 10}}>
        <GlobalPageHeader>
        Loan Management - Loan Calculator
        </GlobalPageHeader>
        <GlobalSubPageHeader>
        Precision Planning: Empowering Borrowers with Loan Calculators
        </GlobalSubPageHeader>



        <Grid container spacing={2} sx={{ rowGap: 2, display: "flex", alignItems: "center", mr: "auto", ml: "auto", width: "30rem"}}>



        <Grid item xs={3} >

        <GlobalInputLabel >Loan Type <span style={{color: "red"}}>*</span> </GlobalInputLabel>
        </Grid>


        <Grid xs={9} sx={{mt: 1.5}}>
            <GlobalTextField sx={{width: 300}} select  
            //  value={loanType}
            //  onChange={handleloantypeChange}
             
             value={loanType}
              onChange={handleloantypeChange} 
             >

          <MenuItem value={"personal"}>Personal Loan</MenuItem>
          <MenuItem value={"funeral"}>Funeral Loan</MenuItem>
          <MenuItem value={"education"}>Education Loan</MenuItem>

             </GlobalTextField>
        </Grid>


        <Grid item xs={3}  >

        <GlobalInputLabel sx={{  whiteSpace: 'wrap', overflow: 'visible',}}>Requested Amount(GHS) <span style={{color: "red"}}>*</span> </GlobalInputLabel>
        </Grid>


        <Grid xs={9} sx={{mt: 1.5}}>
            <GlobalTextField sx={{width: 300}} placeholder='Enter the Principal Amount' 
            value={value}
            onChange={handleInputChange}
            />
        </Grid>


        <Grid item xs={3}  >

        <GlobalInputLabel sx={{}}>Interest Rate <span style={{color: "red"}}>*</span> </GlobalInputLabel>
        </Grid>


        <Grid xs={9} sx={{mt: 1.5}}>
            <GlobalTextField sx={{width: 300}} 
            value={interest}
            disabled // Disable the interest input
            onChange={handleInterestChange}/>
        </Grid>




        <Grid item xs={3}  >

        <GlobalInputLabel sx={{  whiteSpace: 'wrap', overflow: 'visible',}}>Tenure (No. of Months) <span style={{color: "red"}}>*</span> </GlobalInputLabel>
        </Grid>


        <Grid xs={9} sx={{mt: 1.5}}>
            <GlobalTextField sx={{width: 300}} placeholder='No. of months'
            value={numeric} onChange={handleNumericInputChange} />
        </Grid>



        {/* <GlobalButton onClick={calculateLoan}
         sx={{width: 200}} >Calculate</GlobalButton> */}

{calculating ? (
  <CircularProgress />
) : (
  <GlobalButton onClick={calculateLoan} sx={{ width: 200 }}>
    Calculate
  </GlobalButton>
)}

        <GlobalButton onClick={handleReset}
        color='success'
         sx={{width: 200, backgroundColor: "#3F3E72",  '&:hover': {
            background: 'rgba(25, 47, 79, 0.8)', // Change the background color on hover
            // Add other styles for hover state if needed
          },}} >Reset</GlobalButton>


        </Grid>

      

        <GlobalConfirm  open={open} handleClose={handleClose} handleOpen={handleOpen} />





        {loanResult && (
  <Box>
    <Typography variant="h6">Loan Calculation Result:</Typography>
    <Typography>
      Interest Amount: {loanResult.interestAmount}
    </Typography>
    <Typography>
      Total Amount: {loanResult.totalAmount}
    </Typography>



  </Box>
)}




      </DashboardPaper>
    </DashboardPageBackground>
  )
}

export default LoanCalculator
