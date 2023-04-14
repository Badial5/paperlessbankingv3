import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

import RightSideMenu from './const/RightSideMenu';
import MainContent from './const/MainComponent';
import LeftSideMenu from './const/LeftSideMenu';

//pages
{/* <Route path='account-creation' element={<AccountCreation />} />
<Route path='account-officer' element={<AccountOfficer />}  /> */}

const DashboardContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  height: '100vh',
});

const UserDashboard = () => {
  // const [selectedOption, setSelectedOption] = useState('default');

  const [selectedOption, setSelectedOption] = useState(sessionStorage.getItem('selectedOption') || 'default');

  // const handleOptionSelect = (option) => {
  //   setSelectedOption(option);
  // }

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  console.log("Selected Option: ", selectedOption)

  return (
    <DashboardContainer>
      <LeftSideMenu onOptionSelect={handleOptionSelect} />
      <MainContent selectedOption={selectedOption} title="Main Content" />
      <RightSideMenu onOptionSelect={handleOptionSelect}  />
    </DashboardContainer>
  );
};

export default UserDashboard;
