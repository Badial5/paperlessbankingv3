import React from 'react'
import { DashboardPageBackground, DashboardPaper, GlobalPageHeader, GlobalSubPageHeader } from '../../assets/GlobalStyled/Globalstyles'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 
    // theme.palette.common.black,
    // "#9747FF",
    "#a991c7",
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




const ExchangeRate = () => {
  return (
    <DashboardPageBackground>
      <DashboardPaper sx={{width: "90%"}}>
        <GlobalPageHeader>
          Exchange Forex Rate
        </GlobalPageHeader>
        <GlobalSubPageHeader>
        Enquiry - Forex Rates as at Aug-02-2023
        </GlobalSubPageHeader>



        <TableContainer component={Paper}  >
      <Table sx={{ minWidth: 800 }} aria-label="customized table">
      <caption style={{backgroundColor: 
        // "#9747FF",
        // "#000000"
        "#FBFCFC"
        // "#a991c7",
        }}>
          
          Please Note: Foreign Exchange Rates applied to Card transactions may differ 
           </caption>
        <TableHead>
          <TableRow>
            <StyledTableCell>Currency</StyledTableCell>

            <StyledTableCell align="right">Bid</StyledTableCell>
            <StyledTableCell align="right">Offer(CASH)</StyledTableCell>
            <StyledTableCell align="right">Offer(TRANSFER)</StyledTableCell>
            {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.USD}</StyledTableCell>
              <StyledTableCell align="right">{row.EURO}</StyledTableCell>
              <StyledTableCell align="right">{row.GBP}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>





      </DashboardPaper>
    </DashboardPageBackground>
  )
}

export default ExchangeRate
