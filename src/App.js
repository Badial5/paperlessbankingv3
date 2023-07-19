import React from 'react'

//react router dom 6.6.1
import { createBrowserRouter, createRoutesFromElements,
  RouterProvider, Route, Link } from 'react-router-dom'

//style
import "./App.css"


  //pages
  import SignUpForm from './pages/auth/sign-up/signup.page'
  import PhoneOtp from './pages/auth/phone-verification/phone-verification'
  import NavigationRoute from './routes/navigation/navigation.route'
  import LoginForm from './pages/auth/login/login-page'
  // import ForgotPassword from './pages/auth/forgotPass/forgot-pass'

  // import SignupContainer from './pages/auth/sign-up/signupContainer'
  

  // import TrySignup from './pages/auth/sign-up/try-signup'



  //OTP
  // import OTP from './pages/auth/otp'

  //reset password
  // import ResetPassword from './pages/auth/forgotPass/reset-pass'
  // import ResetPassword from './pages/ResetPassword/reset-pass'
  import ResetPass2 from './pages/ResetPassword/resetPass2'
  import PassCongrats from './pages/PassCongrat/pass-congrats'
  //password set congratulation message
  // import PassCongratulation from './pages/auth/forgotPass/passCongratulation'

  //TESTING ROUTES
  import Login2Form from './pages/auth/login/login2'
  import ForgotPass2 from './pages/auth/forgotPass/forgotPass2'
  // import ResetPass2 from './pages/auth/forgotPass/resetPass2'
  // import PassCongrat2 from './pages/auth/forgotPass/PassCongrat2'

  //Dashboard 
  import LandingPage from './pages/dashboard/landing-page'
  import UserDashboard from './pages/dashboard/dashboard'


  import PhoneVerificationTimer from './pages/auth/phone-verification/phoneVerificationTimer'

  import PasswordResetOtp from './pages/ResetPassword/PasswordResetOtp/password-reset-otp'

  //Enquiry
  import AccountBalance from './pages/enquiry/accountBalance'
  import AccountStatement from "./pages/enquiry/accountStatement"
  import AccountOfficerDetails from "./pages/enquiry/accountOfficerDetails"
  import ExchangeRate from "./pages/enquiry/exchangeRate"
  


  //Account Creation
  import AccountCreation from './pages/account/account-creation'
  import AccountOfficer from './pages/account/account-officer'

  //Error Page
  // import ErrorPage from './error-page'

  import ErrorPage from './ErrorPage/ErrorPage'



import { Box } from '@mui/material'
import BankAppointment from './pages/banks/appointments/appointment'
import LeftDrawer from './pages/dashboard2/dashboard_const/LeftDrawer/LeftDrawer'
import MainDashboard2 from './pages/dashboard2/dashboard2'

import BankBranch from './pages/banks/branch/branch.bank'

import BankTransfer from './pages/banks/transfer/BankTransfer/BTFormContainer'
import MySchedules from './pages/banks/transfer/MySchedule/MSFormContainer'
import TransferHistory from './pages/banks/transfer/TransferHistory/THFormContainer'

import ManageBeneficiary from './pages/banks/transfer/Beneficiary/ManageBeneficiary/MBFormContainer'
import OwnAccountTransfer from './pages/banks/transfer/OwnAccount/OAFormContainer'
import ThirdParty from './pages/banks/transfer/ThirdParty/TPFormContainer'
import AddBeneficiary from './pages/banks/transfer/Beneficiary/AddBeneficiary/ABformContainer'




import MyForm from './pages/banks/transfer/reacthooktry'




//Request
import ChequeBookRequest from './pages/banks/request/ChequeBook/ChequeBookFormContainer.jsx'

import RegisterMobileBanking from './pages/banks/request/RegisterMobileMoney/RMMFormContainer.jsx'

import ESubcriptionAlert from './pages/banks/request/ESubcription/ESubFormContainer.jsx'

import EStatementAlert from './pages/banks/request/E-Statement/ESFormContainer.jsx'

import ChangeMobilePin from './pages/banks/request/ChangeMobilePin/CMPFormContainer.jsx'
import RequestHistory from './pages/banks/request/RequestHistory/RHFormContainer.jsx'

import StopCheque from './pages/banks/request/StopCheque/SCFormContainer.jsx'



import DebitCard from './pages/banks/card/debit-card-request'
import BlockCard from './pages/banks/card/block-card'
import UnblockCard from './pages/banks/card/unblock-card'
import AmendCard from './pages/banks/card/amend-card'
import PrepaidCardRequest from './pages/banks/card/prepaid-card'
import CardStatement from './pages/banks/card/card-statement'
import AccountMain from './pages/account/AccountMain'
import MainAccount from './pages/account/MainAccount12'


