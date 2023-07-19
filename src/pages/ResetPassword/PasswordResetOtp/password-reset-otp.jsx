import { Box, Button, TextField, Typography, Collapse, Grid } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useForm, } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { EmailContext } from '../../../context/emailContext'; 


//React Toasify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





// =========================== REACT ANIMATION SPINNER =========================================
//REACT ANIMATION SPINNER 
// import { ClipLoader } from 'react-spinners/ClipLoader';
import {  BarLoader, ClipLoader, CircleLoader, ClimbingBoxLoader, ClockLoader, DotLoader, FadeLoader, GridLoader, HashLoader, MoonLoader, PacmanLoader, PropagateLoader, PuffLoader, PulseLoader, RingLoader, RiseLoader, RotateLoader, ScaleLoader, SkewLoader, SquareLoader, SyncLoader } from 'react-spinners';






//Image
import signupImg from "../../../assets/images/signup2.jpg"

// import { PaperWrapper, InlaksText, PageHeader,
//   SubTitle, SixDigitBox, SixDigitTextField, IdidntReceive,
//   ResendCode, ButtonSubmit, PageHeaderAndTitleContainer,
  
//  } from "../phone.styles.js"
// import { ContainerWrapper, ErrorAlert, ErrorAlertText } from '../sign-up/signup.styles';

import { GlobalButton, GlobalDigitTextField, GlobalInlaksText, GlobalPageBackground, GlobalPageHeader, GlobalPaperStyle, GlobalSubPageHeader } from '../../../assets/GlobalStyled/Globalstyles';
import CircularIndeterminate from '../../../assets/GlobalAnimation/ButtonAnimation/LoadingButton';
import { IdidntReceiveBox, ResendCode } from '../../auth/phone-verification/phone.styles';

 //I will work on it later during the clean code stage 
 // or optimization period
//  import OtpTimerConst from './const/Timer';


// const baseUrl = "https://api.inlakssolutions.com/accounts/v1/signup/"

// const resendOtpUrl = "https://api.inlakssolutions.com/accounts/v1/resend-activation-otp/"

// const activateAccount = "https://api.inlakssolutions.com/accounts/v1/activate-account/"

const resendOtpUrl = "https://banking-api.inlakssolutions.com/accounts/v1/password-reset-otp/"
const resetOtp = "https://banking-api.inlakssolutions.com/accounts/v1/confirm-password-reset-otp/"











