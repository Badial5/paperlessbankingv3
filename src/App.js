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
 
  import LandingPage from './pages/landingPage/landing-page'
  import UserDashboard from './pages/dashboard/dashboard'


  import PhoneVerificationTimer from './pages/auth/phone-verification/phoneVerificationTimer'

  import PasswordResetOtp from './pages/ResetPassword/PasswordResetOtp/password-reset-otp'

  //CreditCardForm
  import CreditCardForm from './components/creditCard/creditCard'


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

        <Route path='user-dashboard' element={<UserDashboard />} />
        <Route path='landing-page' element={<LandingPage />} />

        <Route path='creditcard' element={<CreditCardForm />} />

      </Route>
    )
  )


  return (
    <div>

      <RouterProvider router={router} />
      
    </div>
  )
}




export default App
