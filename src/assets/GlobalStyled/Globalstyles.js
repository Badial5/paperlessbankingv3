import { Box, Button, Container, FormHelperText, Grid, styled, TextField, Typography, 
    Alert, 
    Paper,
    FormLabel,
    InputLabel,
    Stepper,
    Link} from "@mui/material";

    import signupImg from "../../assets/images/signup2.jpg"


    // import PhoneTextField from "mui-phone-textfield";

    // import ReactPhoneInput from 'react-phone-input-material-ui';


    import PhoneInput from 'react-phone-input-2'
    import 'react-phone-input-2/lib/style.css'
    
    



    export const GlobalPageBackground = styled(Box)({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${signupImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover', 
        objectFit: "cover",
    })

export const GlobalInlaksText = styled(Typography)({
    fontFamily: "Poppins",
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
    lineHeight: '29px',
    textAlign: 'center',

})



// export const GlobalPaperStyle = styled(Paper)({
//     display: "flex", flexDirection: "column",  maxWidth: "40%", height: "90vh", padding: '0px 30px',  fontFamily: "Poppins",
//     borderRadius: 40
// })


export const GlobalPaperStyle = styled(Paper)({
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
    maxWidth: "40%",
    height: "auto",
    padding: '0px 30px',
    fontFamily: "Poppins",
    borderRadius: 40,
    overflow: "hidden",
    rowGap: 0,
  })





export const GlobalPageHeader = styled(Typography)({
    fontFamily: 'Dela Gothic One',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 20,
    lineHeight: '18px',
    textAlign: 'center',
    fontFamily: 'Poppins',
    marginTop: 30,
    marginBottom: 10,
    backgroundImage:
      'linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%)',
    backgroundClip: 'text',
    '-webkit-background-clip': 'text', // for Safari
    color: 'transparent',
  });


export const GlobalSubPageHeader = styled(Typography)({
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: "18px",
    textAlign: 'center',
    marginBottom: 30,
})


    
export const GlobalTextField = styled(TextField)({
    
    fontFamily: "Poppins",
    fontSize: 12,
    "& .MuiOutlinedInput-root.Mui-focused": {
        "& > fieldset": {
  borderColor: "#7833EE"
        }
      },  [`& fieldset`]:{
        borderRadius: "6px",  },
    "& .MuiInputBase-root": {
        height: "2rem",
        fontSize: 12,
        "& input::placeholder": {
            fontSize: 12,
          },
      }
})


export const GlobalDigitTextField = styled(TextField)({
    
    fontFamily: "Poppins",
    fontSize: 12,
    "& .MuiOutlinedInput-root.Mui-focused": {
        "& > fieldset": {
  borderColor: "#7833EE",
  fontFamily: 'Poppins'
        }
      },  [`& fieldset`]:{
        borderRadius: "6px",  },
    "& .MuiInputBase-root": {
        height: "2.5rem",
        width: '2.5rem',
        fontSize: 12,
        fontFamily: 'Poppins',
        "& input::placeholder": {
            fontSize: 12,
            fontFamily: 'Poppins'
          },
      }
})




// export const GlobalPhoneTextField = (PhoneTextField)({
//     fontFamily: "Poppins",
//     fontSize: 12,
//     "& .MuiOutlinedInput-root.Mui-focused": {
//         "& > fieldset": {
//   borderColor: "#7833EE"
//         }
//       },  [`& fieldset`]:{
//         borderRadius: "6px",  },
//     "& .MuiInputBase-root": {
//         height: "2rem",
//       }
// })





export const GlobalFormLabel = styled(FormLabel)({

})


export const GlobalInputLabel = styled(InputLabel)({
    fontFamily: "Poppins",
    fontSize: 12,
    
})


export const GlobalErrorHelperText = styled(FormHelperText)({
    fontFamily: "Poppins",
    fontSize: 10,
    color: "red"
})






// export const GlobalReactPhone = styled(ReactPhoneInput)({
//     borderRadius: 100,
//     fontFamily: "Poppins",
//     fontSize: 12,
//     "& .MuiOutlinedInput-root.Mui-focused": {
//         "& > fieldset": {
//   borderColor: "#7833EE"
//         }
//       },  [`& fieldset`]:{
//         borderRadius: "6px",  },
//     "& .MuiInputBase-root": {
//         height: "2rem",
//       }
// })








// export const GlobalTextfieldEmail = (TextField)({
//     borderRadius: 100,
//     fontFamily: "Poppins",
//     fontSize: 12,
//     "& .MuiOutlinedInput-root.Mui-focused": {
//         "& > fieldset": {
//   borderColor: "#7833EE"
//         }
//       },  [`& fieldset`]:{
//         borderRadius: "6px",  },
//     "& .MuiInputBase-root": {
//         height: "2rem",
//       }
// })




export const GlobalReactPhone = styled(PhoneInput)({
    fontFamily: "Poppins",
    fontSize: 12,
    "& .MuiOutlinedInput-root.Mui-focused": {
        "& > fieldset": {
  borderColor: "#7833EE"
        }
      },  [`& fieldset`]:{
        borderRadius: "6px",  },
    "& .MuiInputBase-root": {
        height: "2rem",
        width: "auto"
      }
})





export const GlobalPasswordStrength = styled(Typography)({
    fontFamily: "Poppins",
    fontSize: 10,
    marginTop: 2,
})


export const PasswordMinimumBox = styled(Grid)`
/* Password must be a minimum of 6 character, including one letter and a number or a symbol */


width: 328px;
/* height: 26px; */

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 150%;
/* or 18px */

display: flex;
align-items: center;
letter-spacing: -0.25px;

/* Greyscale/#50 */
font-family: 'Poppins', sans-serif;
color: #89898A;



/* Inside auto layout */


`


export const GlobalPasswordMinimumBox = styled(Box)({
    fontFamily: "Poppins",
fontStyle: 'normal',
fontWeight: 400,
fontSize: 12,
display: "flex",
alignItems: "center",
color: "#ababab",
fontFamily: 'Poppins', 
color: "#89898A"
})



export const GlobalButton = styled(Button)({
    width: 200,
    alignSelf: "center",
    borderRadius: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 1,
    color: "white",
    background:  'linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%)'
    
})


export const GlobalLink = styled(Link)({
    textAlign: "center",
    textDecoration: "underLined",
    fontSize: 10,
    marginTop: 1,
})




//DASHBOARD STYLES ===========================================================

export const DashboardPageBackground = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    // backgroundImage: `url(${signupImg})`,
    // backgroundPosition: 'center',
    // backgroundSize: 'cover', 
    // objectFit: "cover",

    background: "#FBFCFC"
})


