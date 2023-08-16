import React from 'react'
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';


import { DashboardPageBackground, DashboardPaper, GlobalPageHeader, GlobalSubPageHeader } from '../../../../assets/GlobalStyled/Globalstyles'

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


const PaymentHistory = () => {


      const { data, loading } = useDemoData({
        dataSet: 'Banking',
        rowLength: 1,
        maxColumns: 6,
      });

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'Reference', headerName: 'Reference', width: 100 },
        { field: 'Bill', headerName: 'Bill #', width: 70 },
        {
          field: 'Bill_service',
          headerName: 'Bill Service',
          type: 'number',
          width: 100,
        },
        {
          field: 'source',
          headerName: 'Source Account',
        //   description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 130,
        //   valueGetter: (params) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },

        {
            field: 'amount',
            headerName: 'Amount',
            type: 'number',
            width: 100,
          },

          {
            field: 'date',
            headerName: 'Date',
            type: 'number',
            width: 100,
          },

          {
            field: 'status',
            headerName: 'Status',
            // type: 'number',
            width: 100,
          },
      ];
      
      const rows = [
        { id: 1, Bill: '1', Reference: 'John', Bill_service: "Cash", 
        source: "14423238749203", amount: "Ghs 6000", date: "8th August 2023", status: "Done" },
        
      ];




  return (
    <DashboardPageBackground>
      <DashboardPaper
       sx={{width: "90%"}}>
        <GlobalPageHeader>
          Payment History
        </GlobalPageHeader>
        <GlobalSubPageHeader>
        Bill Payment History
        </GlobalSubPageHeader>





    <Box sx={{ height: 300, width: '100%' }}>
      <DataGrid 
      sx={{fontFamily: "Poppins", fontSize: 12, width: "100%"}}
        rows={rows}
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
    </Box>



       





      </DashboardPaper>
    </DashboardPageBackground>
  )
}

export default PaymentHistory
