import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { GlobalButton } from '../../../assets/GlobalStyled/Globalstyles';

const NoBankAccountCard = () => {
  return (

    <Card sx={{ maxWidth: 300, borderRadius: 20, p: 2}}>
      <CardContent sx={{display: "flex" , justifyContent: "center", alignItems: "center", flexDirection: "column", }}>
        <AccountBalanceIcon sx={{ fontSize: 48, mb: 2, color: "#6DA7FF" }} />
        <Typography variant="h5" sx={{fontFamily: "Poppins"}}>No Bank Account Found</Typography>
        <Typography variant="body1" sx={{ mt: 2, fontFamily: "Poppins" }}>
          You currently do not have a bank account. Create one now to start managing your finances!
        </Typography>
        <GlobalButton variant="contained"  sx={{ mt: 3 }}>
          Create Account
        </GlobalButton>
      </CardContent>
    </Card>
  );
};

export default NoBankAccountCard;