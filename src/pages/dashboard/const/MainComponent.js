import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
// import AccountCreation from './AccountCreation';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Dashboard } from '@mui/icons-material';

//DASHBOARD MAIN
import DashboardLayout from "../../../layouts/dashboard/index"

import DashboardExtraMain from "../../@dashboard/general/banking/index"


import AccountCreation from '../../account/account-creation';
import AccountOfficer from "../../account/account-officer"
import DashboardHomePage from './GraphDashboard';

import BarChart from './graph/barChart';
import { UserData, UserDepositWithdrawalData } from './data/userData';

//MUI COMPONENTS 
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BankAppointment from '../../banks/appointments/appointment';
import BankBranch from '../../banks/branch/branch.bank';
import AccountBalance from '../../enquiry/accountBalance';


// import BankTransfer from '../../banks/transfer/bank.transfer';
import BTFormContainer from '../../banks/transfer/BankTransfer/BTFormContainer';

// import MySchedules from '../../banks/transfer/MySchedules';
import MSFormContainer from '../../banks/transfer/MySchedule/MSFormContainer';

// import TransferHistory from '../../banks/transfer/transfer-history';
import THFormContainer from '../../banks/transfer/TransferHistory/THFormContainer';

// import ManageBeneficiary from '../../banks/transfer/manage-beneficiary';
import MBFormContainer from '../../banks/transfer/Beneficiary/ManageBeneficiary/MBFormContainer';

// import OwnAccountTransfer from '../../banks/transfer/ownAccount';
import OAFormContainer from '../../banks/transfer/OwnAccount/OAFormContainer';

// import ThirdParty from '../../banks/transfer/thirdParty';
import TPFormContainer from '../../banks/transfer/ThirdParty/TPFormContainer';


// import AddBeneficiary from '../../banks/transfer/Beneficiary/addBeneficiary';
import ABFormContainer from '../../banks/transfer/Beneficiary/AddBeneficiary/ABformContainer';

//Request
import ChequeBookRequest from '../../banks/request/ChequeBook/ChequeBookFormContainer.jsx';

import RegisterMobileBanking from '../../banks/request/RegisterMobileMoney/RMMFormContainer.jsx';

import EStatementAlert from '../../banks/request/E-Statement/ESFormContainer.jsx';

import ESubcriptionAlert from '../../banks/request/ESubcription/ESubFormContainer.jsx';

import ChangeMobilePin from '../../banks/request/ChangeMobilePin/CMPFormContainer';

import RequestHistory from '../../banks/request/RequestHistory/RHFormContainer.jsx';

import StopCheque from '../../banks/request/StopCheque/SCFormContainer.jsx';



//CARD SERVICE
import DebitCard from '../../banks/card/debit-card-request';
import BlockCard from '../../banks/card/block-card';
import UnblockCard from '../../banks/card/unblock-card';
import AmendCard from '../../banks/card/amend-card';
import PrepaidCardRequest from '../../banks/card/prepaid-card.jsx'
import CardStatement from '../../banks/card/card-statement';
import AccountMain from '../../account/AccountMain';
import MainAccount from '../../account/MainAccount';

//Multi-Step Page 
import MultiStepForm from '../../account/MultiStepPage';
import MainAccount2 from '../../account2/MainAccount';
import AccountFormContainer from '../../account3/MainAccount';
import FormContainer from '../../account4/formContainer';
import AccountOfficerDetails from '../../enquiry/accountOfficerDetails';
import ExchangeRate from '../../enquiry/exchangeRate';



//Account-settings
// import AccountSettings from "../../../pages/@dashboard/user/account/index" 

import AccountSettings2 from '../../AccountSettings/AccountSettings';



import BankingDashboard from "../../@dashboard/general/banking/index"
import GeneralBanking from '../../@dashboard/general/banking/BankingDashbord';
import DashboardPage from '../dashboardProgress';
import NewBillPayment from '../../banks/payments/New_Bill/NewBill';
import PaymentHistory from '../../banks/payments/History/Payment_history';


