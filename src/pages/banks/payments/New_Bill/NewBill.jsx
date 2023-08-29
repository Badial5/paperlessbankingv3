import React from 'react'
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import SearchIcon from '@mui/icons-material/Search';

import { DashboardPageBackground, DashboardPaper, GlobalPageHeader, GlobalSubPageHeader, GlobalTextField } from '../../../../assets/GlobalStyled/Globalstyles'

import ImgIcon from "../../../../assets/illustration_403"

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import { Box, InputAdornment, SvgIcon } from '@mui/material';
import CardWithIcon from './const/CardWithIcon';
import MenuCard from './const/MenuCard';

import {Inlaks } from "./const/assets/Image5.jpg"


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


const NewBillPayment = () => {

//Menu  List
  const menuList = ["Vilew Al", "Airtime Top Up", "Utilities", "Tertiary Education", "Basic School", "Ghana Card" ]

    

  return (
    <DashboardPageBackground>
      <DashboardPaper elevation={1}
       sx={{ display: "flex", mb: 30,
    flexDirection: "column",
    justifyContent: "flexStart",
    alignItems: "center",
    height: "auto",
    marginTop: 5,
    width: "95%"
    }}>

    
    <Box sx={{display: "flex", justifyContent: "space-between", width: "inherit", alignItems: "center"}}>

        <Box sx={{marginRight: "auto"}}>
            <Typography sx={{fontWeight: 500, fontSize: 12}}>Pay a new bill</Typography>
        </Box>

    {/* THE BOX FOR THE TITLE AND THE SEARCH BOX  */}
        <Box sx={{marginLeft: "auto"}}>
            <GlobalTextField placeholder='Search Service Name'
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon color="action">
                      <SearchIcon color='red' sx={{color: "#4991ff"}} />
                    </SvgIcon>
                  </InputAdornment>
                ),
              }}
               />
        </Box>

        </Box>



        {/* ============= Options menus +========================== */}

       

        <Box sx={{ display: "flex", 
          width: "inherit", backgroundColor: "rgba(61, 132, 238, 0.2)"
, marginTop: 2}}>

            
            <MenuCard name="All Menu" />

            {
              menuList.map((name) => (
                <MenuCard sx={{fontSize: 10}} name={name} />
              ))
            }

          
        </Box>



        <Box sx={{width: "inherit", marginTop: 2, display: "flex", justifyContent: "center", flexWrap: "wrap",  height: "auto" }}>

          {/* <CardWithIcon name="MTN" icon={<Inlaks />}  /> */}

          <CardWithIcon name="" icon={<ImgIcon />}  />
          

          {/* <CardWithIcon name="MTN" icon={<Image5 />} />
          <CardWithIcon name="MTN" icon={<Image5 />} />
          <CardWithIcon name="MTN" icon={<Image5 />} />
          <CardWithIcon name="MTN" icon={<Image5 />} />
          <CardWithIcon name="MTN" icon={<Image5 />} />
          <CardWithIcon name="MTN" icon={<Image5 />} />
          <CardWithIcon name="MTN" icon={<Image5 />} />

          <CardWithIcon name="MTN" icon={<Image5 />} />
          <CardWithIcon name="MTN" icon={<Image5 />} />
          <CardWithIcon name="MTN" icon={<Image5 />} />
          <CardWithIcon name="MTN" icon={<Image5 />} /> */}

         
          
        </Box>





          

      </DashboardPaper>
    
   

    </DashboardPageBackground>
  )
}

export default NewBillPayment
