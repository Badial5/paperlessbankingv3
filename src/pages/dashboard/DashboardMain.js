import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { Container, Card, CardContent, Typography, Button, Grid, Paper,  CardActions } from '@mui/material';

const DashboardMainPage = ({balance, onCoverBalance}) => {

  const [accountBalance, setAccountBalance] = useState(1000);

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    // Handle covering balance
  };

  return (
    <Container maxWidth="lg">
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Welcome to Your Banking Dashboard
          </Typography>
          
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Debit card section */}
            <Card variant="outlined">
            <CardContent>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Typography variant="h6" gutterBottom>
            Debit Card
          </Typography>
          {/* Debit card design (replace with actual design) */}
          <img src="debit-card-image-url" alt="Debit Card" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        
        <div>
          <Typography variant="h6" gutterBottom>
            Balance
          </Typography>
          <Typography variant="h4">
            ${accountBalance.toFixed(2)}
          </Typography>
        </div>
      </div>
      
      <CardActions>
        <Button variant="contained" color="primary" onClick={onCoverBalance}>
          Cover Balance
        </Button>
      </CardActions>
    </CardContent>
            </Card>

            {/* Charts section */}
            <Card variant="outlined" style={{ marginTop: '1rem' }}>
              <CardContent>
                {/* Display necessary charts */}
              </CardContent>
            </Card>

            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
              Cover Balance
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Carousels */}
      <Grid container spacing={2} style={{ marginTop: '1rem' }}>
        <Grid item xs={6}>
          {/* Carousel 1 */}
        </Grid>
        <Grid item xs={6}>
          {/* Carousel 2 */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardMainPage
