import * as React from "react";
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
  } from "../../../../account/style/account-creation";
import { red } from "@mui/material/colors";
import { useState } from "react";
import { useRef } from "react";
import { GlobalPageHeader, GlobalSubPageHeader, GlobalTextField } from "../../../../../assets/GlobalStyled/Globalstyles";







// ========================================================================= 








const TransferHistory = () => {

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



 


  const columns = [
    { field: 'id', headerName: '#', width: 20 },

    {
      field: 'bankReference',
      headerName: 'Bank Reference',
      width: 110,
      editable: false,
      
    },

    {
      field: 'sourceAccount',
      headerName: 'Source Account',
      width: 110,
      editable: false,
    },


    {
      field: 'destinationAccount',
      headerName: 'Destination Account',
      // type: 'number',
      width: 150,
      editable: false,
    },
    {
      field: 'destinationType',
      headerName: 'Destination Type',
      width: 130,
      editable: false,
      // valueGetter: (params) =>
      //   `${params.row.balance || ''} ${params.row.balance || ''}`,
    },

    {
      field: 'amount',
      headerName: 'Amount',
      description: 'This column has a value getter and is not sortable.',
      type: "number",
      sortable: false,
      width: 80,
      // valueGetter: (params) =>
      //   `${params.row.balance || ''} ${params.row.balance || ''}`,
    },

    {
        field: 'date',
        headerName: 'Date',
        description: 'This column has a value getter and is not sortable.',
        type: "number",
        sortable: false,
        width: 90,
        // valueGetter: (params) =>
        //   `${params.row.balance || ''} ${params.row.balance || ''}`,
      },

    {
      field: 'status',
      headerName: 'Status',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 90,
      // valueGetter: (params) =>
      //   `${params.row.currency || ''} ${params.row.currency || ''}`,
    },

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
    currency: "", 
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

{/* <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
      <Button variant="contained" onClick={handleClick}>
        Print to PDF
      </Button>
    </Box> */}


          <GlobalPageHeader>Transfer History</GlobalPageHeader>
          <GlobalSubPageHeader>
          Record of electronic money transfers.
          </GlobalSubPageHeader>
        

      <Grid container spacing={0} style={{paddingLeft: 30, paddingRight: 30, rowGap: 10, 
      height: window.innerHeight,
      // height: "50%",
       width: "100%"}}
      ref={componentRef} 
      >
    
          
{/* ================================= BEGIN OF NAME =================================  */}

       

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
                value: true,
                message: "Account number is required"
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


<Box sx={{  width: "100%", fontSize: 12, fontFamily: "Poppins" }}>
      <DataGrid
      sx={{fontFamily: 'Poppins', fontSize: 10}}
        rows={rows}
        autoHeight
        autoPageSize
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

       
    <Box
      style={{
        width: 300,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
      }}
    >

      

      {/* <Button
        type="submit"
        fullWidth
        onClick={() => null}
        disabled={!formComplete}
        style={{
          background:
            formComplete.date &&
            formComplete.time &&
            formComplete.branch &&
            formComplete.banker &&
            formComplete.comment
              ? backgroundColorText.background
              : "#F3F3F3",
        }}
        sx={{
          padding: "0px 0px",
        }}
      >
        
      </Button> */}
      </Box>
      


          {/* ================================================================================================== */}

      </Grid>
    </Box>

    // </ThemeProvider> 
  );
  
  
};

export default TransferHistory;

