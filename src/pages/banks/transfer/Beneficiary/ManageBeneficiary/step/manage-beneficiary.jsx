import * as React from "react";
import { useNavigate } from "react-router-dom";
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import dayjs from 'dayjs';
// import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DataGrid } from '@mui/x-data-grid';

//PRINT FILES LIBRARIES
import ReactToPrint from 'react-to-print';
// import * as FileSaver from 'file-saver';
import { saveAsFileSaver } from 'file-saver';
import * as XLSX from 'xlsx';
// import * as CSV from 'csv-parse';
// import { parseCsv } from 'csv-parse';

import jsPDF from 'jspdf';

import { useReactToPrint } from "react-to-print";



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
import { useRef } from "react";
import { GlobalPageHeader, GlobalSubPageHeader, GlobalTextField } from "../../../../../../assets/GlobalStyled/Globalstyles";







// ========================================================================= 








const ManageBeneficiary = ({onOptionSelect}) => {

  //SESSION STORAGE STATES
  const [selectedOption, setSelectedOption] = useState('default');


  const navigate = useNavigate()

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


  // ======================================================================================

  const handleOptionClick = (option) => {
    sessionStorage.setItem('selectedOption', option);
    onOptionSelect(option);

    setSelectedOption(option);
  };

  const handleOptionClick2 = (option) => {
    sessionStorage.setItem('selectedOption', option);
    onOptionSelect(option);

    setSelectedOption(option);
  };










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

  const componentRef = useRef()

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "PrintPage",
    onAfterPrint: () => alert("Print Successfully")
  })

  const handleClick = () => {
    window.print();
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormComplete(prevState => ({...prevState, [name]: value }));
  }

  const handleNavigate = () => {
    navigate("/add-beneficiary")
  }



 


  const columns = [
    { field: 'id',  headerName: '#', width: 20 },

    {
      field: 'name',
      headerName: 'Name',
      width: 60,
      editable: false,
      
    },

    {
      field: 'paymentMode',
      headerName: 'Payment Mode',
      width: 110,
      editable: false,
    },


    {
      field: 'mainAccount',
      headerName: 'Main Account',
      // type: 'number',
      width: 110,
      editable: false,
    },
    {
      field: 'source',
      headerName: 'Source',
      width: 60,
      editable: false,
      // valueGetter: (params) =>
      //   `${params.row.balance || ''} ${params.row.balance || ''}`,
    },

    {
      field: 'date',
      headerName: 'Date',
      description: 'This column has a value getter and is not sortable.',
      type: "number",
      sortable: false,
      width: 20,
      // valueGetter: (params) =>
      //   `${params.row.balance || ''} ${params.row.balance || ''}`,
    },

    {
        field: 'action',
        headerName: 'Action',
        description: 'This column has a value getter and is not sortable.',
        type: "number",
        sortable: false,
        width: 50,
        // valueGetter: (params) =>
        //   `${params.row.balance || ''} ${params.row.balance || ''}`,
      },

    // {
    //   field: 'status',
    //   headerName: 'Status',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 90,
    //   // valueGetter: (params) =>
    //   //   `${params.row.currency || ''} ${params.row.currency || ''}`,
    // },

    // {
    //     field: 'action',
    //     headerName: 'Action',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 90,
    //     // valueGetter: (params) =>
    //     //   `${params.row.currency || ''} ${params.row.currency || ''}`,
    //   },
  ];
  
  const rows = [
    { id: "", accountNumber: "",
    accountName: "",
    destinationAccount: "No data available in table",
    amount: "",
    mainAccount: "No Data Available", 
    balance: "",
    status: "" 
  },
   
  ];


  return (
    // <ThemeProvider theme={theme}>

    
    <Box
      // style={{
      //   backgroundColor: "#fff",
      //   height: "100vh",
      //   borderRadius: 20,
      //   marginTop: 30,
      //   paddingLeft: 30,
      //   paddingRight: 30

      // }}
    >

        <GlobalPageHeader>Manage Beneficiary</GlobalPageHeader>
          <GlobalSubPageHeader>
          Efficiently Organize and Support Your Beneficiaries with Manage Beneficiary Tools.
          </GlobalSubPageHeader>

          <Button variant="contained" sx={{height: 30, 
          // background: "#7039d1", 
          // background: "#00BFFF",
          background: "#4991ff",
          "&:hover": {
            // background: "#7833EE",
            background: "#00BFFF",
            }}} onClick={handleOptionClick}>ADD NEW
          </Button>


     
      <Grid container spacing={0} style={{paddingLeft: 30, paddingRight: 30, rowGap: 5, 
      // height: window.innerHeight,
      // height: "50%",
       width: "100%"}}
      // ref={componentRef} 
      >
      
    




      {/* SEARCH BUTTON  */}
    <Grid item xs={12}>
          {/* <NameLabel sx={{padding: "0px 17px"}}>Receipient account number</NameLabel> */}

      <Box sx={{display: "flex", flexDirection: "column"}}>

        <span style={{fontSize: 12, display: "flex", alignItems: "center", justifyContent: "flex-end"}}>Search
          <GlobalTextField
            type="text"
            id="recipient_account"
            
            // error={Boolean(errors.r_account)}
            variant="outlined" 
          
            {...register("banker", {
              required: {
                value: false,
                
              }
            })}
            placeholder=''
            onChange={(event) => {
              handleInputChange(event);
              setFormComplete(prevState => ({
                first_name: event.target.value,
                ...prevState,
              }));
            }}
          />

        </span>


    </Box>
    </Grid>


<Box sx={{ height: 'auto', width: "100%", fontSize: 12, fontFamily: "Poppins" }}>

      <DataGrid sx={{fontSize: 8, fontFamily: 'Poppins'}}
      autoHeight
      autoPageSize
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[2]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
   

        



{/* ================================= END OF THE ROW ==========================  */}



        

        

    

        {/* ================================================================================================== */}

       
   
      


          {/* ================================================================================================== */}

      </Grid>
    </Box>

    // </ThemeProvider> 
  );
  
  
};

export default ManageBeneficiary;

