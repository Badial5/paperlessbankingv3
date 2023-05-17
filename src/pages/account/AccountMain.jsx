import React, {useState} from 'react'

import { Box, Paper } from '@mui/material'

// import Upload from './step/Upload'
// import ConfirmStep from './step/Confirm'

import UploadStep from './step/UploadStep'
import ConfirmStep2 from './step/ConfirmStep'
import AccountCreationJs from './step/account-creation'

import { SignUpProvider } from './contexts/Sign-up.context'
// import AccountCreation from './account-creation'
// import AccountCreation from './account-creation'

// import AccountCreationJs from './account-creation'







const AccountMain = () => {

    
        const [step, setStep] = useState(1);
      
        const handleNext = () => {
          setStep((prevStep) => prevStep + 1);
        };

        const handleBack = () => {
        setStep((prevStep) => prevStep - 1);
        };

  return (
//     <Box
//     style={{
//       backgroundColor: "#fff",
//       height: "100vh",
//       borderRadius: 20,
//       marginTop: 0,
//       paddingLeft: 30,
//       paddingRight: 30,
//       // display: "flex",
//       // justifyContent: "center"
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center"

//     }}
//   >

    // <Paper  elevation={12}
    // sx={{width: "40rem", display: "flex", padding: "10px 30px", borderRadius: 10 }}>





        <SignUpProvider>
        {step === 1 && <AccountCreationJs onNext={handleNext} />}
        {step === 2 && <UploadStep onNext={handleNext} onBack={handleBack} />}
        {step === 3 && <ConfirmStep2 onBack={handleBack} />}
        </SignUpProvider>





   // {/* </Paper>

  //  </Box> */}
  )
}

export default AccountMain
