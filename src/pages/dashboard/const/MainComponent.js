import { useState } from 'react';
import { useLocation } from 'react-router-dom';
// import AccountCreation from './AccountCreation';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Dashboard } from '@mui/icons-material';
import AccountCreation from '../../account/account-creation';
import AccountOfficer from "../../account/account-officer"
import DashboardHomePage from './GraphDashboard';

import BarChart from './graph/barChart';
import { UserData, UserDepositWithdrawalData } from './data/userData';

//MUI COMPONENTS 
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


const DefaultContent = () => {
  return <>
    DEFAULT CONTENT
  </>
}

const GamesContent = () => {
  return <div style={{background: "yellow", color: "white", fontSize: 50}}>
          <h1>Games Content</h1>
  </div>
}

const MainContent = ({ title, children, selectedOption }) => {
  const location = useLocation();

  let content;

  const [userData, setUserData] = useState({
    labels: UserData.map(data => data.year ),
    datasets: [{
      label: "Deposit",
      data: UserData.map(data=> data.userGain),
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 2,
    }, 

    {
      label: "Withdrawal",
      data: UserData.map(data=> data.userLost),
      backgroundColor: [
        "#2a71d0",
        "#50AF95",
        "#ecf0f1",
        "rgba(75,192,192,1)",
        "#f3ba2f",
        
      ],
      borderColor: "black",
      borderWidth: 2,
    }, 


  
  ],
  })

  const [userTransaction, setUserTransaction] = useState({
    labels: UserDepositWithdrawalData.map(data => data.month ),

    datasets: [{
      label: "Deposit",
      data: UserDepositWithdrawalData.map(data=> data.deposit),
      backgroundColor: [
        // "rgba(75,192,192,1)",
        // "#ecf0f1",
        // "#50AF95",
        // "#f3ba2f",
        // "#2a71d0",

        "#9747FF"
        // `linear-gradient(180deg, #FFD572 0%, #FEBD38 100%)`
      ],
      
      // borderColor: "black",
      // borderWidth: 2,
    }, 

    {
      label: "Withdrawal",
      data: UserDepositWithdrawalData.map(data=> data.withdrawal),
      backgroundColor: [
        // "#2a71d0",
        // "#50AF95",
        // "#ecf0f1",
        // "rgba(75,192,192,1)",
        // "#f3ba2f",

        "#FFD572"
        
      ],
      // borderColor: "black",
      // borderWidth: 2,
    }, 


  
  ],
  })

  switch (selectedOption) {
    case 'account-creation':
      content = <div style={{minWidth: "100%"}}> <AccountCreation /> </div>
      break;
    case 'account-officer':
      content = <div style={{width: "100%"}}> <AccountOfficer /> </div>
      break;

      case 'games':
      content = <AccountOfficer />;
      break;


    // default:
    //   content = <DefaultContent />;
    //   break;

    default:
      content = 
      <div style={{width: "100%"}}>
      <BarChart chartData={userTransaction} />
      </div>
      break;
  }

  return (
    <Box sx={{ width: "60vw", background: "#F4F7FF" }}>
      <AppBar position="static" 
      sx={{background: "#FBFCFC", color: "#000", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
      borderRadius: 1, display: "flex", justifyContent: "center"}} >
        <Toolbar>
          <Dashboard />
          {/* <Typography variant="h6" component="div" sx={{ ml: 2, color: "#000" }}>
            {title}
          </Typography> */}

          <Box sx={{display: "flex", justifyContent: "flex-end", ml: "auto", 
         }}>

            <Box sx={{display: "flex", justifyContent: "space-between"}}>
              <Typography sx={{fontSize: 8, border: "1px solid black", borderRadius: 2,
            mr: 20,  p: 1}}>
                Retail Banking
              </Typography>

          <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", 
        mr: 5}}>

            <LocationOnOutlinedIcon />

            <Box sx={{display: "flex", flexDirection: "column", columnGap: 20}}>
              <Typography sx={{fontSize: 8, }}>  
              154.160.9.122
              </Typography>

              <Typography sx={{fontSize: 8, }}>  
              Last Login IP
              </Typography>
            </Box>

          </Box>

          <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>

<AccessTimeIcon />

<Box sx={{display: "flex", flexDirection: "column"}}>
  <Typography sx={{fontSize: 8, }}>  
    15-Mar-2023 02 15 AM
  </Typography>

  <Typography sx={{fontSize: 8, }}>  
    Last Login Date 
  </Typography>
</Box>

</Box>

          </Box>

          </Box>

        </Toolbar>
      </AppBar>

      <Box sx={{ p: 2, }}>
        {/* {location.pathname === '/account-creation' && <AccountCreation />} */}
        {/* {location.pathname === '/account-officer' && <AccountOfficer />} */}

        {content}

      </Box>
    </Box>
  );
};
export default MainContent;