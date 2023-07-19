import * as React from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import {
  Typography,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Paper,
  Box,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";






// import UserImg from "./const/images/User.svg"
import { ErrorHelperTextContainer, GridItem, NameLabel, PageHeader2, PageHeaderAndTitleContainer2, SubTitle2, ButtonComponent, ButtonText,
  } from "../../../../account/style/account-creation";
import { red } from "@mui/material/colors";
import { useState } from "react";
import { GlobalErrorHelperText, GlobalInputLabel, GlobalPageHeader, GlobalSubPageHeader, GlobalTextField } from "../../../../../assets/GlobalStyled/Globalstyles";

const MyFormControl = styled(FormControl)({
  minWidth: 120,
});

const TextFieldControl = styled(TextField)({
  minWidth: 300,
});




const branchs = [
  { value: "branch1", label: "Branch 1" },
  { value: "branch2", label: "Branch 2" },
  { value: "branch3", label: "Branch 3" }
];

const accounts = [
    { value: "account1", label: "Account 1" },
    { value: "account2", label: "Account 2" },
    { value: "account3", label: "Account 3" }
  ];



// ============================ ITEM STYLING =========================================== 


const ConfirmOA = () => {


//   Form states 
  const [value1, setValue1] = useState("");

    const [branches, setBranches] = useState('')
    const [accountes, setAccountes] = useState('')




  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };

  const handleSetBranch = (event) => {
    setBranches(event.target.value);
  };

  const handleSetAccount = (event) => {
    setAccountes(event.target.value);
  };


  const { handleSubmit, register, watch, setValue, formState: {errors}, reset, trigger } = useForm({
    mode: "onTouched",
    defaultValues: {
      date: "",
      time: "",
      branch: "",
      banker: "",
      comments: "",
      // password2: "",
      // tnc: ""
    }
  })
  // "date": "2023-04-25",
  // "time": "string",
  // "branch": 0,
  // "banker": 0,
  // "comments": "string"

  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [branch, setBranch] = React.useState(0);
  const [banker, setBanker] = React.useState(0);
  const [comment, setComment] = React.useState("")


  //SELECT OPTIONS 
  const [fieldOption, setFieldOption] = useState("");


  const [formComplete, setFormComplete] = React.useState({

    date: null,
    time: null,
    branch: null,
    banker: "",
    comment: null,
  
  });


  const backgroundColorText = {
    background: 'linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%)',
  };




  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormComplete(prevState => ({...prevState, [name]: value }));
  }


  const handleOptionChange = (event) => {
    setFieldOption(event.target.value);
  };





  return (
    // <ThemeProvider theme={theme}>

    
    <Box>

      
      <GlobalPageHeader sx={{mb: 5}}>Transfer - Own Account transfer</GlobalPageHeader>

      {/* <GlobalSubPageHeader> 
      Third Party Transfer requires that you add new beneficiary to your profile before transfer can be made to such beneficiary 
      </GlobalSubPageHeader>  */}


      <Grid container spacing={0} style={{ rowGap: 5}}>
      

{/* ================================= BEGIN OF Branch =================================  */}


<Grid item xs={3}sx={{mt: 1.5}} >
        
        <GlobalInputLabel sx={{}}>Select branch <span style={{color: "red"}}>*</span> </GlobalInputLabel>
</Grid>

<Grid item xs={9} sx={{display: "flex"}} >
          {/* <GlobalInputLabel >Select branch</GlobalInputLabel> */}
          
  
          

    <GlobalTextField
      id="branch"
      fullWidth
      error={Boolean(errors.branch)}
      variant="outlined"

      select
      sx={{
        padding: "5px 8px",
        textAlign: "center",
        "& .MuiOutlinedInput-root.Mui-focused": {
          "& > fieldset": {
            borderColor: "#7833EE"
          }
        },
        [`& fieldset`]: {
          borderRadius: "6px"
        }
      }}
      InputProps={{
        style: {
          height: "2rem",
          fontSize: 12,
          fontFamily: "Poppins"
        }
      }}
      {...register("branch", {
        required: {
          value: true,
          message: "Branch name is required"
        }
      })}
      // label="Branch"
      value={branches}
      onChange={handleSetBranch}
    >
      {branchs.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </GlobalTextField>

    

</Grid>


<Grid item xs={3}sx={{mt: 1.5}} >
        
        <GlobalInputLabel sx={{}}>Destination account <span style={{color: "red"}}>*</span></GlobalInputLabel>
</Grid>

<Grid item xs={9} sx={{display: "flex"}} >
          {/* <GlobalInputLabel >Select branch</GlobalInputLabel> */}
          
  
          

    <GlobalTextField
      id="d_account"
      fullWidth
      error={Boolean(errors.branch)}
      variant="outlined"

      select
      sx={{
        padding: "5px 8px",
        textAlign: "center",
        "& .MuiOutlinedInput-root.Mui-focused": {
          "& > fieldset": {
            borderColor: "#7833EE"
          }
        },
        [`& fieldset`]: {
          borderRadius: "6px"
        }
      }}
      InputProps={{
        style: {
          height: "2rem",
          fontSize: 12,
          fontFamily: "Poppins"
        }
      }}
      {...register("d_account", {
        required: {
          value: true,
          message: "Destination account is required"
        }
      })}
      // label="Branch"
      placeholder="-----------Select-------------"
      value={accountes}
      onChange={handleSetAccount}
    >
      {accounts.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </GlobalTextField>

</Grid>



<Grid item xs={3}sx={{mt: 1.5}} >
        
        <GlobalInputLabel sx={{}}>Amount <span style={{color: "red"}}>*</span></GlobalInputLabel>
</Grid>

        <Grid item xs={9} >
          {/* <GlobalInputLabel sx={{padding: "0px 17px"}}>Name</GlobalInputLabel> */}
  
          <GlobalTextField 
            type="text"
            id="amount"
            fullWidth
            error={Boolean(errors.amount)}
            variant="outlined" 
            sx={{ 
              padding: "5px 8px",
              textAlign: "center",
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "#7833EE"
                }
              },
              [`& fieldset`]:{
                borderRadius: "6px"
              }
            }}
            InputProps={{
              style: {
                height: "2rem",
                fontSize: 12,
                fontFamily: 'Poppins'
              },
            }}
            {...register("amount", {
              required: {
                value: true,
                message: "Amount is required"
              }
            })}
            placeholder='Amount'
            onChange={(event) => {
              handleInputChange(event);
              setFormComplete(prevState => ({
                amount: event.target.value,
                ...prevState,
              }));
            }}
          />
          { (errors.amount?.message  ) &&
            <ErrorHelperTextContainer>
              {errors.amount?.message}
            </ErrorHelperTextContainer> 
          }
        </Grid>






        <Grid item xs={3}sx={{mt: 1.5}} >
        
        <GlobalInputLabel sx={{}}>Reference <span style={{color: "red"}}>*</span></GlobalInputLabel>
        </Grid>

        <Grid item xs={9} >
          {/* <GlobalInputLabel sx={{padding: "0px 17px"}}>Name</GlobalInputLabel> */}
  
          <GlobalTextField 
            type="text"
            id="reference"
            
            fullWidth
            error={Boolean(errors.reference)}
            variant="outlined" 
            sx={{ 
              padding: "5px 8px",
              textAlign: "center",
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "#7833EE"
                }
              },
              [`& fieldset`]:{
                borderRadius: "6px"
              }
            }}
            InputProps={{
              style: {
                height: "2rem",
                fontSize: 12,
                fontFamily: 'Poppins'
              },
            }}
            {...register("reference", {
              required: {
                value: true,
                message: "Reference is required"
              }
            })}
            placeholder='Reference'
            onChange={(event) => {
              handleInputChange(event);
              setFormComplete(prevState => ({
                first_name: event.target.value,
                ...prevState,
              }));
            }}
          />
          { (errors.reference?.message  ) &&
            <ErrorHelperTextContainer>
              {errors.reference?.message}
            </ErrorHelperTextContainer> 
          }
        </Grid>



      

        



{/* ================================= END OF THE ROW ==========================  */}



        {/* <Box style={{width: 200, marginLeft: "auto", marginRight: "auto", display: "flex", }}>
        <ButtonComponent type='submit'
       fullWidth
        onClick={ () => null}
        disabled={!formComplete}
        style={{
          background:( (formComplete.date) && (formComplete.time) 
          && (formComplete.branch) && (formComplete.banker) 
          && (formComplete.comment  ) ) ? backgroundColorText.background : "#F3F3F3",
        }}
        sx={{ 
        padding: "0px 0px", }}>
          <ButtonText>
            Submit
          </ButtonText>
        </ButtonComponent>
        </Box> */}


      </Grid>

{/* </Paper> */}

    </Box>

    // </ThemeProvider> 
  );
  
  
};

export default ConfirmOA;

