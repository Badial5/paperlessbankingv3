import React from 'react'

import BarChart from './const/graph/barChart'
import DashboardMain from './DashboardMain'

import { Box } from '@mui/material'



const DashboardPage = ({chartData}) => {
  return (
    <Box width="50%" height="50%">
      {/* <BarChart /> */}
      <DashboardMain />
    </Box>
  )
}

export default DashboardPage
