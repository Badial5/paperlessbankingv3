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
  } from "../../account/style/account-creation";
import { red } from "@mui/material/colors";
import { useState } from "react";

const MyFormControl = styled(FormControl)({
  minWidth: 120,
});

const TextFieldControl = styled(TextField)({
  minWidth: 300,
});




const sourceAccount = [
  { value: "1400032102344533", label: "Smith Worth-Student Account-1400032102344533" },
//   { value: "branch2", label: "Branch 2" },
//   { value: "branch3", label: "Branch 3" }
];

const numberOfCopies = [
    {value: "", label: "----------Select--------------"},
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" }
  ];


  //PAYMENT MODE =====================================================

  const paymentMode = [
    {value: "", label: "----------Select--------------"},
    { value: "intrabank", label: "Intra Bank" },
    { value: "interbanks", label: "Inter Banks" },
    { value: "mobilemoney", label: "Mobile Money" },
    // { value: "interbank", label: "Inter Banks" },

  ]


  //NETWORK MODE =====================================================

  const networkMode = [
    {value: "", label: "----------Select--------------"},
    { value: "mtn", label: "MTN" },
    { value: "airteltigo", label: "AirtelTigo" },
    { value: "vodafone", label: "Vodafone" },
  ]


  const bankMode = [
    {value: "", label: "----------Select--------------"},
    { value: "nib", label: "National Investment Bank" },
    { value: "fbn", label: "FBN Bank Ghana" },
    { value: "umb", label: "Universal Merchant Bank" },
  ]



// ============================ ITEM STYLING =========================================== 
const Item = styled(Box)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(0.5),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));



// ========================================================================= 




const ChangeMobilePin = () => {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

//   Form states 
  const [value1, setValue1] = useState("");

    const [manageBeneficiaries, setManageBeneficiaries] = useState('')
    const [sourceAccounties, setSourceAccounties] = useState('')
    const [paymentModeState, setPaymentModeState ] = useState('')
    const [networkModeState, setNetworkModeState] = useState('')
    const [walletNumber, setWalletNumber] = useState('')
    const [bankModeState, setBankModeState] = useState('')
    const [referenceModeState, setReferenceModeState] = useState('')
    const [accountModeState, setaccountModeState] = useState('')
    const [phone_numberState, setPhoneNumberState] = useState('')
    const [pinState, setPinState] = useState('')



    //REQUEST CHEQUE BOOK 
    const [numberOfCopiesState, setNumberOfCopiesState] = useState(0)



    const handlePhone = (e) => {
        setPhoneNumberState(e.target.value)
    }

    const handlePin = (e) => {
        setPinState(e.target.pin)
    }

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };

  const handleManageBeneficiary = (event) => {
    setManageBeneficiaries(event.target.value);
  };

  const handleSourceAccount = (event) => {
    setSourceAccounties(event.target.value);
  };

  const handlePaymentMode = (event) => {
    setPaymentModeState(event.target.value)
  }

  const handleNetworkMode = (event) => {
    setNetworkModeState(event.target.value)
  }

  const handleWalletNumber = (e) => {
    setWalletNumber(e.target.value)
  }

  const handleBankMode = (e) => {
    setBankModeState(e.target.value)
  }

  const handleReferenceMode = (e) => {
    setReferenceModeState(e.target.value)
  }


  const handleAccountNumberMode = (e) => {
    setaccountModeState(e.target.value)
  }


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

    
    <Box
      style={{
        backgroundColor: "#fff",
        height: "100vh",
        borderRadius: 20,
        marginTop: 0,
        paddingLeft: 30,
        paddingRight: 30,
        // display: "flex",
        // justifyContent: "center"
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

      }}
    >

<Paper  elevation={12}
sx={{width: "30rem", display: "flex", padding: "30px 30px", borderRadius: 10 }}>
  
      <Grid container spacing={0} style={{
        // paddingLeft: 30, paddingRight: 30, 
        rowGap: 30, }}>
        <PageHeaderAndTitleContainer2 sx={{ mx: "auto", pt: 5, 
        // m: 5, 
        mb: 10 }}>
          <PageHeader2>Request - Change Mobile Banking PIN</PageHeader2>
          <SubTitle2 sx={{fontSize: {xs: 8, md: 10, lg: 12, marginTop: 5 }}}>
          Securely change your Mobile Banking PIN with just a few clicks
          </SubTitle2>
        </PageHeaderAndTitleContainer2>



{/* ================================= BEGIN OF Branch =================================  */}




<Grid item xs={3}sx={{mt: 1.5}} >
        
        <NameLabel sx={{}}>Account Number <span style={{color: "red"}}>*</span> </NameLabel>
</Grid>

<Grid item xs={9} sx={{display: "flex"}} >
          {/* <NameLabel >Select branch</NameLabel> */}       

    <TextField
      id="branch"
      fullWidth
      error={Boolean(errors.branch)}
      variant="outlined"

      select
      sx={{
        // padding: "5px 8px",
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
      value={sourceAccounties}
      onChange={handleSourceAccount}
    >
      {sourceAccount.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>


</Grid>







{/* ================================ PHONE PIN ==================================== */}

<Grid item xs={3}sx={{mt: 1.5}} >
        
        <NameLabel sx={{}}>Your Secret PIN<span style={{color: "red"}}>*</span></NameLabel>
</Grid>

<Grid item xs={9} sx={{display: "flex"}} >
          

    <TextField 
    // pattern="[0-9]{4}"
    inputProps={{ inputMode: 'numeric', pattern: '[0-9]{4}', maxLength: 4, }} 

    // inputProps={{
    //     pattern: "[0-9]{4}", // Only allow numbers
    //     maxLength: 4, // Limit input to 4 characters
    //   }}
      id="pin"
      fullWidth
      error={Boolean(errors.pin)}
      variant="outlined"

      
      sx={{
        // padding: "5px 8px",
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
      {...register("pin", {
        required: {
            required: true,
            pattern: /^[0-9]{4}$/i,
          message: "Your secret pin is required"
        }
      })}
      // label="Branch"
      placeholder="Enter 4 digits"
      
      value={pinState}
      onChange={handlePin}

    //   helperText={errors.pin && "Please enter exactly 4 digits"}
    />

        {/* <br />
        { (errors.pin?.message  ) &&
            <ErrorHelperTextContainer>
              {errors.pin?.message}
            </ErrorHelperTextContainer> 
          } */}
    

   

</Grid>




{/* ================================= END OF THE ROW ==========================  */}








        <Box style={{width: 200, marginLeft: "auto", marginRight: "auto", display: "flex", }}>
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
            {/* {loading ? ( <CircularProgress sx={{color: "#fff"}} size={24}  /> ) : "Create account"}   */}
            Submit
          </ButtonText>
        </ButtonComponent>


            

        </Box>

      

      </Grid>


    
        
        </Paper>

    </Box>

    // </ThemeProvider> 
  );
  
  
};

export default ChangeMobilePin;

