import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { setProfile } from '../../redux-toolkit/user/userSlice';
import { getAllAccountAction, getSingleAccountAction } from '../../redux-toolkit/account/accountSlice';


import { Link, useParams } from "react-router-dom";


import { GridLoader } from 'react-spinners';

import RightSideMenu from './const/RightSideMenu';
import MainContent from './const/MainComponent';
import LeftSideMenu from './const/LeftSideMenu';

import signupImg from "../../assets/images/signup2.jpg";
import { Box } from '@mui/material';
import api from '../../Interceptors/tokenAxios';

const DashboardContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  // background: "red",
  // height: { xs: "110vh", md: "100vh" }
  height: "auto"
});

const UserDashboard = () => {
  const dispatch = useDispatch();
  const userAuth = useSelector(state => state?.users?.userAuth);
  // const isLogin = userAuth?.token ? true : false;
  const isLogin = sessionStorage.getItem("token")
  
  const token = sessionStorage.getItem("token");

  console.log("isLogin: ", isLogin)

  // const getProfile = async () => {
  //   try {
  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };

  //     const { data } = await api.get(`/accounts/v1/users/`, config);
  //     dispatch(setProfile(data));
  //   } catch (error) {
  //     console.log("Getting the User Profile: ", error);
  //   }
  // }

  // const getProfile = async () => {
  //   try {
  //     console.log("Calling getProfile");
  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };
  
  //     const { data } = await api.get(`/accounts/v1/users/`, config);
  //     console.log("Received user data: ", data);
  //     dispatch(setProfile(data));
  //   } catch (error) {
  //     console.log("Getting the User Profile: ", error);
  //   }
  // }


  const getProfile = async () => {
    try {
      console.log("Calling getProfile");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const response = await api.get(`/accounts/v1/users/`, config);
      if (response.status === 200) {
        const data = response.data;
        console.log("Received user data: ", data);
        dispatch(setProfile(data));
        console.log(data)
      } else {
        console.log("API request failed with status code: ", response.status);
      }
    } catch (error) {
      console.log("Error while getting the User Profile: ", error);
    }
  };

  //get ID
  // const { id } = useParams();

  // const getUserAccounts = async (id) => {
  //   try {
  //     console.log("Calling getUserAccount");
   
  
  //    dispatch(getSingleAccountAction())
  //   } catch (error) {
  //     console.log("Error while getting the User Profile: ", error);
  //   }
  // };
  
  
  

  useEffect(() => {
    console.log("Entering useEffect");
    console.log("isLogin: ", isLogin);
    console.log("useEffect for getProfile is running");
    if (isLogin) {
      console.log("Running getProfile");
      getProfile();
      // dispatch(getSingleAccountAction())
      // getUserAccounts()
      dispatch(getAllAccountAction())
    }
  }, [isLogin]); // Empty dependency array to run the effect only once on mount


  //get data from store
  const { accounts, error, loading } = useSelector((state) => state?.accounts);
  
  //destructuring data from the accounts
  // const {id, } = accounts
  console.log("USER BANK ACCOUNTS: ", accounts)







  const [loadingInProgress, setLoadingInProgress] = useState(false);

  useEffect(() => {
    setLoadingInProgress(true);
    const timer = setTimeout(() => {
      setLoadingInProgress(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  //accessing Profile data from the store
  const userProfile = useSelector(state => state?.users.profile)

  console.log("User Profile: ", userProfile)

  const [selectedOption, setSelectedOption] = useState(sessionStorage.getItem('selectedOption') || 'default');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };


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
          color="#4991ff"
          size={25}
        />
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
            <LeftSideMenu userProfile={userProfile} onOptionSelect={handleOptionSelect} style={{ width: "30vw" }} />
            <MainContent userProfile={userProfile} userAccounts={accounts} selectedOption={selectedOption} title="Main Content"  style={{ width: "100%" }} />
            <RightSideMenu userProfile={userProfile} onOptionSelect={handleOptionSelect} style={{ width: "30vw" }} />
          </DashboardContainer>
        </Box>
      )}
    </>
  );
};

export default UserDashboard;