const PasswordResetOtp = () => {

  const [errorApi, setErrorApi] = useState(null)

  // const { register, trigger, formState: { errors } } = useForm();

    // REACT COMPONENT USENAVIGATE
    const navigate = useNavigate();


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //react hookform 
  const { handleSubmit, register, watch, setValue, formState: {errors, isValid, isSubmitting}, reset, trigger } = useForm({
    mode: "onTouched",
    defaultValues: {
      otp: "",
      email: "",
      field1: '',
      field2: '',
      field3: '',
      field4: '',
      field5: '',
      field6: ''
      
      // password2: "",
      // tnc: ""
    }
  })


  //============================= SESSION STORAGE ==============================================
  const [sessionalEmail, setSessionalEmail] = useState(null);

  //=================================== useEffect ===========================================

  // useEffect(() => {
  //   setStoredEmail(sessionStorage.getItem("sessionEmail"));
  // }, []);

  useEffect(() => {

    // Read data from sessionStorage on component mount
    const storedData = sessionStorage.getItem('sessionEmail');
    setSessionalEmail(storedData);

    // Update sessionStorage when the data changes
    sessionStorage.setItem('sessionEmail', storedData);

  }, [])


  // const EmailPassword =  setStoredEmail(sessionStorage.getItem("sessionEmail"));



  // console.log("Session Storage Email Value: ", storedEmail)



  // setStoredEmail(getEmail)

  // const sessionEmail = sessionStorage.getItem("sessionEmail")
  // console.log("Get Session Email: ", sessionEmail)

  // console.log("Session Storage Email Value: ", storedEmail)

  // console.log("Get Session Stroage: ", getEmail)

  //error state
// const [error, setError] = useState(null) 

//OPEN OR CLOSE
const [open, setOpen] = useState(true);


  //SIX DIGITS INPUTS 
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const [value3, setValue3] = useState("")
  const [value4, setValue4] = useState("")
  const [value5, setValue5] = useState("")
  const [value6, setValue6] = useState("")

  const [finalotp, setFinalOtp] = useState("")

  //Resend code ============================================================

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(59);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [message, setMessage] = useState("OTP sent to your phone");

  const [error, setError] = useState(null)

  const [input, setInput] = useState('') // For input

// =========================================================================



// REACT SPINNER ANIMATION ===========================+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const [loadingInProgress, setLoadingInProgress] = useState(false);



// ===============================+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




useEffect(() => {
  setLoadingInProgress(true)
  const timer = setTimeout(() => {
    setLoadingInProgress(false);
  }, 3000);

  return () => clearTimeout(timer);
}, []);






//useEffect for the Timer function
useEffect(() => {
  let interval = null;
  if (minutes === 0 && seconds === 0) {
    clearInterval(interval);
    setIsButtonDisabled(!isButtonDisabled);
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




// end of useEffect time function =======================================



// UseEffect for the Timer Function =====================================
  // useEffect(() => {
  //   setFinal(value1 + value2 + value3 + value4 + value5 + value6)
  //   }, [])

    // console.log("Final Value: ", final)




  // Resend OTP code function ========================================================= 


  const resendOtp = async () => {
    try {
      // const res = await axios.post("/api/sendotp", {
      //   phoneNumber: "your phone number"
      // });

      const res = await axios.post(resendOtpUrl, {
        // email: storedEmail,
        email: sessionalEmail,
        
      } );

      if (res.status === 200) {
        setMinutes(0);
        setSeconds(59);
        setIsButtonDisabled(true);
        setIsResendDisabled(false);
        setMessage("OTP resent to your email");
      }
    } catch (error) {
      // setError(error.response.data)

      setErrorApi(error.response.data);
      console.log("Call to the API returns: ", errorApi);

      Object.values(errorApi).forEach(errors => {
        errors.forEach(errorMessage => {
          toast.error(errorMessage); // Display each error message using toast.error()

          // console.log("Error inside the Inner ForEach: ", errorMessage )
        });
      });

      console.log("OTP Resend Error Message: ", error.response.data)
    }
  };


  // end of resend otp code =============================================================== 


//resend func ######################################

const handleTyping1 =  (e) => {
  setValue1(e.target.value)

  const elementInput2 = document.getElementById("2");
  elementInput2.focus()
}


  const handleTyping2 =  (e) => {
    setValue2(e.target.value)

    const elementInput2 = document.getElementById("3");
    elementInput2.focus()
  }

  const handleTyping3 =  (e) => {
    setValue3(e.target.value)

    const elementInput2 = document.getElementById("4");
    elementInput2.focus()
  }


  const handleTyping4 =  (e) => {
    setValue4(e.target.value)

    const elementInput2 = document.getElementById("5");
    elementInput2.focus()
  }


  const handleTyping5 =  (e) => {
    setValue5(e.target.value)
    // setIsButtonDisabled(false)

    const elementInput2 = document.getElementById("6");
    elementInput2.focus()
   
  }

  const handleTyping6 =  (e) => {
    setValue6(e.target.value)

    const elementInput2 = document.getElementById("6");
    elementInput2.focus()

    setIsButtonDisabled(!isButtonDisabled)
    // setIsButtonDisabled(false)

    console.log("isButtonDisabled in handleTyping6: ", isButtonDisabled)
  }


 
 // when input is changing this function will get called
 const onChange = (e) => {
  setInput((prevState) => (e.target.value))
  if(e.target.value.trim().length < 1) {   // Checking the length of the input
    setIsButtonDisabled(true)  // Disabling the button if length is < 1
  } else {
    setIsButtonDisabled(false)
  }
}



// SUBMIT PHONE DATA ==========================================================================================


const datas = `${value1}${value2}${value3}${value4}${value5}${value6}`;

console.log("Data OTP: ", datas)


// ============================= TESTING ================================================================================


// const onSubmit = async (data) => {
//   console.log("Form Data: ", data)
//   // registerForm()
//   // reset()

//   try {
//     const response = await axios.post(activateAccount, {
//       email: storedEmail,
//       otp: data.otp,

      
//     })
   
//     console.log("OTP Form Submitted", response);
//     navigate("/user-dashboard")
 
 

//   } catch (error) {
//     setError(error.response.data)
//     console.log("Error Message: ", error.response.data)
//   }


// }


const onSubmit = async (data) => {
  sessionStorage.setItem("email", data.email);
  console.log("Form Data: ", data);

  try {
        const response = await axios.post(resetOtp, {
          // email: storedEmail,
          email: sessionalEmail,
          otp: data.otp,
          
          
        })
       
        // setValue("otp", data.datas)

    

    console.log("FORM SUBMITTED: ", response)
    
    reset();
    console.log('Before toast.success'); // Check if this log is printed in the console
    toast.success("Thank You for authentication")
    
    // navigate("/user-dashboard");

    navigate("/password-reset")


  } catch (error) {

    setErrorApi(error.response.data);
    console.log("Call to the API returns: ", errorApi);

    Object.values(errorApi).forEach(errors => {
      errors.forEach(errorMessage => {
        toast.error(errorMessage); // Display each error message using toast.error()

        // console.log("Error inside the Inner ForEach: ", errorMessage )
      });
    });
    console.log("Error Api: ", errorApi);
  }
}







// =============================================================================================================


 //REACT SPINNER+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 const Spinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${signupImg})`,
        backgroundPosition: 'center',
        // backgroundSize: 'cover', 
        objectFit: "cover",
      }}
    >
      <GridLoader color="#8F45F2" size={25} />
    </Box>
  );
};









  return (


    <>

{loadingInProgress ? (
        <Spinner />
      ) : 
      
      (



    <>

{/* ===================================================================================  */}


      
<GlobalPageBackground>


    <GlobalInlaksText>
        Inlaks
      </GlobalInlaksText>



{/* =======================================================================================  */}
      

{/* ============================================================================================  */}


<GlobalPaperStyle elevation={20} sx={{mb: 15, width: "30%"}} >

  

<GlobalPageHeader sx={{marginLeft: 'auto', marginRight: 'auto', marginBottom: 1}}  >
          Verify Your Email
</GlobalPageHeader>

<GlobalSubPageHeader sx={{marginLeft: 'auto', marginRight: 'auto', marginBottom: 1}}>
Enter the 6 digit code sent to your email account:
</GlobalSubPageHeader>

{/* ====================================ERROR ALERT =====================================================  */}




{/* =================================END OF ERROR ALERT ============================================================  */}



<Grid container spacing={0} component="form" 
    onSubmit={handleSubmit(onSubmit)} sx={{padding: "5% 5%",}}>





<Grid item xs={2}>
<GlobalDigitTextField type="tel" id="1" 
 inputProps={{ maxLength: 1 }} 
 placeholder="0"
 {...register('field1', {required: {value: true, message: 'required'}})}

 onChange={handleTyping1}
 
 />

 </Grid>



 <Grid item xs={2}>
<GlobalDigitTextField type="tel" id="2"
 inputProps={{ maxLength: 1 }} 
 placeholder="0"
 
 {...register('field2', {required: {value: true, message: 'required'}})}

 onChange={handleTyping2}
 />

 </Grid>


 <Grid item xs={2}>
<GlobalDigitTextField type="tel" id="3"
 inputProps={{ maxLength: 1 }}
placeholder="0"

{...register('field3', {required: {value: true, message: 'required'}})}

 onChange={handleTyping3}
/>
</Grid>


<Grid item xs={2}>
<GlobalDigitTextField type="tel" id="4"
 inputProps={{ maxLength: 1 }}
placeholder="0"

{...register('field4', {required: {value: true, message: 'required'}})}

 onChange={handleTyping4}
/>
</Grid>

<Grid item xs={2}>
<GlobalDigitTextField type="tel" id="5"
 inputProps={{ maxLength: 1 }}
placeholder="0"
{...register('field5', {required: {value: true, message: 'required'}})}

 onChange={handleTyping5}
/>
</Grid>


<Grid item xs={2}>
<GlobalDigitTextField type="tel" id="6"
 inputProps={{ maxLength: 1,}}
placeholder="0"
{...register('field6', {required: {value: true, message: 'required'}})}

 onChange={handleTyping6}
/>
</Grid>




{/* =====================================================  */}






{/* ==============================================================  */}
  <Box sx={{ml: "auto", mr: "auto", display: "flex", 
flexDirection: "column", alignItems: "center", }}>

  <Box sx={{display: "flex", 
flexDirection: "column", alignItems: "center",}}>
    
   <IdidntReceiveBox textAlign="center" sx={{fontSize: 12, mt: 2}}>
    I didn’t receive  a code
    </IdidntReceiveBox>


{/* ====================================================================  */}



    <ResendCode sx={{fontSize: 10, mb: 1 }}>




    {seconds > 0 || minutes > 0 ? (
            <>
              Resend in 
              {minutes === 0 ? ` ${minutes}` : minutes}
              
              :
              {seconds < 10 ? `0${seconds}` : seconds}
            </>
          ) : (
            // <p>Didn't recieve code?</p>

            <Typography variant='link'
            disabled={seconds > 0 }
            style={{
              color: seconds > 0  && "#4A4AF4", 
              textDecoration: "underline",
              cursor: "pointer"
            }}
            onClick={resendOtp} 
            sx={{color: "#4A4AF4", fontSize: 10}}
          >
            Resend Code
          </Typography>

          )}
      

    </ResendCode> 
    </Box>
    </Box>

 {/* ==========================================================================  */}

    
{/* <Box sx={{padding: '20px 30px',}}>
<ButtonSubmit
              type="submit"
              // onClick={ () => setValue("otpCode", finalotp)} 
              onClick={() => setValue("otp", datas)}
              
              // {...register("otpCode", finalotp )}
              // // onTextChange={(value) => setValue('lastChange', value))} 
              
              style={{
                backgroundColor: 
                // seconds > 0 && isButtonDisabled === false  ?  " #8F45F2" : "#212121",
                   isButtonDisabled === false   ?   "#8F45F2" : "#F3F3F3" ,  
                // seconds === 0 && isButtonDisabled === true  ?  " #8F45F2" : "#F3F3F3", 
                // seconds === 0 && isButtonDisabled === true  ?    "#F3F3F3" : " #8F45F2" ,

                color: isButtonDisabled === false   ?   "#fff" : "#fff",

                background: `linear-gradient(to right, ${isButtonDisabled === false ? "#7833EE" :  "#F3F3F3"} 0%, ${isButtonDisabled === false ? "#A554F6" :  "#F3F3F3"} 100%)`,
               
              }}
              fullWidth
              variant="contained"
            >


              <Typography variant='button' component="p" 
              sx={{fontFamily: "Helvetica Neue", 
              fontWeight: 500, fontSize: "14px", 
              lineHeight: "16px", color: "#B8B8B9", 
              color: `linear-gradient(to right, ${isButtonDisabled === false ? "#fff" :  "#fff"} 0%, ${isButtonDisabled === false ? "#fff" :  "fff"} 100%)`  }}>
                Continue 
              </Typography>
        </ButtonSubmit>
</Box> */}

<Grid item xs={12} sx={{display: "flex",  mb: 5, ml: 'auto', mr: 'auto' }}>
        <GlobalButton type='submit'
            // color="secondary"
            sx={{ background: !isValid ? "#cecece" : 'linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%)',}}
            disabled={ !isValid}
            size="small"
            variant='contained' 
            
            onClick={(prev) => setValue('otp', datas)}
            >
            
            {
              isSubmitting ? <CircularIndeterminate /> :  "Submit"
            }

        </GlobalButton>
    </Grid>



    </Grid>


{/* ================================================================================  */}








{/* </PaperWrapper>  */}


</GlobalPaperStyle>


{/* ================================================================================================  */}


<ToastContainer
          position="top-right"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
      />

{/* =============================================================================================  */}
            
      </GlobalPageBackground>

    </>
  
      
      
      )}

    </>
  )
}

export default PasswordResetOtp
