import { Box } from "@mui/system";
import { createContext, useState } from "react";
import MainAccount2 from "../MainAccount";
import FirstStep from "../step/FirstStep";

export const MultiStepContext = createContext({});


export const MultiStepProvider = ({children}) => {
    const [currentStep, setStep] = useState(1)
    const [userData, setUserData] = useState([])
    const [finalData, setFinalData] = useState([])


    console.log(currentStep)
    const nextCurrentStep = () => setStep(currentStep + 1)

    
    const FormValues = {currentStep,setStep, userData, setUserData, finalData, setFinalData, nextCurrentStep }

    return (
        <MultiStepContext.Provider value={FormValues}>

          {/* <MainAccount2 /> */}

          {children}

           

        </MultiStepContext.Provider>
    )

}

export default MultiStepContext