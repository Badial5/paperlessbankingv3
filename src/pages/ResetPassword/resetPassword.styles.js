import { Box, Button, Container, FormHelperText, Grid, styled, TextField, Typography, 
  Alert } from "@mui/material";
  
  import BackgroundImg from "../../assets/images/signup2.jpg"
  
  
  
  
  //STYLED COMPONENTS
  export const BackgroundWrapper = styled(Box)`
  background-image: url("${BackgroundImg}");
  max-width: 100vw;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  flex-direction: center;
  max-width: 100vw;
  max-height: 100%;
  max-width: 100%;
  
  `
  
  
  export const ContainerWrapper = styled(Container)`
  //* Rectangle 958 */
  box-sizing: border-box;
  
  /* #white */
  background: #FFFFFF;
  /* Greyscale/#10 */
  
  border: 1px solid #E7E7E8;
  
  
  `;
  
  
  export const InlaksText = styled(Typography)`
  /* InLaks */
  /* position: absolute; */
  width: 57px;
  height: 57px;
  /* left: 680px; */
  /* top: 63px; */
  
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 27px */
  
  
  /* #black */
  
  color: #000000;
  
  `;
  
  
  // Header ===============================================================================
  
  export const PageHeaderAndTitleContainer = styled(Box)`
  
  /* Group 2 */
  
  
  // position: absolute;
  // width: 416px;
  height: 75px;
  // left: 512px;
  // top: 269px;
  
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 50px;
  `;
  
  export const PageHeaderAndTitleContainer2 = styled(Box)`
  
  height: 70px;
  width: 100%;
  
  /* margin-left: 40px; */
  /* margin-right: 40px; */
  /* margin-top: 50px; */
  `;
  
  
  
  export const PageHeader = styled(Typography)`
  height: 29px;
  
  font-family: 'Dela Gothic One';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  
  
  background: linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* text-fill-color: transparent; */
  `;
  
  export const PageHeader2 = styled(Typography)`
  height: 29px;
  font-family: 'Dela Gothic One';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  
  background: linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* text-fill-color: transparent; */
  `;
  
  
  export const SubTitle = styled(Typography)`
  // width: 368px; 
  height: 42px;
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
  `;
  
  export const SubTitle2 = styled(Typography)`
  // width: 368px; 
  height: 42px;
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
  `;
  
  
  export const GridContainer = styled(Grid)`
  margin-top: 10px;
  `;
  
  export const GridContainer2 = styled(Grid)`
  /* margin-top: 10px; */
  /* padding: 0px 14px; */
  /* border: 3px solid green;  */
        
  
  /* min-height: 60vh; */
  /* max-height: 60vh; */
  
  `;
  
  export const GridItem = styled(Grid)`
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  /* margin-top: 0rem; */
  /* position: absolute; */
  /* width: 372px; */
  /* height: 60px; */
  height: 55px;
  
  
  `;
  
  
  export const NameLabel = styled(Typography)`
  /* Input label */
  
  // position: absolute;
  // left: 0%;
  // right: 76.26%;
  // top: 0%;
  
  /* bottom: 10%; */
  /* Text sm/regular */
  /* padding: "10px 16px"; */
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 10px;
  /* identical to box height, or 114% */
  /* Greyscale/#100 */
  color: #19191A;
  `;
  
  
  export const ErrorHelperTextContainer = styled(FormHelperText)`
  /* Error message here... */
  /* width: 106px; */
  height: 6px;
  /* margin-top: 5px; */
  /* margin-bottom: 600px; */
  margin-bottom: 4px;
  margin-left: 16px;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */
  
  display: flex;
  align-items: center;
  
  
  /* #red */
  
  color: #F2334A;
  
  
  /* Inside auto layout */
  
  
  `;
  
  
  export const LongTextFieldGridItem = styled(Grid)`
  /* Input Field */
  
  /* margin-top: 50px; */
  /* Auto layout */
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  /* margin-top: 0.3rem; */
  /* position: absolute; */
  /* width: 576px; */
  /* width: 36rem; */
  /* height: 60px; */
  /* height: 2.25rem; */
  height: 55px;
  /* left: 430px;
  top: 344px; */
  
  
  `;
  
  export const LongTextField = styled(TextField)`
  /* _❌Long Text Input */
  
  
  /* Auto layout */
  
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 16px;
  gap: 11px;
  
  /* width: 576px; */
  height: 36px;
  
  /* Base/white-000 */
  
  background: #FFFFFF;
  /* Dark Purple/dark purple-50 */
  
  border: 1px solid #E8E8EC;
  border-radius: 6px;
  
  
  `;
  
  
  
  
  export const PasswordStrengthText = styled(Typography)`
  width: 546px; 
  /* height: 24px; */
  
  // font-family: 'Source Sans Pro';
  
  font-family: 'Helvetica Neue';
  
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  /* line-height: 24px; */
  /* identical to box height, or 200% */
  margin-top: 0px;
  /* display: flex; */
  /* align-items: center;  */
  /* letter-spacing: -0.25px; */
  
  color: #000000;
  
  
  /* Inside auto layout */
  `;
  
  
  
  export const PasswordContainer = styled(Grid)`
  /* Password_full */
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 13px;
  /* gap: 8px; */
  margin-top: 0.3rem;
  /* position: absolute; */
  /* width: 576px; */
  height: 144px;
  /* left: 430px; */
  /* top: 512px; */
  
  `;
  
  
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
  
  color: #89898A;
  
  
  
  /* Inside auto layout */
  
  
  `
  
  
  
  
  
  
  
  
  
  // export const PasswordStrengthContainer = styled(Box)`
  //   margin-top: 16px;
  //   margin-bottom: 16px;
  // `;
  
  // export const PasswordFeedback = styled(Typography)`
  //   margin-top: 8px;
  //   margin-bottom: 8px;
  //   font-size: 14px;
  // `;
  
  // export const PasswordCheck = styled(Box)`
  //   margin-top: 16px;
  //   margin-bottom: 16px;
  // `;
  
  
  
  
  export const ButtonComponent = styled(Button)`
  
  /* Button */
  
  
  /* Auto layout */
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 5px 8px; */
  /* gap: 1px; */
  
  // position: absolute;
  // width: 479px;
  
  height: 35px;
  // left: 430px;
  // top: 744px;
  margin-top: 10px;
  
  /* Gradient/2 */
  
  background: linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%);
  border-radius: 10px;
  `;
  
  export const ButtonText = styled(Typography)`
  /* I’m new here! */
  
  
  // width: 100px;
  height: 16px;
  
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height, or 114% */
  text-transform: none;
  
  /* Colors / Light / Base 1 */
  
  color: #FCFCFF;
  
  
  /* Inside auto layout */
  
  `
  
  
  // INPUTS 
  export const InputFieldGrid = styled(Grid)`
  
  /* Type=Input text, State=Error, Size=md */
  
  
  /* Auto layout */
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  
  margin-left: 64px;
  // margin-right: 64px;
  // margin-bottom: 24px;
  
  // position: absolute;
  width: 262px;
  height: 80px;
  // left: 403px;
  // top: 404px;
  // border: 2px solid red;
  
  & .MuiFormHelperText-root {
      // width: 78px;
  height: 16px;
  margin-bottom: 10px;
  
  /* Text xs/regular */
  
  font-family: 'Helvetica Neue';
  
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */
  
  
  /* #red */
  
  color: #F2334A;
  
  /* Inside auto layout */
  
  
    }
  
  `;
  
  
  
  // =========================================================================================================================== 
  
  export const TncText = styled(Typography)`
  /* By clicking create account you agree to Inlaks Terms and conditions, confirm you have read our Privacy Policy */
  
  
  // position: absolute;
  /* width: 576px; */
  /* height: 32px; */
  // left: 430px;
  // top: 688px;
  // margin-left: 64px;
  
  /* Text sm/regular */
  
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  /* margin-top: 32px; */
  /* or 114% */
  
  
  /* Greyscale/#80 */
  
  /* color: #434344; */
  font-family: 'Helvetica Neue';
  color: #89898A;
  
  `;
  
  
  
  
  
  
  
  
  
  export const SignupText = styled(Typography)`
  /* 👋🏾 Already have an account? Login */
  
  
  /* position: absolute; */
  /* width: 222px; */
  height: 16px;
  /* left: 608px; */
  /* top: 806px; */
  display: flex;
  /* justify-content: center; */
  align-self: center;
  /* margin-top: 14px; */
  /* Text sm/regular */
  
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 114% */
  
  
  color: #000000;
  text-decoration: none;
  `;
  
  export const AlreadyHaveAccount = styled(Typography)`
  /* Text sm/regular */
  
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 114% */
  
  
  color: #000000;
  `
  
  
  // ======================PASSWORD STRENGTH BAR ================================================================= 
  
  export const PasswordStrengthBarOne = styled(Box)`
  width: 18px;
  height: 2px;
  display: flex;
  background: #D9D9D9;
  
  /* Inside auto layout */
  
  `
  
  export const PasswordStrengthBarTwo = styled(Box)`
  width: 18px;
  height: 2px;
  display: flex;
  background: #D9D9D9;
  
  /* Inside auto layout */
  
  `
  
  export const PasswordStrengthBarThree = styled(Box)`
  width: 18px;
  height: 2px;
  display: flex;
  background: #D9D9D9;
  
  /* Inside auto layout */
  `; 
  
  export const PasswordStregthContainer = styled(Box)`
  display: flex;
  `
  
  export const ErrorAlert = styled(Alert)`
  
  /* color: yellow; */
   /* display: flex;  */
  // flex-direction: column;
  // justify-content: center;
  // align-items: flex-start;
  // padding: 12px 16px;
  // gap: 10px;
  
  /* width: 23.125rem;   */
  width: 100%;
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
  /* margin-bottom: 7px;  */
  /* gap: 10px; */
  /* Solid Colours/Brand/Error/600 */
  
  background: #DB2438;
  
  `;
  
  
  
  
  export const ErrorAlertText = styled(Typography)`
  /* Text */
  /* Text */
  
  
  /* width: 272px; */
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