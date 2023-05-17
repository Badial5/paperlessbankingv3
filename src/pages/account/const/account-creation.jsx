import * as React from "react";

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


import { StyledTextField } from "./style/account-creation"



import UserImg from "./const/images/User.svg"
import { ErrorHelperTextContainer, GridItem, NameLabel, PageHeader2, PageHeaderAndTitleContainer2, SubTitle2, ButtonComponent, ButtonText,
  } from "./style/account-creation";
import { red } from "@mui/material/colors";
import { useState } from "react";

const MyFormControl = styled(FormControl)({
  minWidth: 120,
});

const TextFieldControl = styled(TextField)({
  minWidth: 300,
});


// const titles = ["Mr", "Mrs", "Miss", ];

const titles = [
  {value: "", label: "----------Select--------------"},
  { value: "mr", label: "Mr" },
  { value: "mrs", label: "Mrs" },
  { value: "miss", label: "Miss" },
  // { value: "gh_link", label: "Gh Link" },

]



// const idTypes = ["Passport", "Ghana Card", "Voter's Card", "DVLA" ];


const idTypes = [
  {value: "", label: "----------Select--------------"},
  { value: "passport", label: "Passport" },
  { value: "ghanacard", label: "Ghana Card" },
  { value: "votercard", label: "Voter's Card" },
  { value: "dvla", label: "DVLA" },

]


const accountTypes = [
  {value: "", label: "----------Select--------------"},
  { value: "saving", label: "Saving" },
  { value: "current", label: "Current" },
  { value: "business", label: "Business" },
  // { value: "dvla", label: "DVLA" },

]




// ============================ ITEM STYLING =========================================== 
const Item = styled(Box)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(0.5),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));








const AccountCreation = () => {

  const [page, setPage] = useState(0)

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };


  const { handleSubmit, register, watch, setValue, formState: {errors, isValid}, reset, trigger } = useForm({
    mode: "onTouched",
    defaultValues: {
      first_name: "",
      last_name: "",
      title: "",
      phone_number: "",
      id_type: "",
      id_number: "",
      account_type: "",
      email: "",

    }
  })


  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    title: "",
    phone_number: "",
    id_type: "",
    id_number: "",
    account_type: "",
    email: "",
    upload: "",
  })

  const FormTitles = ["Create an account", "Upload Image", "Confirm Details"]
 

  // const [fullName, setFullName] = React.useState("");
  const [titleState, setTitleState] = React.useState("Mr");
  const [firstNameState, setFirstNameState] = useState('')
  const [lastNameState, setLastNameState] = useState('')

  const [idTypeState, setIdTypeState] = React.useState("Passport");
  const [idNumberState, setIdNumberState] = React.useState("");


  const [accountTypeState, setAccountTypeState] = React.useState("")
  const [emailState, setEmailState] = useState('')
  const [phoneState, setPhoneState] = useState('')


  const handleTitle = (e) => {
    setTitleState(e.target.value)
  }

  const handleFirstName = (e) => {
    setFirstNameState(e.target.value)
  }


  const handleLastName = (e) => {
    setLastNameState(e.target.value)
  }


  const handleIdType = (e) => {
    setIdTypeState(e.target.value)
  }

  const handleNumber = (e) => {
    setIdNumberState(e.target.value)
  }

  const handleAccountType = (e) => {
    setAccountTypeState(e.target.value)
  }

  const handleEmail= (e) => {
    setEmailState(e.target.value)
  }

  const handlePhone = (e) => {
    setPhoneState(e.target.value)
  }







  const [formComplete, setFormComplete] = React.useState({

    first_name: null,
    last_name: null,
    email: null,
    phone_number: "0550000000",
    password1: null,
  
  });


  const backgroundColorText = {
    background: 'linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%)',
  };

 const onSubmit = (data) => {
  console.log(data)
 }


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
sx={{width: "40rem", display: "flex", padding: "10px 30px", borderRadius: 10 }}>
  
      <form onSubmit={handleSubmit(onSubmit)}>

      <Grid container spacing={0} style={{paddingLeft: 30, paddingRight: 30, rowGap: 20}}
      >

        
        <PageHeaderAndTitleContainer2 sx={{ mx: "auto", pt: 0, m: 5, mb: 10 }}>
          <PageHeader2>Create an account</PageHeader2>
          <SubTitle2>
            Take a selfie and fill the form below with the appropriate information
          </SubTitle2>
        </PageHeaderAndTitleContainer2>


        {/* <Grid item xs={12}>
        <TextField variant="outlined" placeholder="Hello" />
        </Grid>

        <Grid item xs={12}>
        <TextField  variant="outlined" placeholder="World" />
        </Grid> */}

