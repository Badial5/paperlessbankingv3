import React from 'react';
import { Card, CardContent, Typography, Button, Grid, Box, Stack } from '@mui/material';
import { AddCircleOutline as AddCircleOutlineIcon } from '@mui/icons-material'; // Material-UI icon for illustration

const NoBankAccountCard2 = ({ onCreateAccountClick }) => {
  return (
    <Card>
      <CardContent>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
            <Box display="flex" justifyContent="center">
              <AddCircleOutlineIcon fontSize="large" color="primary" />
              {/* You can replace the icon with your own image */}
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="h6" align="center" gutterBottom>
              You don't have any bank account.
            </Typography>
            <Typography variant="body2" align="center">
              Click the button below to create an account.
            </Typography>
          </Grid>
          <Grid item>
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                color="primary"
                onClick={onCreateAccountClick}
              >
                Create Account
              </Button>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default NoBankAccountCard2;
