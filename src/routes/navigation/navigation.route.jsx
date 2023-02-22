import React from 'react'
import { Box, Link } from '@mui/material'

//react router dom 6.6.1
import { Link as RouterLink, Outlet } from 'react-router-dom'


const NavigationRoute = () => {
  return (
    <>
    <Box component="form" >

    <Link component={RouterLink} to="/">
            Home
    </Link>

        <Link component={RouterLink} to="phone-Otp">
            Phone
        </Link>

        <Link component={RouterLink} to="login">
            Login
        </Link>

        {/* <Link component={RouterLink} to="password-timer">
            Timer
        </Link> */}

        {/* <Link component={RouterLink} to="forgotpassword">
            ForgotPassword
        </Link> */}

        <Link component={RouterLink} to="forgotpassword2">
            ForgotPassword2
        </Link>

        <Link component={RouterLink} to="password-reset">
            ResetPass
        </Link>

        <Link component={RouterLink} to="password-congratulation">
            Pass Congratulation
        </Link>

        <Link component={RouterLink} to="user-dashboard">
            User Dashboard
        </Link>
        
    </Box>

        <Outlet />
    </>
  )
}

export default NavigationRoute
