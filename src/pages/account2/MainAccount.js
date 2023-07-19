
import { Stepper, StepLabel, Step, Box, Paper } from '@mui/material'

import { GlobalPaperStyle } from '../../assets/GlobalStyled/Globalstyles'

import FirstStep from './step/FirstStep'
import SecondStep from './step/SecondStep'
import ThirdStep from './step/ThirdStep'

//CONTEXT
import  MultiStepContext, { MultiStepProvider }  from './context/StepContext'
import { useContext } from 'react'



const MainAccount2 = () => {

  const { currentStep, finalData, handleCurrentStep } = useContext(MultiStepContext)
 


  const showStep = (step) => {
    switch(step) {
      case 1: 
      return <FirstStep />
      break;
     

      case 2: 
      return <SecondStep />
      break;
     

      case 3: 
      return <ThirdStep />
      break;
     
    }
  }


  console.log("Current Step From Main Account: ", currentStep)


  return (
    <MultiStepProvider>
  

<Box
        style={{
          backgroundColor: '#fff',
          height: '100vh',
          borderRadius: 20,
          marginTop: 0,
          paddingLeft: 30,
          paddingRight: 30,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >

        <Paper elevation={12} sx={{ width: '40rem', display: 'flex', flexDirection: "column", padding: '10px 30px', borderRadius: 10 }}
        >

        {/* <GlobalPaperStyle> */}


      <Stepper sx={{width: "100%"}} activeStep= {currentStep - 1} orientation='horizontal'>
        <Step>
          <StepLabel></StepLabel>
        </Step>

        <Step>
          <StepLabel></StepLabel>
        </Step>

        <Step>
          <StepLabel></StepLabel>
        </Step>

      </Stepper>


      {showStep(currentStep)}

      {/* </GlobalPaperStyle> */}

      </Paper>
      </Box>

      

    </MultiStepProvider>
  )
}

export default MainAccount2