//Paper 
export const DashboardPaper = styled(Paper)({
    display: 'flex', 
    flexDirection: "column", 
    padding: '30px 40px', 
    borderRadius: "30px",
    height: "auto",
    width: "80%",
    marginBottom: 60
    
})


export const DashboardStepper = styled(Stepper)({
    width: "100%", 
    
    // mt: 50,
})







export const DashboardInputLabel = styled(InputLabel)({
    fontFamily: "Poppins",
    fontSize: 10,
    
})

export const DashboardTextField = styled(TextField)({
    fontFamily: 'Poppins',
    fontSize: 12,
    '& .MuiOutlinedInput-root.Mui-focused': {
      '& > fieldset': {
        borderColor: '#7833EE',
      },
    },
    '& .MuiInputBase-root': {
      height: '2rem',
      fontSize: "0.7rem",
      "& input::placeholder": {
        fontSize: 12,
      },
    },
    '& fieldset': {
      borderRadius: '6px',
    },
  });

export const DashboardErrorHelperText = styled(FormHelperText)({
    fontFamily: "Poppins",
    fontSize: 8,
    color: "red"
})







//BUTTONS ============================================================================================================
export const DashboardNextButton = styled(Button)({
    // width: 80,
    // height: 25,
    // // alignSelf: "center",
    // borderRadius: 10,
    // marginLeft: "auto",
    // marginRight: "auto",
    // marginTop: 1,
    // color: "white",
    width: 100,
    alignSelf: "center",
    borderRadius: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 1,
    color: "white",
    background:  'linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%)'
    
})


export const DashboardSkipButton = styled(Button)({
    // width: 80,
    // height: 25,
    // // alignSelf: "center",
    // borderRadius: 10,
    // marginLeft: "auto",
    // marginRight: "auto",
    // marginTop: 1,
    // color: "white",
    width: 100,
    alignSelf: "center",
    borderRadius: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 1,
    color: "white",
    background:  'linear-gradient(to bottom, #C5E7F0, #E1F3F6)'
    
})


// export const DashboardBackButton = styled(Button)({
//     // width: 80,
//     // height: 25,
//     // // alignSelf: "center",
//     // borderRadius: 10,
//     // marginLeft: "auto",
//     // marginRight: "auto",
//     // marginTop: 1,
//     // color: "white",
//     width: 100,
//     alignSelf: "center",
//     borderRadius: 10,
//     marginLeft: "auto",
//     marginRight: "auto",
//     marginTop: 1,
//     color: "white",
//     background:  'linear-gradient(to bottom, #CCCCCC, #9B9B9B)'
    
// })

export const DashboardBackButton = styled(Button)({
    // width: 80,
    // height: 25,
    // // alignSelf: "center",
    // borderRadius: 10,
    // marginLeft: "auto",
    // marginRight: "auto",
    // marginTop: 1,
    // color: "white",
    width: 100,
    height: 30,
    alignSelf: "center",
    borderRadius: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 1,
    color: "white",
    background:  'linear-gradient(to bottom, #CCCCCC, #9B9B9B)'
    
})



export const DashboardHomeButton = styled(Button)({
    // width: 80,
    // height: 25,
    // // alignSelf: "center",
    // borderRadius: 10,
    // marginLeft: "auto",
    // marginRight: "auto",
    // marginTop: 1,
    // color: "white",
    width: 100,
    alignSelf: "center",
    borderRadius: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 1,
    color: "white",
    background:  'linear-gradient(to bottom, #C5E7F0, #E1F3F6)'
    
})