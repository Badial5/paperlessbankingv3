import { Box, Container, Paper, styled, TextField, Typography, 
    Link, Button, Alert} from "@mui/material";
   import SignUpImg from "../../../assets/images/signup2.jpg"
   
   
   
   
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
   
   
   
   export const PaperWrapper = styled(Paper)`
   
   box-sizing: border-box;
   display: flex;
   flex-direction: column;
   width: 496px;
   height: 397px;
   
   
   /* #white */
   
   background: #FFFFFF;
   /* Greyscale/#10 */
   
   border: 1px solid #E7E7E8;
   
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
   
   
   export const SubTitle = styled(Typography)`
   
   // width: 368px;
   height: 42px;
   
   
   margin: 4px;
   font-family: 'Helvetica Neue';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 150%;
   /* or 21px */
   
   
   
   /* Greyscale/#80 */
   
   color: #434344;
   
   `;
   
   
   
   export const SixDigitBox = styled(Box)`
   display: flex;
   flex-direction: row;
   align-items: flex-start;
   padding: 0px;
   gap: 16px;
   // border: 1px solid red;
   
   margin-left: 64px;
   margin-right: 64px;
   margin-top: 24px;
   
   // position: absolute;
   // width: 368px;
   width: 380px;
   // height: 48px;
   height: 60px;
   // left: 536px;
   // top: 368px;
   
   opacity: 0.6;
   
   
   
   `;
   
   
   export const SixDigitTextField = styled(TextField)`
   width: 48px;
   height: 48px;
   
   /* Secondary/White */
   
   background: #FFFFFF;
   /* Greyscale / 10 */
   
   /* border: 1px solid #E7E7E8; */
   box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.02);
   border-radius: 8px;
   
   /* Inside auto layout */
   
   flex: none;
   order: 0;
   flex-grow: 0;
   
   
   
   `;
   
   
   
   // I didn’t receive  a code 
   
   export const IdidntReceiveBox = styled(Box)`
   
   `
   
   
   
   export const IdidntReceive = styled(Typography)`
   /* I didn’t receive a code */
   
   // width: 143px;
   // height: 16px;
   
   
   /* Text sm/regular */
   
   font-family: 'Helvetica Neue';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 16px;
   /* identical to box height, or 114% */
   
   text-align: center;
   
   /* Greyscale/#80 */
   
   color: #434344;
   margin-top: 24px;
   `;
   
   
   
   //resend code  =========================================
   export const ResendCode = styled(Link)`
   /* Resend code */
   
   
   // position: absolute;
   // width: 83px;
   // height: 16px;
   // left: 679px;
   // top: 524px;
   
   /* Text sm/regular underline */
   
   font-family: 'Helvetica Neue';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 16px;
   margin-top: 4px;
   /* identical to box height, or 114% */
   
   text-align: center;
   text-decoration-line: underline;
   cursor: pointer;
   
   /* Primary/Indigp blue */
   
   color: #4A4AF4;
   
   `;
   
   
   
   export const ButtonSubmit = styled(Button)`
   
   /* Button */
   
   
   /* Auto layout */
   
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 15px 8px;
   gap: 10px;
   
   margin-left: 64px;
   margin-right: 64px;
   // position: absolute;
   width: 368px;
   height: 46px;
   // left: 536px;
   // top: 570px;
   
   margin-top: 30px;
   
   /* Greyscale/#05 */
   background: #F3F3F3;
   border-radius: 10px;
   
   `;
   
   export const ErrorAlert = styled(Alert)`
   
   /* color: yellow; */
    /* display: flex;  */
   // flex-direction: column;
   // justify-content: center;
   // align-items: flex-start;
   // padding: 12px 16px;
   // gap: 10px;
   
   /* width: 23.125rem;  */
   width: 80%;
   /* height: 100px; */
   // height: 38px;
   // left: 512px;
   // top: 311px;
   overflow-y: hidden; /* Hide vertical scrollbar */
     overflow-x: hidden; /* Hide horizontal scrollbar */
   
   font-family: 'Helvetica Neue';
   display: flex;
   /* justify-content: center; */ 
   margin-left: 52px;
   margin-right: 64px;
   margin-bottom: 7px;
   gap: 10px;
   /* Solid Colours/Brand/Error/600 */
   
   background: #DB2438;
   
   `;
   
   
   
   
   export const ErrorAlertText = styled(Typography)`
   /* Text */
   /* Text */
   
   
   width: 272px;
   height: 24px;
   color: blue;
   /* Text sm/Medium */
   
   font-family: 'Helvetica Neue';
   font-style: normal;
   font-weight: 500;
   font-size: 0.9rem;
   line-height: 24px;
   /* identical to box height, or 171% */
   /* margin-right: 5px; */
   letter-spacing: -0.25px;
   
   /* Solid Colours/Standard/White */
   overflow: hidden;
   color: #FFFFFF;
   `;
   