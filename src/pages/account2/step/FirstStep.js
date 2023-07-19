import React, {useContext} from 'react'
import { ErrorHelperTextContainer, GridItem, NameLabel, PageHeader2, PageHeaderAndTitleContainer2, SubTitle2, ButtonComponent, ButtonText,
} from "../styles/account-creation";
import { Box } from '@mui/material';
import { GlobalButton, GlobalTextField } from '../../../assets/GlobalStyled/Globalstyles';

//COntext
import { MultiStepContext } from '../context/StepContext';



// const titles = ["Mr", "Mrs", "Miss", ];

const titles = [
    {value: "", label: "----------Select--------------"},
    { value: "mr", label: "Mr" },
    { value: "mrs", label: "Mrs" },
    { value: "miss", label: "Miss" },
    // { value: "gh_link", label: "Gh Link" },
  
  ]
  
  
  
  // const idTypes = ["Passport", "Ghana Card", "Voter's Card", "DVLA" ];
  
  
  const idTypes = [
    {value: "", label: "----------Select--------------"},
    { value: "passport", label: "Passport" },
    { value: "ghanacard", label: "Ghana Card" },
    { value: "votercard", label: "Voter's Card" },
    { value: "dvla", label: "DVLA" },
  
  ]
  
  
  const accountTypes = [
    {value: "", label: "----------Select--------------"},
    { value: "saving", label: "Saving" },
    { value: "current", label: "Current" },
    { value: "business", label: "Business" },
    // { value: "dvla", label: "DVLA" },
  
  ]
  
  


const FirstStep = () => {

    const {setStep, userData, setUserData, nextCurrentStep, currentStep} = useContext(MultiStepContext)


    console.log("Current Step from First Step: ", currentStep)


  return (
   <Box>

    <GlobalTextField label="First Name" variant='outlined'/>
    <GlobalTextField label="Last Name" variant='outlined'/>
    <GlobalTextField label="Third Name" variant='outlined'/>

    <GlobalButton type='Button' onClick={()=>setStep(2)}>Next</GlobalButton>


   </Box>
  )
}

export default FirstStep
