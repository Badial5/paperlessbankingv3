import React from 'react'
import BarChart from './const/graph/barChart'
import { Box } from '@mui/material'

const DashboardPage = ({chartData}) => {
  return (
    <Box width="50%" height="50%">
      <BarChart />
    </Box>
  )
}

export default DashboardPage
