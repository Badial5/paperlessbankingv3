import { styled, Box, Typography, Paper, Grid, TextField } from "@mui/material";
import SignUpImg from "../assets/images/signup2.jpg"



// backgroundImage: `url(${signupImg})` ,
//       padding: "20px 20px",
//       // objectFit: "cover",
//       backgroundPosition: 'center',
//       backgroundSize: 'cover',
//       // height: "120%",
//       display: "flex", justifyContent: "center", alignItems: "center",
//       width: 1440, height: 1024,
//       backgroundRepeat: 'no-repeat', width: "100%",




export const MainContainerBox = styled(Box)`

// width: 1440px;
// height: 1024px;
background-image: url(${SignUpImg});
// background-repeat: "no-repeat" ;
// width: "100%";
// background-size: "cover"


    //   padding: "20px 20px";
      object-fit: "cover";
      background-position: 'center';
      background-size: 'cover';
      // height: "120%";
      display: "flex"; justify-content: "center"; align-items: "center";
      width: 1440; height: 1024;
      backgroundRepeat: 'no-repeat'; 
      width: "100%";

`



export const TopHeaderOutsideBox = styled(Typography)`
color: #000000;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 150%;
text-align: center;
margin-bottom: 19px;
`;


export const SignupPaper = styled(Paper)`
box-sizing: border-box;
// width: 707px;
width: 44.1875rem;
// height: 773px;
height: 48.3125rem;

border-radius: 6px;
border: 1px solid #E7E7E8;

`;


export const FormsInputContainer = styled(Grid)`

width: 556px;

`

//For First and Last Name
export const NameGrid = styled(Grid)`

// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 0px;

// // position: absolute;
// width: 372px;
// height: 60px;

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;

// width: 328px;
// width: 20rem;
height: 96px;
// height: 6rem;
`;


export const TextFieldBox = styled(TextField)`
width: 328px;
height: 48px;

/* Secondary/White */
background: #FFFFFF;
/* Greyscale / 10 */
border: 1px solid #E7E7E8;
box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.02);
border-radius: 8px;

`;


//for Label inside the NameGrid or Grid containers
export const LabelBox = styled(Box)`

width: 328px;
height: 16px;

/* Text sm/regular */

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
/* identical to box height, or 114% */
display: flex;
align-items: center;

/* Greyscale/#100 */
color: #19191A;
/* Inside auto layout */
`;


export const InputLabelGrid = styled(Grid)`
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 0px;
// gap: 4px;

// // width: 372px;
// width: 23.25
// // height: 80px;
// height: 5rem;

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 4px;


width: 576px;
height: 80px;
`;

//email and phone textfield
export const EmailTextField = styled(TextField)`
/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 10px 16px;
gap: 11px;

width: 576px;
height: 36px;

/* Base/white-000 */

background: #FFFFFF;
/* #red */

border: 1px solid #F2334A;
border-radius: 6px;


`;