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






const OwnAccountTransfer = () => {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

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
          <PageHeader2>Transfer - Own Account transfer</PageHeader2>
          {/* <SubTitle2>
          Third Party Transfer requires that you add new beneficiary to your profile before transfer can be made to such beneficiary 
          </SubTitle2> */}
        </PageHeaderAndTitleContainer2>



{/* ================================= BEGIN OF Branch =================================  */}


<Grid item xs={3}sx={{mt: 1.5}} >
        
        <NameLabel sx={{}}>Select branch <span style={{color: "red"}}>*</span> </NameLabel>
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
      value={branches}
      onChange={handleSetBranch}
    >
      {branchs.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>

    

</Grid>


<Grid item xs={3}sx={{mt: 1.5}} >
        
        <NameLabel sx={{}}>Destination account <span style={{color: "red"}}>*</span></NameLabel>
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
      value={accountes}
      onChange={handleSetAccount}
    >
      {accounts.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>

</Grid>



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



        {/* <Grid item xs={6} > */}
          {/* <NameLabel sx={{padding: "0px 17px"}}>Date</NameLabel> */}
  
          {/* <TextField 
            type="text"
            id="date"
            fullWidth
            error={Boolean(errors.date)}
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
            {...register("date", {
              required: {
                value: true,
                message: "Date is required"
              }
            })}
            placeholder='eg. 18/04/2023'
            onChange={(event) => {
              handleInputChange(event);
              setFormComplete(prevState => ({
                date: event.target.value,
                ...prevState,
              }));
            }}
          /> */}
          {/* { (errors.date?.message  ) &&
            <ErrorHelperTextContainer>
              {errors.date?.message}
            </ErrorHelperTextContainer> 
          } */}


{/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker defaultValue={dayjs('2023-04-19')}
      format="YYYY/MM/DD"
      fullWidth
      // value={value1} 
      // onChange={(newValue) => setValue(newValue)} 
      {...register("date", {
        required: {
          value: true,
          message: "Date is required"
        }
      })}
      // placeholder='eg. 18/04/2023'
      onChange={(event) => {
        handleInputChange(event);
        setFormComplete(prevState => ({
          date: event.target.value,
          ...prevState,
        }));
      }}
        
      
      
      sx={{ 
        padding: "5px 8px",
        textAlign: "center",
        "& .MuiOutlinedInput-root.Mui-focused": {
          "& > fieldset": {
            borderColor: "#7833EE"
          }
        },

        "& .MuiInputBase-root": {
          height: "2rem",
          fontSize: 12,
          fontFamily: 'Poppins',
          width: "100%",
          width: 300
        },

        [`& fieldset`]:{
          borderRadius: "6px"
        }
      }}  

        InputProps={{
          style: {
            height: "1rem",
            width: "100%",
            fontSize: 12,
            fontFamily: 'Poppins'
          },

          "& .css-1e52oeh-MuiInputBase-root-MuiOutlinedInput-root": {
            height: "2rem",
            fontSize: 12,
            fontFamily: 'Poppins',
            width: "1rem"
          }
        }} />

          { (errors.date?.message  ) &&
            <ErrorHelperTextContainer>
              {errors.date?.message}
            </ErrorHelperTextContainer> 
          }
    </LocalizationProvider> */}
        {/* </Grid> */}


        {/* <Grid item xs={6} >
          <NameLabel sx={{padding: "0px 17px"}}>Time</NameLabel> */}

        
          {/* <TextField 
            type="text"
            id="Time"
            fullWidth
            error={Boolean(errors.time)}
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
            {...register("time", {
              required: {
                value: true,
                message: "Time is required"
              }
            })}
            placeholder='eg. Time'
            onChange={(event) => {
              handleInputChange(event);
              setFormComplete(prevState => ({
                time: event.target.value,
                ...prevState,
              }));
            }}
          /> */}
          {/* { (errors.time?.message  ) &&
            <ErrorHelperTextContainer>
              {errors.time?.message}
            </ErrorHelperTextContainer> 
          } */}

{/* <LocalizationProvider dateAdapter={AdapterDayjs}>
<MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} 
  sx={{
    height: "2rem",
    padding: "5px 8px",
    textAlign: "center",
    width: "100%",
    "& .MuiOutlinedInput-root.Mui-focused": {
      "& > fieldset": {
        borderColor: "#7833EE"
      }
    },
    "& .MuiInputBase-root": {
      height: "2rem",
      fontSize: 12,
      fontFamily: 'Poppins',
      width: "100%",
      width: 300
    },
    [`& fieldset`]:{
      borderRadius: "6px"
    }
  }}

 
  

    
    InputProps={{
      style: {
        height: "1rem",
        width: "100%",
        fontSize: 12,
        fontFamily: 'Poppins'
      },

      "& .css-1e52oeh-MuiInputBase-root-MuiOutlinedInput-root": {
        height: "2rem",
        fontSize: 12,
        fontFamily: 'Poppins',
        width: "1rem"
      }
    }}
/>

          { (errors.time?.message  ) &&
            <ErrorHelperTextContainer>
              {errors.time?.message}
            </ErrorHelperTextContainer> 
          }

</LocalizationProvider> */}
        {/* </Grid> */}


        {/* <Grid item xs={12} >
          <NameLabel sx={{padding: "0px 17px"}}>Comment</NameLabel> */}
          
          {/* <TextField 
           id="outlined-multiline-static"
            fullWidth
            // id="comments"
            multiline
            rows={4}


            error={Boolean(errors.comments)}
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
                height: "4rem",
                fontSize: 12,
                fontFamily: 'Poppins'
              },
            }}
            {...register("comments", {
              required: {
                value: true,
                message: "Comment is required"
              }
            })}
            // placeholder='Leave Your comment'
            onChange={(event) => {
              handleInputChange(event);
              setFormComplete(prevState => ({
                comments: event.target.value,
                ...prevState,
              }));
            }}
          /> */}
          {/* { (errors.comments?.message  ) &&
            <ErrorHelperTextContainer>
              {errors.comments?.message}
            </ErrorHelperTextContainer> 
          }
        </Grid> */}

        



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

export default OwnAccountTransfer;

