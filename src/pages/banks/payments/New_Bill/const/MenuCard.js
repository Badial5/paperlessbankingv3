import React from 'react';
import { Paper, Typography, styled, Box } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const CardContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  width: "auto",
  borderRadius: 10,
  height: "auto",
  transition: 'background-color 0.3s',
//   '&:hover': {
//     backgroundColor: '#4991ff',
//     boxShadow: theme.shadows[6], // Adjust the elevation level as needed
//   },

'&:hover': {
    boxShadow: `0px 10px 15px -3px rgba(73, 145, 255, 0.2), 0px 4px 6px -2px rgba(73, 145, 255, 0.05)`, // Adjust the shadow color as needed
  },
  
}));

// const IconContainer = styled('div')(({ theme }) => ({
// //   marginRight: theme.spacing(2),
//   fontSize: 48,
// }));

const MenuCard = ({  name }) => {
  return (
    <CardContainer elevation={2}>
      {/* <IconContainer>
        <AccountCircle />
        {icon}
      </IconContainer> */}
      <div>
        <Typography variant="h6">{name}</Typography>
      </div>
    </CardContainer>
  );
};

export default MenuCard;