{/* ================================= BEGIN OF NAME =================================  */}


{/* Title  */}
<Grid item xs={2}>
  <NameLabel sx={{ padding: "0px 17px", fontSize: 12, lineHeight: "16px", 
fontFamily: 'Poppins', fontWeight: 400 }}>Title</NameLabel>

  {/* <FormControl
    fullWidth
    sx={{
      "& .MuiSelect-root": {
        height: "2rem",
        width: 200,
        borderRadius: 100
      },
      "& .MuiInputBase-input": {
        padding: "5px 8px",
        textAlign: "center",
        fontSize: 12,
        fontFamily: 'Poppins'
      },
      "& .MuiOutlinedInput-root.Mui-focused": {
        "& fieldset": {
          borderColor: "#7833EE"
        }
      },
      "& fieldset": {
        borderRadius: "6px"
      }
    }}
  >
    <Select />

   
  </FormControl> */}

<TextField
      id="d_account"
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
      {...register("title", {
        required: {
          value: true,
          message: "Title is required"
        }
      })}
      // label="Branch"
      // placeholder="Please select Your title"
      value={titleState}
      onChange={handleTitle}
    >
      {titles.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>


  {/* {(errors.first_name?.message) && (
    <ErrorHelperTextContainer>
      {errors.first_name?.message}
    </ErrorHelperTextContainer>
  )} */}
</Grid>


        <Grid item xs={5} >
          <NameLabel sx={{padding: "0px 17px"}}>First Name</NameLabel>
  
          <TextField 
            type="text"
            id="first_name"
            fullWidth
            error={Boolean(errors.first_name)}
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
            {...register("first_name", {
              required: {
                value: true,
                message: "First name is required"
              }
            })}
            placeholder='eg. Joseph'
            value={firstNameState}
            onChange={handleFirstName}
            
          />
          { (errors.first_name?.message  ) &&
            <ErrorHelperTextContainer>
              {errors.first_name?.message}
            </ErrorHelperTextContainer> 
          }
        </Grid>
  
        <Grid item xs={5} >
          <NameLabel sx={{padding: "0px 17px"}}>Last Name</NameLabel>
  
          <TextField
            type="text"
            id="last_name"
            fullWidth
            error={Boolean(errors.last_name)}
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
            {...register("last_name", {
              required: {
                value: true,
                message: "Last name is required"
              }
            })}
            placeholder='eg. Smith'
            value={lastNameState}
            onChange={handleLastName}
          />
  
          { (errors.last_name?.message  ) &&
            <ErrorHelperTextContainer>
              {errors.last_name?.message}
            </ErrorHelperTextContainer> 
          }
        </Grid>


{/* ============================= END OF NAME ======================================= */}



{/* ============================= BEGIN OF SECOND FORM ========================== */}


        

        {/* Title  */}
<Grid item xs={3}>
  <NameLabel sx={{ padding: "0px 17px", fontSize: 12, lineHeight: "16px", 
fontFamily: 'Poppins', fontWeight: 400,  }}>ID Type</NameLabel>


  {/* <FormControl
    fullWidth
    sx={{
      "& .MuiSelect-root": {
        height: "2rem",
        width: 200,
        borderRadius: 100
      },
      "& .MuiInputBase-input": {
        padding: "5px 8px",
        textAlign: "center",
        fontSize: 12,
        fontFamily: 'Poppins'
      },
      "& .MuiOutlinedInput-root.Mui-focused": {
        "& fieldset": {
          borderColor: "#7833EE"
        }
      },
      "& fieldset": {
        borderRadius: "6px"
      }
    }}
  >
    <Select />

   
  </FormControl> */}

<TextField
      id="id_type"
      fullWidth
      error={Boolean(errors.id_type)}
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
      {...register("id_type", {
        required: {
          value: true,
          message: "ID Type is required"
        }
      })}
      // label="Branch"
      placeholder="Please select Card type"
      value={idTypeState}
      onChange={handleIdType}
    >
      {idTypes.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>


  {/* {(errors.first_name?.message) && (
    <ErrorHelperTextContainer>
      {errors.first_name?.message}
    </ErrorHelperTextContainer>
  )} */}
</Grid>
       
  
        <Grid item xs={9} >
          <NameLabel sx={{padding: "0px 17px"}}>ID Number</NameLabel>
  
          <TextField
          fullWidth
            type="text"
            id="id_type"
            error={Boolean(errors.id_number)}
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
            {...register("id_number", {
              required: {
                value: true,
                message: "ID number is required"
              }
            })}
            placeholder='eg. ID Number'
           value={idNumberState}
           onChange={handleNumber}
          />
  
          {/* { (errors.last_name?.message  ) &&
            <ErrorHelperTextContainer>
              {errors.last_name?.message}
            </ErrorHelperTextContainer> 
          } */}
        </Grid>

{/* ==================================== END OF SECOND ROW =================== */}


{/* ============================ BEGIN OF THE THIRD ROW =========================  */}

     {/* Account Type  */}
     <Grid item xs={2}>
  <NameLabel sx={{  fontSize: 10, lineHeight: "16px", 
fontFamily: 'Poppins', fontWeight: 400,  }}>Account Type</NameLabel>

  {/* <FormControl
    fullWidth
    sx={{
      "& .MuiSelect-root": {
        height: "2rem",
        width: 200,
        borderRadius: 100
      },
      "& .MuiInputBase-input": {
        padding: "5px 8px",
        textAlign: "center",
        fontSize: 12,
        fontFamily: 'Poppins'
      },
      "& .MuiOutlinedInput-root.Mui-focused": {
        "& fieldset": {
          borderColor: "#7833EE"
        }
      },
      "& fieldset": {
        borderRadius: "6px"
      }
    }}
    value={accountTypeState}
    onChange={handleAccountType}
  >
    {
      
      accountTypes.map(account => (
        <MenuItem key={account.value} value={account.value}>
          {account.label}
        </MenuItem>
      ))
    }
    <Select />

   
  </FormControl> */}

<TextField
      id="id_type"
      fullWidth
      error={Boolean(errors.id_type)}
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
      {...register("account_type", {
        required: {
          value: true,
          message: "Account type is required"
        }
      })}
      // label="Branch"
      placeholder="Please select account type"
      value={accountTypeState}
      onChange={handleAccountType}
    >
      {accountTypes.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>

  {/* {(errors.first_name?.message) && (
    <ErrorHelperTextContainer>
      {errors.first_name?.message}
    </ErrorHelperTextContainer>
  )} */}
</Grid>

{/* ================================= END OF THE THIRD ROW =======================  */}


{/* ================================= LAST ROW BEGIN ========================== */}

        <Grid item xs={5}>
          <NameLabel sx={{padding: "0px 17px"}}>Email</NameLabel>
  
          <TextField 
          fullWidth
            type="text"
            id="first_name"
            error={Boolean(errors.first_name)}
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
            {...register("email", {
              required: {
                value: true,
                message: "Email is required"
              }
            })}
            placeholder='eg. Email'
            value={emailState}
            onChange={handleEmail}
          
          />
          {/* { (errors.first_name?.message  ) &&
            <ErrorHelperTextContainer>
              {errors.first_name?.message}
            </ErrorHelperTextContainer> 
          } */}
        </Grid>
  
        <Grid item xs={5}>
          <NameLabel sx={{padding: "0px 17px"}}>Phone Number</NameLabel>
  
          <TextField
          fullWidth
            type="text"
            id="last_name"
            error={Boolean(errors.last_name)}
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
            {...register("phone_number", {
              required: {
                value: true,
                message: "Phone number is required"
              }
            })}
            placeholder='eg. (+233) 557000000'
           value={phoneState}
           onChange={handlePhone}
          />
  
          {/* { (errors.last_name?.message  ) &&
            <ErrorHelperTextContainer>
              {errors.last_name?.message}
            </ErrorHelperTextContainer> 
          } */}
        </Grid>

{/* ================================= END OF THE ROW ==========================  */}



        <Box style={{width: 200, marginLeft: "auto", marginRight: "auto"}}>
        <ButtonComponent type='submit'
       fullWidth
        onClick={ () => null}

        // disabled={formComplete}
        disabled={!isValid}

        // style={{
        //   background:( (formComplete.first_name) && (formComplete.first_name) 
        //   && (formComplete.email) && (formComplete.phone_number) 
        //   && (formComplete.password1  ) ) ? backgroundColorText.background : "#F3F3F3",
        // }}

        style={{ background: !isValid ? "#F3F3F3" : 'linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%)' }}
        
        sx={{ 
        padding: "0px 0px", }}>
          <ButtonText>
            {/* {loading ? ( <CircularProgress sx={{color: "#fff"}} size={24}  /> ) : "Create account"}   */}
            Continue
          </ButtonText>
        </ButtonComponent>

        

        </Box>


      </Grid>

      </form>

  </Paper>
    </Box>

    // </ThemeProvider> 
  );
  
  
};

export default AccountCreation;

