import React from 'react';
import { Card, Typography, styled } from '@mui/material';

const CardContainer = styled(Card)(({ theme }) => ({
  padding: "3px 3px",
  border: "1px solid ridge",
  width: "auto",
  cursor: "pointer",
  borderRadius: 10,
  height: "auto",
  transition: 'background-color 0.3s, box-shadow 0.3s',
  '&:hover': {
    backgroundColor: "blue",
    boxShadow: `0px 10px 15px -3px rgba(73, 145, 255, 0.2), 0px 4px 6px -2px rgba(73, 145, 255, 0.05)`,
  },
}));

const MenuCard = ({ name }) => {
  return (
    <CardContainer elevation={2}>
      <div>
        <Typography variant="h6">{name}</Typography>
      </div>
    </CardContainer>
  );
};

export default MenuCard;
