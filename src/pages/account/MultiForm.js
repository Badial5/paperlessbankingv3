
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";

  import { AppProvider } from "./contexts/AccountContext";

import AccountCreationJs from "./step/account-creation";
import Upload from "./step/Upload";
import ConfirmStep2 from "./step/ConfirmStep";


const MultiForm = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={< AccountCreationJs/>}>
            <Route path="account-upload" element={<Upload />} />
            <Route path="account-confirma" element={<ConfirmStep2/>} />
            
          </Route>
        )
      );


  return (
    <AppProvider>
        <Box sx={{ width: '100%' }}>

<Stepper   Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>

<Box
    style={{
      backgroundColor: "#fff",
      height: "100vh",
      borderRadius: 20,
      marginTop: 0,
      paddingLeft: 30,
      paddingRight: 30,
      // display: "flex",
      // justifyContent: "center"
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"

    }}
  >





    <Paper  elevation={12}
    sx={{width: "40rem", display: "flex", padding: "10px 30px", borderRadius: 10 }}>


    <RouterProvider router={router} />

    </Paper>

    </Box>

    </Box>


    </AppProvider>


  )
}

export default MultiForm
