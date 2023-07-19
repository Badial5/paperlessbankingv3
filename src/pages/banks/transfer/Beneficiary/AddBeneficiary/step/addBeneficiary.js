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
  } from "../../../../../account/style/account-creation";
import { red } from "@mui/material/colors";
import { useState } from "react";
import { GlobalPageHeader, GlobalSubPageHeader } from "../../../../../../assets/GlobalStyled/Globalstyles";

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

const manageBeneficiary = [
    {value: "", label: "----------Select--------------"},
    { value: "newBeneficiary", label: "New Beneficiary" },
    // { value: "account2", label: "Account 2" },
    // { value: "account3", label: "Account 3" }
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


const AddBeneficiary = () => {

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
      // style={{
      //   backgroundColor: "#fff",
      //   height: "130vh",
      //   borderRadius: 20,
      //   marginTop: 30,
      //   paddingLeft: 30,
      //   paddingRight: 30

      // }}
    >

<GlobalPageHeader>Transfer - Third Party Transfer</GlobalPageHeader>

<GlobalSubPageHeader>
Third Party Transfer requires that you add new beneficiary to your profile before transfer can be made to such beneficiary 
</GlobalSubPageHeader>


<Grid container spacing={0} style={{ rowGap: 5}}>
       

{/* ================================= BEGIN OF Branch =================================  */}


<Grid item xs={3}sx={{mt: 1.5}} >
        
        <NameLabel sx={{}}>Source Account <span style={{color: "red"}}>*</span> </NameLabel>
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


<Grid item xs={3}sx={{mt: 1.5}} >
        
        <NameLabel sx={{}}>Beneficiary <span style={{color: "red"}}>*</span></NameLabel>
</Grid>

<Grid item xs={9} sx={{display: "flex"}} >
          {/* <NameLabel >Select branch</NameLabel> */}
          
  
          

    <TextField
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
      value={manageBeneficiaries}
      onChange={handleManageBeneficiary}
    >
      {manageBeneficiary.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>

   

</Grid>

{/* ================================================================================ */}
{/* ================================================================================== */}
{/* ================================================================================== */}
{/* =========================== OPTIONAL FEED OR SELECT ===================== */}


{
        manageBeneficiaries === "newBeneficiary" && (

            <>

<Grid item xs={3}sx={{mt: 1.5}} >
        
        <NameLabel sx={{}}>Payment Mode <span style={{color: "red"}}>*</span></NameLabel>
</Grid>


<Grid item xs={9} sx={{display: "flex"}} >
          {/* <NameLabel >Select branch</NameLabel> */}
          
  
          

    <TextField
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
      placeholder="Select Payment mode"
      value={paymentModeState}
      onChange={handlePaymentMode}
    >
      {paymentMode.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>

   

</Grid>

{/* =================================================================================== */}

{
    paymentModeState === "inlakspaywallet" ? (
        <>
        
        <Grid item xs={3}sx={{mt: 1.5}} >
        
        <NameLabel sx={{}}>Wallet Number <span style={{color: "red"}}>*</span></NameLabel>
</Grid>

            <Grid item xs={9} >
            <TextField 
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
            placeholder='Wallet number'
            onChange={  (event) => {
              handleInputChange(event);
              setFormComplete(prevState => ({
                first_name: event.target.value,
                ...prevState,
              }));
            }}
          />

          </Grid>


        </>
    ) 

    :  paymentModeState === "mobilemoney" ? (
        <>

<Grid item xs={3}sx={{mt: 1.5}} >
        
        <NameLabel sx={{}}>Wallet Number <span style={{color: "red"}}>*</span></NameLabel>
</Grid>

            <Grid item xs={9} >
            <TextField 
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
            placeholder='0235000000'
            value={walletNumber}
            onChange={handleWalletNumber}
          />

          </Grid>


          <Grid item xs={3}sx={{mt: 1.5}} >
        
        <NameLabel sx={{}}>Network <span style={{color: "red"}}>*</span></NameLabel>
        </Grid>


        <Grid item xs={9} sx={{display: "flex"}} >
          {/* <NameLabel >Network</NameLabel> */}
          
  
          

    <TextField
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
      placeholder="Please select network"
      value={networkModeState}
      onChange={handleNetworkMode}
    >
      {networkMode.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>

   

        </Grid>

        
        </>
    ) : paymentModeState === "interbanks" ? (<> 


        <Grid item xs={3}sx={{mt: 1.5}} >
        
        <NameLabel sx={{}}>Account number <span style={{color: "red"}}>*</span></NameLabel>
        </Grid>

            <Grid item xs={9} >
            <TextField 
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
            placeholder='Account number'
            onChange={  (event) => {
              handleInputChange(event);
              setFormComplete(prevState => ({
                first_name: event.target.value,
                ...prevState,
              }));
            }}
          />

          </Grid>


          <Grid item xs={3}sx={{mt: 1.5}} >
        
        <NameLabel sx={{}}>Bank <span style={{color: "red"}}>*</span></NameLabel>
        </Grid>


        <Grid item xs={9} sx={{display: "flex"}} >
          {/* <NameLabel >Network</NameLabel> */}
          
  
          

    <TextField
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
      placeholder="Please select network"
      value={bankModeState}
      onChange={handleBankMode}
    >
      {bankMode.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>

   

        </Grid>





    
     </>)  
     
    //  else  ==========================================
     : (
        <>
        
        <Grid item xs={3}sx={{mt: 1.5}} >
        
        <NameLabel sx={{}}>Account number <span style={{color: "red"}}>*</span></NameLabel>
        </Grid>

            <Grid item xs={9} >
            <TextField 
            type="text"
            id="reference"
            
            fullWidth
            error={Boolean(errors.account_number)}
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
            {...register("account_number", {
              required: {
                value: true,
                message: "Account number is required"
              }
            })}
            placeholder='Account number'
            value={accountModeState}
            onChange={  (event) => {
              handleAccountNumberMode(event);
              setFormComplete(prevState => ({
                account_number: event.target.value,
                ...prevState,
              }));
            }}
          />

          </Grid>

        </>
    )
}








{/* ================================================================================== */}
        
         
          </>


        )
    }



<Grid item xs={3}sx={{mt: 1.5}} >
        
        <NameLabel sx={{}}>Amount <span style={{color: "red"}}>*</span></NameLabel>
</Grid>

        <Grid item xs={9} >
          {/* <NameLabel sx={{padding: "0px 17px"}}>Name</NameLabel> */}
  
          <TextField 
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
        
        <NameLabel sx={{}}>Reference <span style={{color: "red"}}>*</span></NameLabel>
</Grid>

        <Grid item xs={9} >
          {/* <NameLabel sx={{padding: "0px 17px"}}>Name</NameLabel> */}
  
          <TextField 
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
            value={referenceModeState}
            onChange={(event) => {
              handleReferenceMode(event);
              setFormComplete(prevState => ({
                reference: event.target.value,
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
    </Box>

    // </ThemeProvider> 
  );
  
  
};

export default AddBeneficiary;