//MY LOANS
import MyLoan from '../../banks/Loans/MyLoans/MyLoan';
import LoanRequestHistory from '../../banks/Loans/LoanRequestHistory/LoanRequestHistory';
import LoanSnapCash from '../../banks/Loans/SnapCash/LoanSnapCash';
import LoanManagement from '../../banks/Loans/LoanManagement/LoanManagement';
import LoanRequest from '../../banks/Loans/LoanRequest/LoanRequest';
import LoanCalculator from '../../banks/Loans/LoanCalculator/LoanCalculator';
import TBill from '../../Investment/TBill/TBill';
import FixedDeposit from '../../Investment/FixedDeposit/FixedDeposit';
import SuperSaveRequest from '../../Investment/SuperSave/SuperSaveRequest';
import MyInvestment from '../../Investment/MyInvestment/MyInvestment';
import InvestmentRequestHistory from '../../Investment/InvestmentRequestHistory/InvestmentRequestHistory';
import DashboardMainPage from '../DashboardMain';




const DefaultContent = () => {
  return <>
    DEFAULT CONTENT
  </>
}

const GamesContent = () => {
  return <div style={{background: "yellow", color: "white", fontSize: 50}}>
          <h1>Games Content</h1>
  </div>
}

const MainContent = ({ title, children, selectedOption, userProfile, userAccounts }) => {
  const location = useLocation();

  console.log(userAccounts)

  let content;

  const [userData, setUserData] = useState({
    labels: UserData.map(data => data.year ),
    datasets: [{
      label: "Deposit",
      data: UserData.map(data=> data.userGain),
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 2,
    }, 

    {
      label: "Withdrawal",
      data: UserData.map(data=> data.userLost),
      backgroundColor: [
        "#2a71d0",
        "#50AF95",
        "#ecf0f1",
        "rgba(75,192,192,1)",
        "#f3ba2f",
        
      ],
      borderColor: "black",
      borderWidth: 2,
    }, 


  
  ],
  })

  const [userTransaction, setUserTransaction] = useState({
    labels: UserDepositWithdrawalData.map(data => data.month ),

    datasets: [{
      label: "Deposit",
      data: UserDepositWithdrawalData.map(data=> data.deposit),
      backgroundColor: [
        // "rgba(75,192,192,1)",
        // "#ecf0f1",
        // "#50AF95",
        // "#f3ba2f",
        // "#2a71d0",

        // "#9747FF"
        //blue color
        // "#00BFFF",
        "#4991ff"
        // `linear-gradient(180deg, #FFD572 0%, #FEBD38 100%)`
      ],
      
      // borderColor: "black",
      // borderWidth: 2,
    }, 

    {
      label: "Withdrawal",
      data: UserDepositWithdrawalData.map(data=> data.withdrawal),
      backgroundColor: [
        // "#2a71d0",
        // "#50AF95",
        // "#ecf0f1",
        // "rgba(75,192,192,1)",
        // "#f3ba2f",

        "#FFD572"
        
      ],
      // borderColor: "black",
      // borderWidth: 2,
    }, 


  
  ],
  })

  switch (selectedOption) {
    //enquiry
    // case 'account-balance':
    //   content = <div style={{minWidth: "100%"}}> <AccountBalance /> </div>
    //   break;

    //ENQUIRY 
    case 'account-balance':
      content = <div style={{minWidth: "100%"}}> <AccountBalance /> </div>
      break;

      case 'account-officer':
        content = <div style={{width: "100%"}}> <AccountOfficer /> </div>
        break;

        case 'exchange rates':
        content = <div style={{width: "100%"}}> <ExchangeRate /> </div>
        break;
  

    case 'account-create':
      content = <div style={{minWidth: "100%"}}> <FormContainer /> </div>
      break;

    // case 'account-creation':
    //   content = <div style={{minWidth: "100%"}}> <AccountCreation /> </div>
    //   break;

    case 'account-creation':
      content = <div style={{minWidth: "100%"}}> <MainAccount /> </div>
      break;

      // case 'account-creation':
      //   content = <div style={{minWidth: "100%"}}> <MainAccount2 /> </div>
      //   break;

      // case 'account-creation':
      //   content = <div style={{minWidth: "100%"}}> <AccountMain /> </div>
      //   break;


        // case 'account-creation':
        //   content = <div style={{minWidth: "100%"}}> <MultiStepForm /> </div>
        //   break;

        // case 'account-creation':
        //   content = <div style={{minWidth: "100%"}}> <AccountFormContainer /> </div>
        //   break;

        // case 'account-creation':
        //   content = <div style={{minWidth: "100%"}}> <FormContainer /> </div>
        //   break;


        //Old Account Officer Details
    // case 'account-officer':
    //   content = <div style={{width: "100%"}}> <AccountOfficer /> </div>
    //   break;


   
      case 'bank-appointment':
      content = <BankAppointment />;
      break;

      case 'bank-branch':
        content = <BankBranch />;
        break;



        
        // Transfer ===================================================

        // case 'third-party-transfer':
        //   content = <ThirdParty />;
        //   break;

        case 'third-party-transfer':
          content = <TPFormContainer />;
          break;
        
        // case 'own-account-transfer':
        //   content = <OwnAccountTransfer />;
        //   break;

        case 'own-account-transfer':
          content = <OAFormContainer />;
          break;

        // case 'manage-beneficiary':
        //   content = <ManageBeneficiary />;
        //   break;

        case 'manage-beneficiary':
          content = <MBFormContainer />;
          break;

        // case 'transfer-history':
        // content = <TransferHistory />;
        // break;

        case 'transfer-history':
          content = <THFormContainer />;
          break;


    //  case 'bank-transfer':
    //     content = <BankTransfer />;
    //     break;

    case 'bank-transfer':
        content = <BTFormContainer />;
        break;


      // case 'my-schedule':
      //   content = <MySchedules />;
      //   break;

      case 'my-schedule':
        content = <MSFormContainer />;
        break;

        // case 'add-beneficiary':
        //   content = <AddBeneficiary />;
        //   break;

        case 'add-beneficiary':
          content = <ABFormContainer />;
          break;




          // =========== REQUEST  ================================== 

          case 'chequebook-request':
            content = <ChequeBookRequest />;
            break;


            case 'register-mobile-banking':
            content = <RegisterMobileBanking />;
            break;

            case 'e-subscription-alert':
              content = <ESubcriptionAlert />;
              break;


              case 'stop-cheque':
                content = <StopCheque />;
               break;


              case 'e-statement-subscription':
                content = <EStatementAlert />;
                break;

            case 'change-mobile-banking':
               content = <ChangeMobilePin />;
              break;

              case 'request-history':
                content = <RequestHistory />;
               break;



// +++++++++++++++++++++++ PAYMENT ++++++++++++++++++++++++++++++++++++++

              case 'new-bill-paymment':
                content = <NewBillPayment />;
               break;


               case 'payment-history':
                content = <PaymentHistory />;
               break;



                // ========================== DEBIT CARD SERVICE =================================== 
                case 'debitcard-service':
                  content = <DebitCard />;
                 break;


                 case 'block-card':
                  content = <BlockCard />;
                 break;


                 case 'amend-card':
                  content = <AmendCard />;
                 break;


                 case 'unblock-card':
                  content = <UnblockCard />;
                 break;


                 case 'prepaid-card-request':
                  content = <PrepaidCardRequest />;
                 break;


                 case 'card-statement':
                  content = <CardStatement />;
                 break;


                //  case 'account-settings':
                //   content = <AccountSettings />;
                //  break;


                case 'account-settings':
                  content = <AccountSettings2 />;
                 break;





            // +++++++++++++++++++++ LOAN SERVICE COMPONENTS ===================== 

            case 'myloan':
                  content = <MyLoan />;
                 break;



                 case 'loanrequest-history':
                  content = <LoanRequestHistory />;
                 break;


                 case 'loansnapcash':
                  content = <LoanSnapCash />;
                 break;


                 case 'loanmanagement':
                  content = <LoanManagement />;
                 break;


                 case 'loanrequest':
                  content = <LoanRequest />;
                 break;


                 case 'loancalculator':
                  content = <LoanCalculator />;
                 break;







// ++++++++++++++++++++++++++ INVESTMENT ++++++++++++++++++++++++++++

                  case 'tbill':
                    content = <TBill />;
                  break;


                  case 'fixed-deposit':
                    content = <FixedDeposit />;
                  break;

                  case 'supersave-request':
                    content = <SuperSaveRequest />;
                  break;

                  case 'my-investment':
                    content = <MyInvestment />;
                  break;

                  case 'investment-request-history':
                    content = <InvestmentRequestHistory />;
                  break;





  



    // default:
    //   content = <DefaultContent />;
    //   break;

    // default:
    //   content = 
    //   <div style={{width: "100%"}}>
    //   <BarChart chartData={userTransaction} />
    //   </div>
    //   break;


    default:
      content = 
      <div style={{width: "100%"}}>
      {/* <BarChart chartData={userTransaction} />   */}

      {/* <DashboardHomePage /> */}

      { console.log(userProfile) }

      <DashboardMainPage userProfile={userProfile} userAccounts={userAccounts} /> 

      {/* <DashboardExtraMain />  */}

      {/* <DashboardLayout />  */}

      {/* <DashboardPage  />  */}
      </div>
      break;


    // default:
    //   content = 
    //   <div style={{width: "100%"}}>
    //   <BarChart chartData={userTransaction} /> 
    //   {/* <DashboardPage  />  */}
    //   </div>
    //   break;





    // default:
    //   content = 
    //   <div style={{width: "100%"}}>
    //   <BarChart chartData={userTransaction} />
    //   </div>
    //   break;


    // default:
    //   content = 
    //   <div style={{width: "100%"}}>
    //   <GeneralBanking />
    //   </div>
    //   break;
  }

  return (
    <>
   
    <Box sx={{ width: "60vw", background: "#F4F7FF", height: "auto" }}>
   
    {/* <AppBar position="static" 
      sx={{background: "#FBFCFC", color: "#000", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
      borderRadius: 1, display: "flex", justifyContent: "center"}} >
        <Toolbar>
          <Dashboard />
        

          <Box sx={{display: "flex", justifyContent: "flex-end", ml: "auto", 
         }}>

            <Box sx={{display: "flex", justifyContent: "space-between"}}>
              <Typography sx={{fontSize: 8, border: "1px solid #4991ff", borderRadius: 2,
            mr: 20,  p: 1}}>
                Retail Banking
              </Typography>

          <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", 
        mr: 5}}>

            <LocationOnOutlinedIcon />

            <Box sx={{display: "flex", flexDirection: "column", columnGap: 20}}>
              <Typography sx={{fontSize: 8, }}>  
              154.160.9.122
              </Typography>

              <Typography sx={{fontSize: 8, }}>  
              Last Login IP
              </Typography>
            </Box>

          </Box>

          <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>

<AccessTimeIcon />

<Box sx={{display: "flex", flexDirection: "column"}}>
  <Typography sx={{fontSize: 8, }}>  
    15-Mar-2023 02 15 AM
  </Typography>

  <Typography sx={{fontSize: 8, }}>  
    Last Login Date 
  </Typography>
</Box>

</Box>

          </Box>

          </Box>

        </Toolbar>
      </AppBar> */}

      <Toolbar />

    

      
      




      <Box sx={{ p: 2, }}>
        {/* {location.pathname === '/account-creation' && <AccountCreation />} */}
        {/* {location.pathname === '/account-officer' && <AccountOfficer />} */}

        {content}
        <Outlet /> 

      </Box>
    </Box>

    </>
  );
};
export default MainContent;