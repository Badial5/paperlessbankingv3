import React from 'react';
import { Card, CardContent, Typography, Button, Box, Container } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // You can replace this with an appropriate icon

const NoAccountCard = ({ onCreateAccountClick }) => {
  return (
    <Container maxWidth="sm">
      <Card variant="outlined" sx={{ marginTop: '2rem' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AccountCircleIcon sx={{ fontSize: '4rem', color: 'gray' }} />
          </Box>
          <Typography variant="h5" component="div" sx={{ textAlign: 'center', marginTop: '1rem' }}>
            You don't have any bank accounts yet.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', marginTop: '1rem' }}>
            Click the button below to create an account.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <Button variant="contained" color="primary" onClick={onCreateAccountClick}>
              Create Account
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default NoAccountCard;
