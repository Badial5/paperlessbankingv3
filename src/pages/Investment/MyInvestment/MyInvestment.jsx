import React from 'react'
import { DataGrid, GridOverlay, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';


import { DashboardPageBackground, DashboardPaper, GlobalPageHeader, GlobalSubPageHeader } from '../../../assets/GlobalStyled/Globalstyles'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 
    // theme.palette.common.black,
    // "#9747FF",
    // "#a991c7",
    // "#00BFFF",
    "#4991ff",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, USD, EURO, GBP,) {
  return { name, USD, EURO, GBP, };
}

const rows = [
  createData('USD ', 10.7000, 11.7600, 11.7500),
  createData('EURO ',  11.7400, 13.2300, 13.2200),
  createData('GBP', 13.8000, 15.4100, 15.4000),
 
];

function CustomToolbar() {
    return (
      <GridToolbarContainer sx={{fontSize: 8,}}>
        <GridToolbarExport sx={{fontSize: 10, color: "#4991ff"}} />
      </GridToolbarContainer>
    );
  }


const MyInvestment = () => {


      const { data, loading } = useDemoData({
        dataSet: 'Banking',
        rowLength: 1,
        maxColumns: 6,
      });

    const columns = [
        { field: 'id', headerName: 'Investment ID', width: 100 },

        { field: 'category', headerName: 'Category', width: 90 },

        { field: 'investmenttype', headerName: 'Investment Type', width: 115},

        {
          field: 'currency',
          headerName: 'Currency',
          type: 'Currency',
          width: 100,
        },

        {
          field: 'interestRate',
          headerName: 'Interest Rate',
          sortable: false,
          width: 90,
       
        },

        {
            field: 'valueDate',
            headerName: 'Value Date',
            type: 'number',
            width: 90,
          },

          {
            field: 'amount',
            headerName: 'Amount',
            type: 'number',
            width: 80,
          },

        //   {
        //     field: 'interest',
        //     headerName: 'Interest Amount',
        //     width: 110,
        //   },

        //   {
        //     field:'action',
        //     headerName: 'Action',
          
        //     width: 70,
        //   },
      ];
      
    //   const rows = [
    //     { id: 1, 
    //         contractNumber: '1', 
    //         loanType: 'John', 
    //         balance: "Cash", 
    //         interestRate: "14423238749203", valueDate: "Ghs 6000", 
    //         maturityDate: "8th August 2023", interest: "Done",
    //         action: "Done" },
        
    //   ];

    const rows = [
        { id: 1, 
            requestType: "",
            requestDate: "",
            status: "",
            
        },
        
      ];


      // If no data, add a special row for displaying "No Data" message
//   const gridRows = data.rows.length === 1 ? [{ id: 'NO DATA AVAILABLE' }] : rows;


// If no data, set gridRows to an empty array
const gridRows = data.rows.length === 1 ? [] : rows;



// Determine whether to display "No Data Available" overlay
const showNoDataOverlay = loading || rows.length === 0;



 // Custom overlay component
 const NoDataOverlay = () => (
    <GridOverlay>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          padding: '20px',
          textAlign: 'center',
          gridRow: 'span 3', // Spans 3 rows
        }}
      >
        No Data Available
      </div>
    </GridOverlay>
  );

  const CustomNoData = () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: '20px',
        textAlign: 'center',
        gridRow: 'span 3', // Spans 3 rows
      }}
    >
      No Data Available
    </div>
  );





  return (
    <DashboardPageBackground>
      <DashboardPaper
       sx={{width: "90%"}}>
        <GlobalPageHeader>
          My Investment
        </GlobalPageHeader>
        <GlobalSubPageHeader>
        Navigating Wealth Building: My Investment Odyssey
        </GlobalSubPageHeader>





    {/* <Box sx={{ height: 300, width: '100%' }}>
      <DataGrid 
      sx={{fontFamily: "Poppins", fontSize: 12, width: "100%"}}
        rows={gridRows}
        loading={data.rows.length === 0 ? loading : false}
        autoHeight
        // {...data}

        slots={{
          toolbar: CustomToolbar,
        }}
 
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 1 },
          },
        }}
        pageSizeOptions={[2, 4]}
        checkboxSelection
      />
    </Box> */}

<Box sx={{ height: 300, width: '100%' }}>
          <DataGrid
            sx={{ fontFamily: 'Poppins', fontSize: 12, width: '100%' }}
            rows={gridRows}
            loading={loading}
            autoHeight
            columns={columns}
            pageSizeOptions={[2, 4]}
            // checkboxSelection
            slots={{
                noRowsOverlay: CustomNoData,
              }}
          />
        </Box>

      {/* <Box sx={{ height: 300, width: '100%' }}>
          {data.rows.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '20px' }}>No Data</div>
          ) : (
            <DataGrid
              sx={{ fontFamily: 'Poppins', fontSize: 12, width: '100%' }}
              rows={rows}
              loading={loading}
              autoHeight
              columns={columns}
              slots={{
                toolbar: CustomToolbar,
              }}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 1 },
                },
              }}
              pageSizeOptions={[2, 4]}
              checkboxSelection
            />
          )}
        </Box> */}



       





      </DashboardPaper>
    </DashboardPageBackground>
  )
}

export default MyInvestment
