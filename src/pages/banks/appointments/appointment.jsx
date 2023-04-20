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


const titles = ["Mr", "Mrs", "Miss", ];

const idTypes = ["Passport", "Ghana Card", "Voter's Card", "DVLA" ];

const currencies2 = ["GHS", "$", "¥"]

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

// ============================ ITEM STYLING =========================================== 
const Item = styled(Box)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(0.5),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));



// ========================================================================= 

// const theme = createTheme({
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           fontSize: '1rem',
//         },
//       },
//     },
//     MuiInputBase: {
//       styleOverrides: {
//         root: {
//           height: '2rem',
//           color: 'blue',
//           width: 120,
//           fontSize: 10,
//           textAlign: 'center',
//           fontFamily: 'Poppins',
//           m: 1,
//           '& > fieldset': {
//             borderColor: '#7833EE',
//           },
//           [`& fieldset`]: {
//             borderRadius: '6px',
//           },
//         },
//         // Separate InputProps object
//         input: {
//           height: '2rem',
//           fontSize: 10,
//           fontFamily: 'Poppins',
//         },
        
//       },
//     },
//   },
// });






const BankAppointment = () => {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };


  const { handleSubmit, register, watch, setValue, formState: {errors}, reset, trigger } = useForm({
    mode: "onTouched",
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      password1: "",
      // password2: "",
      // tnc: ""
    }
  })
  const [title, setTitle] = React.useState("Mr");
  const [fullName, setFullName] = React.useState("");
  const [idType, setIdType] = React.useState("Passport");
  const [idNumber, setIdNumber] = React.useState("");
  const [currency, setCurrency] = React.useState("$")
  const [accountType, setAccountType] = React.useState("")

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

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleIdTypeChange = (event) => {
    setIdType(event.target.value);
  };

  const handleIdNumberChange = (event) => {
    setIdNumber(event.target.value);
  };

  const handleCurrencyTypeChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.value);
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormComplete(prevState => ({...prevState, [name]: value }));
  }


  return (
    // <ThemeProvider theme={theme}>

    
    <Box
      style={{
        backgroundColor: "#fff",
        height: "100vh",
        borderRadius: 20,
        marginTop: 30,
        paddingLeft: 30,
        paddingRight: 30

      }}
    >
      <Grid container spacing={0} style={{paddingLeft: 30, paddingRight: 30, rowGap: 30}}>
        <PageHeaderAndTitleContainer2 sx={{ mx: "auto", pt: 5, m: 5, mb: 10 }}>
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

  <FormControl
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

   
  </FormControl>

  {(errors.first_name?.message) && (
    <ErrorHelperTextContainer>
      {errors.first_name?.message}
    </ErrorHelperTextContainer>
  )}
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
            onChange={(event) => {
              handleInputChange(event);
              setFormComplete(prevState => ({
                first_name: event.target.value,
                ...prevState,
              }));
            }}
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
            onChange={(event) => {
              handleInputChange(event);
              setFormComplete(prevState => ({
                last_name: event.target.value,
                ...prevState,
              }));
            }}
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
<Grid item xs={2}>
  <NameLabel sx={{ padding: "0px 17px", fontSize: 12, lineHeight: "16px", 
fontFamily: 'Poppins', fontWeight: 400,  }}>ID Type</NameLabel>

  <FormControl
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

   
  </FormControl>

  {(errors.first_name?.message) && (
    <ErrorHelperTextContainer>
      {errors.first_name?.message}
    </ErrorHelperTextContainer>
  )}
</Grid>
       
  
        <Grid item xs={10} >
          <NameLabel sx={{padding: "0px 17px"}}>ID Number</NameLabel>
  
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
            {...register("last_name", {
              required: {
                value: true,
                message: "Last name is required"
              }
            })}
            placeholder='eg. ID Number'
            onChange={(event) => {
              handleInputChange(event);
              setFormComplete(prevState => ({
                last_name: event.target.value,
                ...prevState,
              }));
            }}
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
     <Grid item xs={3}>
  <NameLabel sx={{ padding: "0px 17px", fontSize: 10, lineHeight: "16px", 
fontFamily: 'Poppins', fontWeight: 400,  }}>Account Type</NameLabel>

  <FormControl
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

   
  </FormControl>

  {(errors.first_name?.message) && (
    <ErrorHelperTextContainer>
      {errors.first_name?.message}
    </ErrorHelperTextContainer>
  )}
</Grid>

{/* ================================= END OF THE THIRD ROW =======================  */}


{/* ================================= LAST ROW BEGIN ========================== */}

        <Grid item xs={4}>
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
            {...register("first_name", {
              required: {
                value: true,
                message: "First name is required"
              }
            })}
            placeholder='eg. Email'
            onChange={(event) => {
              handleInputChange(event);
              setFormComplete(prevState => ({
                first_name: event.target.value,
                ...prevState,
              }));
            }}
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
            {...register("last_name", {
              required: {
                value: true,
                message: "Last name is required"
              }
            })}
            placeholder='eg. (+233) 557000000'
            onChange={(event) => {
              handleInputChange(event);
              setFormComplete(prevState => ({
                last_name: event.target.value,
                ...prevState,
              }));
            }}
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

        style={{
          background:( (formComplete.first_name) && (formComplete.first_name) 
          && (formComplete.email) && (formComplete.phone_number) 
          && (formComplete.password1  ) ) ? backgroundColorText.background : "#F3F3F3",
        }}
        
        sx={{ 
        padding: "0px 0px", }}>
          <ButtonText>
            {/* {loading ? ( <CircularProgress sx={{color: "#fff"}} size={24}  /> ) : "Create account"}   */}
            Continue
          </ButtonText>
        </ButtonComponent>

        

        </Box>


      </Grid>
    </Box>

    // </ThemeProvider> 
  );
  
  
};

export default BankAppointment;

