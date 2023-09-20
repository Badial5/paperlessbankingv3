import { Box, Card, Paper, Typography } from '@mui/material';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BalanceOverviewChart = () => {
  const chartData = {
    series: [3000, 5000, 7000], // Sample balances for Savings, Checking, Investments
    options: {
      chart: {
        type: 'donut',
      },
      labels: ['Savings', 'Checking', 'Investments'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
            height: 280,
          },
          legend: {
            position: 'bottom',
          },
        },
      }],
    },
  };

  return (
    <Box>
        <Card elevation={20}>
      <Typography variant='h2' sx={{mt: 2, ml: 4}}>Balance Overview</Typography>
      <ReactApexChart options={chartData.options} series={chartData.series} type="donut" height={220} />
      </Card>
    </Box>
  );
};

export default BalanceOverviewChart;
