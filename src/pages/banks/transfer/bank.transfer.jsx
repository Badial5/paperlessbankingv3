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

const currencies2 = ["GHS", "$", "¥"]


const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" }
];



// ============================ ITEM STYLING =========================================== 
const Item = styled(Box)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(0.5),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));






const BankTransfer = () => {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };


  const [value1, setValue1] = useState("");

  const handleChange1 = (event) => {
    setValue1(event.target.value);
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


  return (
    // <ThemeProvider theme={theme}>

    
    <Box
      style={{
        backgroundColor: "#fff",
        height: "100vh",
        borderRadius: 20,
        // marginTop: 30,
        // paddingLeft: 30,
        // paddingRight: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >

<Paper  elevation={12}
sx={{width: "30rem", display: "flex", padding: "30px 30px", borderRadius: 10 }}>

      <Grid container spacing={2} style={{paddingLeft: 30, paddingRight: 30, rowGap: 30}}>
        <PageHeaderAndTitleContainer2 sx={{ mx: "auto", pt: 5, m: 5, mb: 10 }}>
          <PageHeader2>My Schedule</PageHeader2>
          <SubTitle2>
            Conveniently Send and Receive Funds Anytime, Anywhere with Bank Transfer.
          </SubTitle2>
        </PageHeaderAndTitleContainer2>



{/* ================================= BEGIN OF NAME =================================  */}

        <Grid item xs={12} >
          <NameLabel sx={{padding: "4px 6px", }}>Transfer type</NameLabel>
  
        <TextField
        id="first_name"
        fullWidth
        placeholder="Transfer type"
        error={Boolean(errors.branch)}
        variant="outlined"

        select
        sx={{
            textAlign: "center",
            ml:1,
            width: 300,
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
            // width: "290px",
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
        value={value1}
        onChange={handleChange1}
        >
        {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
            {option.label}
            </MenuItem>
        ))}
        </TextField>

        </Grid>



        {/* <Grid item xs={6} >
          <NameLabel sx={{padding: "0px 17px"}}>Source account</NameLabel>
  
          <TextField 
            type="text"
            id="banker"
            fullWidth
            error={Boolean(errors.banker)}
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
            {...register("banker", {
              required: {
                value: true,
                message: "Banker name is required"
              }
            })}
            placeholder='Source account'
            onChange={(event) => {
              handleInputChange(event);
              setFormComplete(prevState => ({
                first_name: event.target.value,
                ...prevState,
              }));
            }}
          />
          { (errors.banker?.message  ) &&
            <ErrorHelperTextContainer>
              {errors.banker?.message}
            </ErrorHelperTextContainer> 
          }
        </Grid> */}

        <Grid item xs={12} sx={{}} >
                <NameLabel sx={{padding: "4px 6px", }}>Source Account</NameLabel>
        
                

                <TextField
                id="first_name"
                fullWidth
                placeholder="Transfer type"
                error={Boolean(errors.branch)}
                variant="outlined"

                select
                sx={{
                  width: 300,
                    textAlign: "center",
                    ml:1,
                    // width: "280px",
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
                    // width: "300px",
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
                value={value1}
                onChange={handleChange1}
                >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>

                </Grid>




   

        



{/* ================================= END OF THE ROW ==========================  */}


        <Grid item xs={12}>
        <Box style={{width: 200, marginLeft: "auto", marginRight: "auto"}}>
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

      </Grid>

      </Paper>
    </Box>

    // </ThemeProvider> 
  );
  
  
};

export default BankTransfer;

