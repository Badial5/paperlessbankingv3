// Sure! Here's an example of how you can create a 
// phone verification timer in React that starts 
// counting from 60 seconds to 0 and then makes a 
// submit button clickable:

// Create a state variable called timer and set it 
// to 60. This will be used to track the current 
// time remaining on the timer.

// Use the useState hook to create a state variable 
// called isTimerRunning and set it to true. This 
//will be used to track whether the timer is 
//currently running or not.

// Use the useEffect hook to start a timer that 
//runs every second and updates the timer state 
//variable. The timer should use the setTimeout 
//function to schedule a function that decrements 
//the timer state variable by 1 and updates the 
//isTimerRunning state variable to false when the 
//timer reaches 0.

// Create a submit button that is initially 
//disabled and use the isTimerRunning state 
//variable to control its disabled state.

// Example:






// import { useState, useEffect } from 'react';

// function PhoneVerificationTimer() {
//   const [timer, setTimer] = useState(10);
//   const [isTimerRunning, setIsTimerRunning] = useState(true);

//   useEffect(() => {
//     if (isTimerRunning) {
//       const timeoutId = setTimeout(() => {
//         setTimer(prevTimer => {
//           if (prevTimer === 0) {
//             setIsTimerRunning(false);
//             return prevTimer;
//           }
//           return prevTimer - 1;
//         });
//       }, 1000);
//       return () => clearTimeout(timeoutId);
//     }
//   }, [isTimerRunning]);

//   return (
//     <>
//       <div>0 : {timer} seconds</div>
//       <button disabled={isTimerRunning}>Submit</button>
//     </>
//   );
// }

// export default PhoneVerificationTimer








// ======================================================================= 

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Container, Paper, styled, TextField, Typography, Button } from "@mui/material";

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
  border: 0;
  border-radius: 3px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  color: white;
  height: 48px;
  padding: 0 30px;
  font-size: 16px;
`;

function PhoneVerificationTimer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(59);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [message, setMessage] = useState("OTP sent to your phone");

  useEffect(() => {
    let interval = null;
    if (minutes === 0 && seconds === 0) {
      clearInterval(interval);
      setIsButtonDisabled(false);
      setIsResendDisabled(true);
    } else {
      interval = setInterval(() => {
        if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [minutes, seconds]);

  const resendOtp = async () => {
    try {
      const res = await axios.post("/api/sendotp", {
        phoneNumber: "your phone number"
      });
      if (res.status === 200) {
        setMinutes(0);
        setSeconds(59);
        setIsButtonDisabled(true);
        setIsResendDisabled(false);
        setMessage("OTP resent to your phone");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <p>{message}</p>
      <p>{minutes} minutes {seconds} seconds remaining</p>
      <StyledButton disabled={isButtonDisabled}>Submit</StyledButton>
      <StyledButton disabled={isResendDisabled} onClick={resendOtp}>
        Resend OTP
      </StyledButton>
    </div>
  );
}

export default PhoneVerificationTimer;
