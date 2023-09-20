// @mui
import { useTheme } from '@mui/material/styles';

import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { Container, Card, CardContent, Typography, Button, Grid, Paper,  CardActions, Box, Stack, Toolbar } from '@mui/material';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import PaymentCard from 'react-payment-card-component'


import CreditCardForm from './CreditCard/CreditCardForm/CreditCardForm';


import CreditCardImage from './CreditCard/CreditCardImage/CreditCardImage';


import { BankingBalanceStatistics, BankingContacts, BankingCurrentBalance, BankingExpensesCategories, BankingInviteFriends, BankingQuickTransfer, BankingRecentTransitions, BankingWidgetSummary } from '../@dashboard/general/banking';


import { _bankingContacts, _bankingCreditCard, _bankingRecentTransitions } from '../../_mock';


//redux
import { useDispatch, useSelector } from 'react-redux';










import Image1 from "../../assets/images/bank1.jpg"
import Image2 from "../../assets/images/bank2.jpg"
import Image3 from "../../assets/images/bank3.jpg"
import Image4 from "../../assets/images/bank4.jpg"
import Image5 from "../../assets/images/bank5.jpg"
import Image6 from "../../assets/images/bank6.jpg"
import { DashboardPageBackground, GlobalButton, GlobalPaperStyle } from '../../assets/GlobalStyled/Globalstyles';
import RadialBarChart from './dashboard_components/charts/RadialBarChar';
import BalanceOverviewChart from './dashboard_components/charts/BalanceOverviewChart';
import TransactionHistory from './dashboard_components/charts/TransactionHistory';
import AccountSummary from './dashboard_components/charts/AccountSummary.js';
import NoBankAccountCard from './cards/NoAccountFound';
import NoBankAccountCard2 from './cards/NoAccountFound2';
import BarChart from './const/graph/barChart';





