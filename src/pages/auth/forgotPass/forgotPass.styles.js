import { Paper, styled, Typography, Box, 
  TextField, Button, Link, Grid, FormHelperText, 
  Alert, Container
   } from "@mui/material";
  
  
  
  
  export const ContainerWrapper = styled(Container)`
  /* Rectangle 958 */
  
  
  box-sizing: border-box;
  
  /* position: absolute; */
  /* width: 545px; */
  /* height: 485px; */
  height: 70%;
  /* left: 447px; */
  /* top: 186px; */
  
  padding: 60px 64px;
  /* #white */
  
  background: #FFFFFF;
  /* Greyscale/#10 */
  
  border: 1px solid #E7E7E8;
  `
  
  
  
  
  
  // export const PaperWrapper = styled(Paper)`
  // /* Rectangle 958 */
  
  
  // box-sizing: border-box;
  
  // // position: absolute;
  // width: 545px;
  // height: 485px;
  // padding: 20px 25px;
  // // left: 447px;
  // // top: 186px;
  
  // /* #white */
  
  // background: #FFFFFF;
  // /* Greyscale/#10 */
  
  // border: 1px solid #E7E7E8;
  
  // `;
  
  
  
  
  
  
  
  
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
  
  
  
  
  // export const PageHeaderAndTitleContainer = styled(Box)`
  
  // /* Group 2 */
  
  
  // // position: absolute;
  // width: 416px;
  // height: 75px;
  // // left: 512px;
  // // top: 269px;
  
  // /* margin-left: 40px; */
  // /* margin-right: 40px; */
  // margin-top: 60px;
  
  
  // `;
  
  
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
  /* text-fill-color: transparent; */
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
  
  
  
  
  
  
  export const InputFieldGrid = styled(Grid)`
  
  /* Type=Input text, State=Error, Size=md */
  
  
  /* Auto layout */
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  /* gap: 4px; */
  font-family: 'Helvetica Neue';
  margin-left: 64px;
  margin-right: 64px;
  margin-bottom: 0px; 
  margin-top: 0;
  
  // position: absolute;
  width: 372px;
  // height: 90px;
  height: 70px;
  // left: 403px;
  // top: 404px;
  // border: 2px solid red;
  
  & .MuiFormHelperText-root {
      // width: 78px;
  height: 16px;
  margin-bottom: 10px;
  
  /* Text xs/regular */
  
  // font-family: 'Helvetica Neue';
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */
  
  
  /* #red */
  
  color: #F2334A;
  
  /* Inside auto layout */
  
  /* flex: none; */
  /* order: 1; */
  /* flex-grow: 0; */
    }
  
  `;
  
  
  export const InputLableText = styled(Typography)`
  /* Input label */
  
  margin-bottom: 3px;
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height, or 114% */
  
  
  /* Greyscale/#100 */
  
  color: #19191A;
  
  `;
  
  export const InputTextField = styled(TextField)`
  /* _❌Text Input */
  
  
  /* Auto layout */
  border: 2px solid green;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 16px;
  /* gap: 11px; */
  
  font-family: 'Helvetica Neue';
  
  width: 417px;
  height: 1px;
  
  `
  
  
  
  
  
  
  // ==========================================================================================
  export const ForgotPassText = styled(Typography)`
  /* I forgot my password */
  font-family: 'Helvetica Neue';
  
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  /* line-height: 16px; */
  /* identical to box height, or 114% */
  
  text-decoration-line: underline;
  
  /* Greyscale/#80 */
  
  color: #434344;
  
  `;
  
  
  export const BottonComp = styled(Button)`
  /* Button */
  
  
  /* Auto layout */
  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 8px;
  /* gap: 10px; */
  
  // position: absolute;
  width: 375px;
  height: 36px;
  // left: 511px;
  // top: 525px;
  margin-left: 64px;
  margin-right: 64px;
  margin-top: 7px; 
  margin-bottom: 12px;
  
  /* Gradient/2 */
  
  background: linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%);
  border-radius: 10px;
  
  `;
  
  
  export const LoginText = styled(Typography)`
  /* I’m new here! */
  
  
  /* width: 100px; */
  height: 16px;
  
  font-family: 'Helvetica Neue';
  text-transform: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height, or 114% */
  
  
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
  
  export const ErrorHelperTextContainer = styled(FormHelperText)`
  /* Error message here... */
  /* width: 106px; */
  height: 12px;
  /* margin-top: 5px; */
  /* margin-bottom: 600px; */
  
  font-family: 'Source Sans Pro';
  /* font-family: 'Helvetica Neue'; */
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  /* identical to box height, or 133% */
  
  display: flex;
  align-items: center;
  
  
  /* #red */
  
  color: #F2334A;
  
  
  /* Inside auto layout */
  
  /* flex: none;
  order: 2;
  flex-grow: 0; */
  `;
  
  
  export const PasswordTextField = styled(TextField)`
  /* _❌Text Input */
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 16px;
  /* gap: 11px; */
  
  width: 417px;
  height: 36px;
  
  /* Base/white-000 */
  
  background: #FFFFFF;
  /* Dark Purple/dark purple-50 */
  border: 1px solid #E8E8EC;
  border-radius: 6px;
  
  
  `