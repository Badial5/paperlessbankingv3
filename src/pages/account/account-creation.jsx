import * as React from "react";
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

import UserImg from "./const/images/User.svg"
import { ErrorHelperTextContainer, GridItem, NameLabel, PageHeader2, PageHeaderAndTitleContainer2, SubTitle2 } from "../auth/sign-up/signup.styles";

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


const AccountCreation = () => {
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

  return (

    <Box >
    
   

     


<PageHeaderAndTitleContainer2 sx={{mt: 1, mx: "auto"}}  >
  <PageHeader2 >
  Create an account
  </PageHeader2>

  <SubTitle2>
  Take a selfie and fill the form below with the appropriate information
  </SubTitle2>

</PageHeaderAndTitleContainer2>

<Box sx={{maxWidth: "100%", ml: "auto", mr: "auto"}}>


<Grid container spacing={1} columnSpacing={{ xs: 0.5, sm: 0.5, md: 0.5 }}
 sx={{ display: "flex", 
justifyContent: "center", ml: "auto", mr: "auto" }}>

    
    {/* Title Select Field  */}
<Grid item xs={12} sm={6} sx={{   }}>
<Item> 
  <MyFormControl variant="outlined">
    <NameLabel id="title-label" sx={{ mb: 1 }}>
      Title jkj
    </NameLabel>
    <TextField
      select
      labelId="title-label"
      id="title"
      value={title}
      onChange={handleTitleChange}
      sx={{
        
        "& .MuiOutlinedInput-root.Mui-focused": {
          "& > fieldset": {
            borderColor: "#7833EE",
          },
        },
        "& fieldset": {
          borderRadius: "6px",
        },
      }}
      InputProps={{
        style: {
          height: "2rem",
          fontSize: 12,
          fontFamily: "Poppins",
        },
      }}
    >
      {titles.map((title) => (
        <MenuItem key={title} value={title}>
          {title}
        </MenuItem>
      ))}
    </TextField>
  </MyFormControl>

  </Item>
</Grid>




{/* ========================= END OF TITLE ===================================  */}


<Grid item xs={12} sm={8} lg={6} sx={{mx: {sm: -15}, }}>
  <Item> 
<NameLabel id="title-label" sx={{ mb: 1 }}>
      Full Name
    </NameLabel>
  <TextField
    id="full-name"
    variant="outlined"
    fullWidth
    value={fullName}
    onChange={handleFullNameChange}
    sx={{
      width: {sm: "40%", lg: "70%",},
      "& .MuiOutlinedInput-root.Mui-focused": {
        "& > fieldset": {
          borderColor: "#7833EE",
        },
      },
      "& fieldset": {
        borderRadius: "6px",
      },
    }}
    InputProps={{
      style: {
        height: "2rem",
        fontSize: 12,
        fontFamily: "Poppins",
      },
    }}
    placeholder="Full Name"
  />

</Item>
</Grid>




   {/* Title Select Field  */}
   <Grid item xs={12} sm={6} sx={{   }}>
    {/* <Item> */}
  <MyFormControl variant="outlined">
    <NameLabel id="title-label" sx={{ mb: 1 }}>
    ID Type
    </NameLabel>
    <TextField
      select
      labelId="title-label"
      id="title"
      value={idType}
      onChange={handleIdTypeChange}
      sx={{
        
        "& .MuiOutlinedInput-root.Mui-focused": {
          "& > fieldset": {
            borderColor: "#7833EE",
          },
        },
        "& fieldset": {
          borderRadius: "6px",
        },
      }}
      InputProps={{
        style: {
          height: "2rem",
          fontSize: 12,
          fontFamily: "Poppins",
        },
      }}
    >
           {idTypes.map((idtype) => (
        <MenuItem key={idtype} value={idtype}>
          {idtype}
        </MenuItem>
      ))}

    </TextField>
  </MyFormControl>
  {/* </Item>  */}
</Grid>




{/* ========================= END OF TITLE ===================================  */}


<Grid item xs={12} sm={8} lg={6} sx={{mx: {sm: -15} }}>
  {/* <Item>  */}
<NameLabel id="title-label" sx={{ mb: 1 }}>
ID Number
    </NameLabel>
  <TextField
    id="id-number"
    variant="outlined"
    fullWidth
    value={idNumber}
    onChange={handleIdNumberChange}

    sx={{
      width: "70%",
      "& .MuiOutlinedInput-root.Mui-focused": {
        "& > fieldset": {
          borderColor: "#7833EE",
        },
      },
      "& fieldset": {
        borderRadius: "6px",
      },
    }}
    InputProps={{
      style: {
        height: "2rem",
        fontSize: 12,
        fontFamily: "Poppins",
      },
    }}
    placeholder="GHA-000-000-0000"
  />

  {/* </Item> */}
</Grid>




    {/* ACCOUNT INFORMATION SECTION  */}
<Grid item xs={12}>
{/* <Item> */}
<Typography sx={{ml: 13, mt: 0, fontSize: 12, padding: "0px 10px"}}>
  Account Information 
</Typography>
{/* </Item> */}
</Grid>



 {/* Title Select Field  */}
 <Grid item xs={12} sm={4} lg={6} sx={{   }}>

 {/* <Item>  */}
  <MyFormControl variant="outlined">
    <NameLabel id="title-label" sx={{ mb: 1 }}>
    Currency
    </NameLabel>
    <TextField
      select
      labelId="title-label"
      id="title"
      value={currency}
      onChange={handleCurrencyTypeChange}


      sx={{
        
        "& .MuiOutlinedInput-root.Mui-focused": {
          "& > fieldset": {
            borderColor: "#7833EE",
          },
        },
        "& fieldset": {
          borderRadius: "6px",
        },
      }}
      InputProps={{
        style: {
          height: "2rem",
          fontSize: 12,
          fontFamily: "Poppins",
        },
      }}
    >
           {currencies2.map((currencydiff) => (
        <MenuItem key={currencydiff} value={currencydiff}>
          {currencydiff}
        </MenuItem>

      ))}

    </TextField>
  </MyFormControl>

  {/* </Item>  */}
</Grid>




{/* ========================= END OF TITLE ===================================  */}


<Grid item xs={12} sm={8} lg={6} sx={{mx: {sm: -15} }}>
{/* <Item>  */}

<NameLabel id="currency-label" sx={{ mb: 1, }}>
  Account type
</NameLabel>
  <TextField
    id="id-number"
    variant="outlined"
    fullWidth
    value={accountType}
    onChange={handleAccountTypeChange}

    sx={{
      width: "70%",
      "& .MuiOutlinedInput-root.Mui-focused": {
        "& > fieldset": {
          borderColor: "#7833EE",
        },
      },
      "& fieldset": {
        borderRadius: "6px",
      },
    }}
    InputProps={{
      style: {
        height: "2rem",
        fontSize: 12,
        fontFamily: "Poppins",
      },
    }}
    placeholder="eg. Saving Account"
  />
{/* </Item>  */}
</Grid>

{/* Some details  */}

    {/* CONTACT INFORMATION SECTION  */}
   





       {/* ACCOUNT INFORMATION SECTION  */}
<Grid item xs={12}>
{/* <Item>  */}
<Typography sx={{ml: 13, mt: 0, fontSize: 12, padding: "0px 10px"}}>
  Contact Information 
</Typography>
{/* </Item>  */}
</Grid>





{/* ========================= END OF TITLE ===================================  */}








</Grid>
</Box>

    </Box>
  );
};

export default AccountCreation;
