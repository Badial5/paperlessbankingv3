import { Paper, styled, Typography, Box, 
    TextField, Button, Link, Grid, FormHelperText, Alert, Container } from "@mui/material";
import { style } from "@mui/system";
    
    
    // import HelveticaNeue from "../../assets/fonts/HelveticaNowText-Medium.otf"
    
    
    export const PaperWrapper = styled(Container)`
    /* Rectangle 958 */
    box-sizing: border-box;
    /* width: 462px; */
    // height: 438px;
    height: 400px;
    
    /* #white */
    background: #FFFFFF;
    /* Greyscale/#10 */
    border: 1px solid #E7E7E8;
    
    `;
    
    
    
    
    
    
    
    
    export const InlaksText = styled(Typography)`
    width: 57px;
    height: 27px;
    margin-bottom: 19px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 150%;
    /* identical to box height, or 27px */
    
    
    
    /* #black */
    
    color: #000000;
    
    `;
    
    
    
   export const ImageContainer = styled(Grid)`
   /* conifer-1075 1 */

// position: absolute;
/* width: 240px; */
// height: 206px;
height: 160px;
/* margin-left: 111px;
margin-right: 111px;
margin-top: 16px; */
// margin-bottom: 24px;
// left: 600px;
// top: 195px;
   `;



   export const YourPassHasBeenSet = styled(Box)`
   /* Your password has been successfully reset! */

// position: absolute;
/* width: 334px; */
height: 20px;
// left: 553px;
// top: 425px;
/* margin-left: 24px; */
/* margin-right: 64px; */

/* Text md/bold */

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 800;
font-size: 16px;
line-height: 20px;
/* identical to box height */

text-align: center;

color: #000000;
   `;


export const SubTitle2 = styled(Box)`
/* Please use your new password to log in to your account. */
// position: absolute;
width: 307px;
height: 32px;


/* Text sm/regular */

font-family: 'Poppins';

font-family: "Poppins";
font-style: normal;
font-weight: 400;
font-size: 14px;
// margin-left: 24px;
margin-left: 38px;
// margin-right: 64px;
margin-right: 40px;
margin-top: 10px;
margin-bottom: 24px;

line-height: 16px;
/* or 114% */

text-align: center;

/* Greyscale/#90 */

color: #2B2B2C;

`;



    
    
    // Header 
    
    export const PageHeaderAndTitleContainer = styled(Box)`
    
    /* Group 2 */
    
    
    // position: absolute;
    width: 416px;
    height: 75px;
    // left: 512px;
    // top: 269px;
    
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 60px;
    
    
    `;
    
    
    export const PageHeader = styled(Typography)`
    // width: 312px;
    height: 29px;
    
    
    font-family: 'Dela Gothic One';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    /* identical to box height */
    
    // margin-bottom: 79px;
    margin-top: 79px;
    margin-top: 12px;
    /* Gradient/2 */
    
    background: linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    `;
    
    
    
    
    
    
 
    
    
    
    
    
    // export const InputFieldGrid = styled(Grid)`
    
    // /* Type=Input text, State=Error, Size=md */
    
    
    // /* Auto layout */
    
    // display: flex;
    // flex-direction: column;
    // align-items: flex-start;
    // padding: 0px;
    // gap: 4px;
    
    // margin-left: 64px;
    // margin-right: 64px;
    // // margin-bottom: 24px;
    
    // // position: absolute;
    // width: 372px;
    // // height: 90px;
    // height: 70px;
    // // left: 403px;
    // // top: 404px;
    // // border: 2px solid red;
    
    // & .MuiFormHelperText-root {
    //     // width: 78px;
    // height: 16px;
    // margin-bottom: 10px;
    
    // /* Text xs/regular */
    
    // // font-family: 'Helvetica Neue';
    // font-family:  url(${HelveticaNeue}) format('otf');
    // font-style: normal;
    // font-weight: 400;
    // font-size: 12px;
    // line-height: 16px;
    // /* identical to box height, or 133% */
    
    
    // /* #red */
    
    // color: #F2334A;
    
    // /* Inside auto layout */
    
    // flex: none;
    // order: 1;
    // flex-grow: 0;
    //   }
    
    // `;



export const InputFieldGrid2 = styled(Grid)`
    /* Password_full */

/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;

margin-left: 64px;
margin-right: 64px;

// position: absolute;
width: 368px;
height: 144px;
// left: 536px;
// top: 312px;
`;
    
    
    export const BottonComp = styled(Button)`
    /* Button */
    
    
    /* Auto layout */
    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 8px;
    

    width: 375px;
    height: 36px;
   
    margin-left: 44px;
    margin-right: 64px;
    // margin-top: 30px;
    margin-top: 14px;
    // margin-bottom: 60px;
    
    /* Gradient/2 */
    
    background: linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%);
    border-radius: 10px;
    
    `;
    
    
    export const LoginText = styled(Typography)`
    /* I’m new here! */


    width: 72px;
    height: 16px;
    
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    /* identical to box height, or 114% */
    text-align: center;
    
    /* Colors / Light / Base 1 */
    
    color: #FCFCFF;
    
    
    /* Inside auto layout */
    
    flex: none;
    order: 0;
    flex-grow: 0;
    `;
    
    
    export const IdontHaveAccount = styled(Typography)`
    /* 👋🏾 I don’t have an account? Signup */
    
    
    // position: absolute;
    // width: 224px;
    height: 16px;
    // left: 608px;
    // top: 595px;
    
    /* Text sm/regular */
    
    // font-family: 'Helvetica Neue';
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    /* identical to box height, or 114% */
    
    margin-top: 4px;
    
    color: #000000;
    
    `;
    
    
    export const ErrorAlert = styled(Alert)`
    
    color: white;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: flex-start;
    // padding: 12px 16px;
    // gap: 10px;
    
    width: 370px;
    // height: 38px;
    // left: 512px;
    // top: 311px;
    
    margin-left: 64px;
    margin-right: 64px;
    margin-bottom: 32px;
    
    /* Solid Colours/Brand/Error/600 */
    
    background: #DB2438;
    
    `;
    
    export const ErrorAlertText = styled(Typography)`
    /* Text */
    
    // width: 321px;
    // height: 24px;
    
    /* Text sm/Medium */
    // text-align: center;
    // display: flex;
    // justify-content: center,
    // align-items: center;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */
    
    // z-index: 1;
    
    letter-spacing: -0.25px;
    
    /* Solid Colours/Standard/White */
    
    color: #FFFFFF;
    
    
    /* Inside auto layout */
    
    // flex: none;
    // order: 1;
    `