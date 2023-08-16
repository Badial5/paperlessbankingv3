import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';


import {  BarLoader, ClipLoader, CircleLoader, ClimbingBoxLoader, ClockLoader, DotLoader, FadeLoader, GridLoader, HashLoader, MoonLoader, PacmanLoader, PropagateLoader, PuffLoader, PulseLoader, RingLoader, RiseLoader, RotateLoader, ScaleLoader, SkewLoader, SquareLoader, SyncLoader } from 'react-spinners';








import RightSideMenu from './const/RightSideMenu';
import MainContent from './const/MainComponent';
import LeftSideMenu from './const/LeftSideMenu';


// import signupImg from "../../../assets/images/signup2.jpg"

import signupImg from "../../assets/images/signup2.jpg"
import { Box } from '@mui/material';
import axios from 'axios';

//pages
{/* <Route path='account-creation' element={<AccountCreation />} />
<Route path='account-officer' element={<AccountOfficer />}  /> */}

const DashboardContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  height: {xs: "110vh", md: "100vh"}
  // minHeight: {xs: "150vh", md: "110vh"},
});

const UserDashboard = () => {
  // const [selectedOption, setSelectedOption] = useState('default');

  const [userData, setUserData ] = useState({
    first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
 
  })

  const [name, setName] = useState("")
  let userId = 0


  // useEffect(() => {
  //   (
  //     async () => {
  //       const response = await axios.get("https://api.inlakssolutions.com/accounts/v1/users/")

  //       setName(response.data.first_name)
        
  //     }
  //   )();
  // }, [])









  // REACT SPINNER ANIMATION ===========================+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://api.inlakssolutions.com/accounts/v1/${userId}/`);
        setName(response.data.first_name);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);









  const [loadingInProgress, setLoadingInProgress] = useState(false);



// ===============================+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

useEffect(() => {
  setLoadingInProgress(true)
  const timer = setTimeout(() => {
    setLoadingInProgress(false);
  }, 3000);

  return () => clearTimeout(timer);
}, []);




  const [selectedOption, setSelectedOption] = useState(sessionStorage.getItem('selectedOption') || 'default');



  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  console.log("Selected Option: ", selectedOption)


  //REACT SPINNER+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const Spinner = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundImage: `url(${signupImg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover', 
          objectFit: "cover",
        }}
      >
        <GridLoader 
        // color="#00BFFF" 
        color= "#4991ff"
        size={25} />
      </Box>
    );
  };



  return (

    <>
    {loadingInProgress ? (
        <Spinner />
      ) : (
    <Box>
    <DashboardContainer>
      <LeftSideMenu 
      // userName={name}
       onOptionSelect={handleOptionSelect} style={{width: "30vw"}}/>

      <MainContent selectedOption={selectedOption} title="Main Content" style={{width: "100%"}}/>
      
      <RightSideMenu onOptionSelect={handleOptionSelect} style={{width: "30vw"}} />
    </DashboardContainer>


    </Box>

)}

    </>
  );
};

export default UserDashboard;