const DashboardMainPage = ({balance, onCoverBalance, userAccounts, chartData}) => {

  console.log(userAccounts)

  const dispatch = useDispatch()
  const {userInfo} = useSelector(state => state?.users?.userAuth)
  const userAuth = useSelector(state => state?.users?.userAuth)
  const isLogin = userAuth?.token ? true : false 
  //does the user has an account
  const accountCreated = useSelector(state => state?.users?.profile?.is_active)

    //accessing Profile data from the store
    const userProfile = useSelector(state => state?.users?.profile)

    
  //conditional rendering
  // const bank_accounts = userProfile?.[0]?.bank_accounts || [];

  const bank_accounts = userAccounts


    // const { bank_accounts, phone_number } = userProfile[0]


    console.log("userProfile: ", userProfile)
    console.log("Does the user has an account: ", accountCreated)
    console.log("User has an account: ", bank_accounts)
    // console.log("Phone Number: ", phone_number)

  const theme = useTheme();

  const [creditCardInfo, setCreditCardInfo] = useState({});


  const [accountBalance, setAccountBalance] = useState(1000);

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    // Handle covering balance
  };


  const creditCardData = info => {
    setCreditCardInfo({
      numCard01: info.numCard01Ref,
      numCard02: info.numCard02Ref,
      numCard03: info.numCard03Ref,
      numCard04: info.numCard04Ref,
      nameCard: info.nameCardRef,
      monthCard: info.monthCardRef,
      yearCard: info.yearCardRef,
      ccvCard: info.ccvCardRef
    });
  }


  //Carousel

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop of images
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Autoplay the carousel
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
  };

  const bankingImages = [
    'https://example.com/banking-image1.jpg',
    'https://example.com/banking-image2.jpg',
    'https://example.com/banking-image3.jpg',
    // Add more image URLs as needed
  ];


  const multiSettings = {
    dots: false,
    infinite: true,
    // speed: 500,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true, // Autoplay the carousel
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
  };


  const account = {
    accountName: 'Savings Account',
    accountType: 'Savings',
    accountNumber: '1234-5678-9012-3456',
    balance: 5000.0,
    income: 2000.0,
    expense: 1000.0,
  };

  return (
    <>
    <Toolbar />
    <DashboardPageBackground sx={{justifyContent: "flex-start", height: "auto", borderRadius: 5}}>
    
    <Container maxWidth="lg" sx={{ml: "auto", mr: "auto", height: "auto"}} >

      {bank_accounts.length === 0  ? <>
      
      
<Toolbar />
<Toolbar />
<Toolbar />
        <Grid container spacing={2} style={{ borderRadius: 2, position: "relative" }}>

<Grid item xs={12} md={12}  sx={{ mt: 2, position: "absolute", bottom: 30, width: "100%" }} >

{/* <Grid item xs={12} sx={{bottom: 20}}> */}

<Slider {...multiSettings} >
<div>
  <img src={Image1} width={300} style={{borderRadius: 20}} height={200} alt="Image 1" />
</div>
<div>
  <img src={Image2} alt="Image 2" width={300} style={{borderRadius: 20}} height={200} />
</div>
<div>
  <img src={Image3} alt="Image 3" width={300} style={{borderRadius: 20}} height={200} />
</div>

<div>
  <img src={Image4} alt="Image 4" width={300} style={{borderRadius: 20}} height={200} />
</div>

<div>
  <img src={Image5} alt="Image 5" width={300} style={{borderRadius: 20}} height={200} />
</div>

<div>
  <img src={Image6} alt="Image 5" width={300} style={{borderRadius: 20}} height={200} />
</div>
{/* Add more images as needed */}
</Slider>

</Grid>

{/* <Grid item xs={12} md={12} sx={{mt: 2,}} style={{borderRadius: 20}} >  */}




  {/* end of Grid container  */}
</Grid>


<Grid container>
<Grid item xs={12} md={12} sx={{ mt: -10, borderRadius: 5,  }}>

<Box
                sx={{
                  mt: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center', // Center horizontally
                  minHeight: '80vh', // Adjust this value as needed
                }}
              >
  {/* <Typography textAlign={"center"}>We noticed, You don't have an account</Typography> */}

  <NoBankAccountCard />
  {/* ChatGPT solution  */}
  {/* <NoBankAccountCard2 /> */}


  {/* <br />
  <GlobalButton sx={{background: "#4991ff"}}>
  <Typography sx={{color: "white"}}>Create An Account</Typography>
  </GlobalButton> */}
</Box>


</Grid>
</Grid>
      


      </>  :  

      <>



      
<Toolbar />
<Toolbar />
<Toolbar />
        <Grid container spacing={2} style={{ borderRadius: 2, position: "relative" }}>

<Grid item xs={12} md={12}  sx={{ mt: 2, position: "absolute", bottom: 30, width: "100%" }} >

{/* <Grid item xs={12} sx={{bottom: 20}}> */}

<Slider {...multiSettings} >
<div>
  <img src={Image1} width={300} style={{borderRadius: 20}} height={200} alt="Image 1" />
</div>
<div>
  <img src={Image2} alt="Image 2" width={300} style={{borderRadius: 20}} height={200} />
</div>
<div>
  <img src={Image3} alt="Image 3" width={300} style={{borderRadius: 20}} height={200} />
</div>

<div>
  <img src={Image4} alt="Image 4" width={300} style={{borderRadius: 20}} height={200} />
</div>

<div>
  <img src={Image5} alt="Image 5" width={300} style={{borderRadius: 20}} height={200} />
</div>

<div>
  <img src={Image6} alt="Image 5" width={300} style={{borderRadius: 20}} height={200} />
</div>
{/* Add more images as needed */}
</Slider>

</Grid>

{/* <Grid item xs={12} md={12} sx={{mt: 2,}} style={{borderRadius: 20}} >  */}




  {/* end of Grid container  */}
</Grid>




{/* +===================== ACCOUNT DISPLAY SLIDERS ================================== S */}



{/* ============================ Radia Bar Char ================== ============= */}

<Grid container spacing={2} sx={{ borderRadius: 2, }}>
  
<Grid item xs={12} md={12}  sx={{ mt: 2,  width: "100%" }} >


  
{/* ============================ Radia Bar Char ================== ============= */}

<Grid container spacing={2} sx={{ borderRadius: 2, }}>

  <Grid item xs={12} md={12}  sx={{ mt: 2,  width: "100%" }} >
  
          <AccountSummary 
          account={account}
           />
  
  </Grid>
  

  <Grid item xs={12} md={12}  sx={{ mt: 2,  width: "100%" }} >
  
  <BalanceOverviewChart />

</Grid>

{/* <Grid item xs={6} md={6}  sx={{ mt: 2,  width: "100%" }} >
  
          <RadialBarChart />
  
  </Grid> */}

  <Grid item xs={6} md={6}  sx={{ mt: 2,  width: "100%" }} >
  
        
          <BarChart chartData={chartData} />
  
  </Grid>





<Grid item xs={12} md={12}  sx={{ mt: 2,  width: "100%" }} >
  
  <TransactionHistory />

</Grid>
  
  
  </Grid>



  </Grid>


</Grid>




      

      <Grid container spacing={2} >

            {/* ++++++++++++++++++++++++ CHARTS +++++++++++++++++++++++++++++++++++ */}
    

      <Grid item xs={12} md={12} sx={{mt: 2}} style={{borderRadius: 20}} >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
              <BankingWidgetSummary
                title="Deposit"
                icon={'eva:diagonal-arrow-left-down-fill'}
                percent={2.6}
                total={18765}
                chartData={[111, 136, 76, 108, 74, 54, 57, 84]}
              />

              <BankingWidgetSummary
                title="Expenses"
                color="warning"
                icon={'eva:diagonal-arrow-right-up-fill'}
                percent={-0.5}
                total={8938}
                chartData={[111, 136, 76, 108, 74, 54, 57, 84]}
              />
            </Stack>
          </Grid>


{/* ======================= Radia Bar Char ================================== */}








{/* ============================ CREDIT CARD ==================================  */}

      <Grid item xs={12} md={8}>
            <BankingCurrentBalance list={_bankingCreditCard} />
      </Grid>




{/* ============================= BALANCE STATISTICS ===============================  */}

          <Grid item xs={12} md={8}>
            <Stack spacing={3}>
              {/* <BankingBalanceStatistics
                title="Balance Statistics"
                subheader="(+43% Income | +12% Expense) than last year"
                chartLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']}
                chartData={[
                  {
                    year: 'Week',
                    data: [
                      { name: 'Income', data: [10, 41, 35, 151, 49, 62, 69, 91, 48] },
                      { name: 'Expenses', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
                    ],
                  },
                  {
                    year: 'Month',
                    data: [
                      { name: 'Income', data: [148, 91, 69, 62, 49, 51, 35, 41, 10] },
                      { name: 'Expenses', data: [45, 77, 99, 88, 77, 56, 13, 34, 10] },
                    ],
                  },
                  {
                    year: 'Year',
                    data: [
                      { name: 'Income', data: [76, 42, 29, 41, 27, 138, 117, 86, 63] },
                      { name: 'Expenses', data: [80, 55, 34, 114, 80, 130, 15, 28, 55] },
                    ],
                  },
                ]}
              /> */}

              {/* <BankingExpensesCategories
                title="Expenses Categories"
                chartData={[
                  { label: 'Category 1', value: 14 },
                  { label: 'Category 2', value: 23 },
                  { label: 'Category 3', value: 21 },
                  { label: 'Category 4', value: 17 },
                  { label: 'Category 5', value: 15 },
                  { label: 'Category 6', value: 10 },
                  { label: 'Category 7', value: 12 },
                  { label: 'Category 8', value: 17 },
                  { label: 'Category 9', value: 21 },
                ]}
                chartColors={[
                  // theme.palette.primary.main,
                  // theme.palette.info.darker,
                  // theme.palette.chart.yellow[0],
                  // theme.palette.chart.blue[0],
                  // theme.palette.chart.red[0],
                  // theme.palette.chart.violet[2],
                  // theme.palette.chart.violet[0],
                  // theme.palette.success.darker,
                  // theme.palette.chart.green[0],

                  "red",
                  "yellow"
                ]}
              /> */}

              {/* <BankingRecentTransitions
                title="Recent Transitions"
                tableData={_bankingRecentTransitions}
                tableLabels={[
                  { id: 'description', label: 'Description' },
                  { id: 'date', label: 'Date' },
                  { id: 'amount', label: 'Amount' },
                  { id: 'status', label: 'Status' },
                  { id: '' },
                ]}
              /> */}
            </Stack>
          </Grid>

      
      </Grid>

</>

      
      }
      {/* <Box>
 

        <BankingWidgetSummary />
     

        <PaymentCard
      bank="Calbank"
      model="prime"
      type="black"
      brand="mastercard"
      number="4125563735273526"
      cvv="202"
      holderName="John Smith"
      expiration="12/25"
      flipped={false}
    />

    <Box sx={{mt: 80}}>

      <CreditCardImage creditCardInfo={creditCardInfo} />
      <CreditCardForm creditCardData={creditCardData} />
      </Box>

      </Box> */}


      

      

      {/* Carousels */}
      



  

      
    </Container>


    </DashboardPageBackground>
    </>
  );
};

export default DashboardMainPage
