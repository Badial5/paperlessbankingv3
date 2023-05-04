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
  import ErrorPage from './error-page'
import { Box } from '@mui/material'
import BankAppointment from './pages/banks/appointments/appointment'
import LeftDrawer from './pages/dashboard2/dashboard_const/LeftDrawer/LeftDrawer'
import MainDashboard2 from './pages/dashboard2/dashboard2'
import BankBranch from './pages/banks/branch/branch.bank'
import BankTransfer from './pages/banks/transfer/bank.transfer'
import MySchedules from './pages/banks/transfer/MySchedules'
import TransferHistory from './pages/banks/transfer/transfer-history'
import ManageBeneficiary from './pages/banks/transfer/manage-beneficiary'
import OwnAccountTransfer from './pages/banks/transfer/ownAccount'
import ThirdParty from './pages/banks/transfer/thirdParty'
import MyForm from './pages/banks/transfer/reacthooktry'
import AddBeneficiary from './pages/banks/transfer/Beneficiary/addBeneficiary'


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<NavigationRoute />} >    
        // {/* // <Route path='/' element={<TrySignup />} > */} 
        {/* // <Route index element={<SignUpForm />} >  */} 
          {/* <Route path='login' element={<LoginForm />} />  */}
      <Route path="/" element={<SignUpForm />} /> 

      <Route path="signup" element={<SignUpForm />} /> 
        <Route path="phone-Otp" element={<PhoneOtp />} />
        <Route path='login' element={<Login2Form />} /> 
        {/* <Route path='forgotpassword' element={<ForgotPassword />} /> */}
        <Route path='forgotpassword2' element={<ForgotPass2 />} />
        {/* <Route path="otp" element={<OTP />} /> */}
        {/* <Route path="reset-password" element={<ResetPassword />} /> */}
        <Route path="password-reset" element={<ResetPass2 />} />
        {/* <Route path="password-set" element={<PassCongrat2 />} /> */}
        <Route path='password-congratulation' element={<PassCongrats />} />
        <Route path="password-timer" element={<PhoneVerificationTimer />} />

        <Route path='password-reset-otp' element={<PasswordResetOtp />} />

        <Route path='user-dashboard' element={<UserDashboard />}  />
        <Route path='landing-page' element={<LandingPage />} />
        <Route path='dashboard2' element={<MainDashboard2 />}  />

        {/* Enquiry  */}
        <Route path='account-balance' element={<AccountBalance />} />
        <Route path='enquiry-statement' element={<AccountStatement />} />
        <Route path='enquiry-officer-details' element={<AccountOfficerDetails />} />
        <Route path='enquiry-exchange-rate' element={<ExchangeRate />} />

         {/* Accounnt  */}
        <Route path='account-creation' element={<AccountCreation />} />
        <Route path='account-officer' element={<AccountOfficer />}  />


         {/* Bank   */}
         <Route path='bank-appointment' element={<BankAppointment />} />
        {/* <Route path='account-officer' element={<AccountOfficer />}  /> */}

        <Route path='bank-branch' element={<BankBranch />} />

        <Route path='bank-transfer' element={<BankTransfer />} />



        {/* Transfer  */}
        
        <Route path='react-myform' element={<MyForm />} />
        <Route path='third-party-transfer' element={<ThirdParty />} />
        <Route path='own-account-transfer' element={<OwnAccountTransfer />} />
        <Route path='manage-beneficiary' element={<ManageBeneficiary />} />
        <Route path='transfer-history' element={<TransferHistory />} />
        <Route path='my-schedule' element={<MySchedules />} />
        <Route path='add-beneficiary' element={<AddBeneficiary />} />

        



        <Route errorElement={<ErrorPage />} />
      </Route>
    ),

   
  )



  return (
    <Box>

      <RouterProvider router={router} />
      
    </Box>
  )
}




export default App