//MUlti Step Page
import MultiStepForm from './pages/account/MultiStepPage'
import RootLayout from './RootLayout'


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      
    //   <Route path='/' element={<NavigationRoute />} >    
    //     // {/* // <Route path='/' element={<TrySignup />} > */} 
    //     {/* // <Route index element={<SignUpForm />} >  */} 
    //       {/* <Route path='login' element={<LoginForm />} />  */}
    //   <Route path="/" element={<SignUpForm />} /> 

    //   <Route path="signup" element={<SignUpForm />} /> 
    //     <Route path="phone-Otp" element={<PhoneOtp />} />
    //     <Route path='login' element={<Login2Form />} /> 
    //     {/* <Route path='forgotpassword' element={<ForgotPassword />} /> */}
    //     <Route path='forgotpassword2' element={<ForgotPass2 />} />
    //     {/* <Route path="otp" element={<OTP />} /> */}
    //     {/* <Route path="reset-password" element={<ResetPassword />} /> */}
    //     <Route path="password-reset" element={<ResetPass2 />} />
    //     {/* <Route path="password-set" element={<PassCongrat2 />} /> */}
    //     <Route path='password-congratulation' element={<PassCongrats />} />
    //     <Route path="password-timer" element={<PhoneVerificationTimer />} />

    //     <Route path='password-reset-otp' element={<PasswordResetOtp />} />

      
    //     <Route path='user-dashboard' element={<UserDashboard />}  />
    //     <Route path='landing-page' element={<LandingPage />} />
    //     <Route path='dashboard2' element={<MainDashboard2 />}  />

    //     {/* Enquiry  */}
    //     <Route path='account-balance' element={<AccountBalance />} />
    //     <Route path='enquiry-statement' element={<AccountStatement />} />
    //     <Route path='enquiry-officer-details' element={<AccountOfficerDetails />} />
    //     <Route path='enquiry-exchange-rate' element={<ExchangeRate />} />

    //      {/* Accounnt  */}
         
    //     {/* <Route path='account-creation' element={<AccountCreation />} /> */}
    //     <Route path='account-officer' element={<AccountOfficer />}  />
    //     {/* <Route path='account-creation' element={<AccountMain />} /> */}

    //     <Route path='account-creation' element={<MainAccount />} />
        


    //      {/* Bank   */}
    //      <Route path='bank-appointment' element={<BankAppointment />} />
    //     {/* <Route path='account-officer' element={<AccountOfficer />}  /> */}

    //     <Route path='bank-branch' element={<BankBranch />} />

    //     <Route path='bank-transfer' element={<BankTransfer />} />



    //     {/* Transfer  */}
        
    //     <Route path='react-myform' element={<MyForm />} />
    //     <Route path='third-party-transfer' element={<ThirdParty />} />
    //     <Route path='own-account-transfer' element={<OwnAccountTransfer />} />
    //     <Route path='manage-beneficiary' element={<ManageBeneficiary />} />
    //     <Route path='transfer-history' element={<TransferHistory />} />
    //     <Route path='my-schedule' element={<MySchedules />} />
    //     <Route path='add-beneficiary' element={<AddBeneficiary />} />



    //     {/* Request  */}
    //     <Route path='chequebook-request' element={<ChequeBookRequest />} />
    //     <Route path='register-mobile-banking' element={<RegisterMobileBanking />} />
    //     <Route path='e-subscription-alert' element={<ESubcriptionAlert />} />
    //     <Route path='stop-cheque' element={<StopCheque />} />
    //     <Route path='e-statement-subscription' element={<EStatementAlert />} />
    //     <Route path='change-mobile-banking' element={<ChangeMobilePin/>} />
    //     <Route path='request-history' element={<RequestHistory/>} />




    //      {/* Request  */}
    //      <Route path='debitcard-service' element={<DebitCard />} />
    //      <Route path='block-card' element={<BlockCard />} />
    //      <Route path='amend-card' element={<AmendCard />} />
    //      <Route path='unblock-card' element={<UnblockCard />} />
    //      <Route path='prepaid-card-request' element={<PrepaidCardRequest />} />
    //      <Route path='card-statement' element={<CardStatement />} />

        



    //     <Route errorElement={<ErrorPage />} />
    //   </Route>
    // ),

    // [
    //   {
    //     path: "/",
    //     element: <SignUpForm />,
    //     errorElement: <ErrorPage />,


    //     children: [
        

    //     ]


    //   },

    
    //   {
    //     path: "login",
    //     element: <Login2Form />,
    //     errorElement: <ErrorPage />,
    //   },

    //   {
    //     path: "forgotpassword2",
    //     element: <ForgotPass2 />,
    //     errorElement: <ErrorPage />,
    //   },

    //   {
    //     path: "phone-Otp",
    //     element: <PhoneOtp />,
    //     errorElement: <ErrorPage />,
    //   },

    //   {
    //     path: "user-dashboard",
    //     element: <UserDashboard />,
    //     errorElement: <ErrorPage />,

    //     children: [
    //       {
    //         path: 'account-creation',
    //         element: <AccountCreation />,
    //         errorElement: <ErrorPage />
    //       },

          
    //     ]
    //   },


     



    // ]

    <Route path='/' element={<RootLayout />} errorElement={<ErrorPage />} >

      <Route index element={<SignUpForm />} errorElement={<ErrorPage />} />

      <Route path='phone-Otp' element={<PhoneOtp />} errorElement={<ErrorPage />} />

      <Route path='login' element={<Login2Form />} errorElement={<ErrorPage />} />

      <Route path='forgotpassword2' element={<ForgotPass2 />} errorElement={<ErrorPage />} />

      <Route path='password-reset-otp' element={<PasswordResetOtp /> } errorElement={<ErrorPage />} />

      <Route path="password-reset" element={<ResetPass2 />} errorElement={<ErrorPage />} />


          {/* USER DASHBOARD  */}

      <Route path="user-dashboard" element={<UserDashboard />} errorElement={<ErrorPage />} /> 




    </Route>

    )
  )

  return (
    <Box>

      <RouterProvider router={router} />
      
    </Box>
  )
}




export default App
