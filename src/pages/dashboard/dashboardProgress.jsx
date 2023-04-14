import React from 'react'


import "./style.css"
import { Box } from '@mui/material'



const DashboardProgress = () => {
  return (
    <Box style={{
        display: "flex",
        justifyContent: "center",
        // alignContent: "center"
        alignItems: "center",
        marginTop: "15%",
    }}>
        <div>
      <div class="radial-progress-bar">
    {/* <!-- Show number of percentages --> */}
    <div class="radial-progress-bar__percentages">5%</div>

    {/* <!-- The curve -->  */}
    <div class="radial-progress-bar__curve">
        {/* <!-- The first half -->  */}
        <div class="radial-progress-bar__half radial-progress-bar__half--first"></div>

        {/* <!-- The second half -->  */}
        <div class="radial-progress-bar__half radial-progress-bar__half--second"></div>
    </div>
</div>
    </div>
    </Box>
  )
}

export default DashboardProgress
