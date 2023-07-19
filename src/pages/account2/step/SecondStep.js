import React from 'react'

import { Box } from '@mui/material';
import { GlobalButton, GlobalTextField } from '../../../assets/GlobalStyled/Globalstyles';



const SecondStep = () => {
  return (
    <Box>

    <GlobalTextField label="Email" variant='outlined'/>
    <GlobalTextField label="Country" variant='outlined'/>
    <GlobalTextField label="District" variant='outlined'/>

    <GlobalButton type='Button'>Next</GlobalButton>


   </Box>
  )
}

export default SecondStep
