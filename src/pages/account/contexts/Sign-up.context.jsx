import { createContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";

//MUI COMPONENTS
import { Box, Paper, Button, TextField  } from "@mui/material";



export const SignUpContext = createContext()


export const SignUpProvider = ({children}) => {

    // const title = {
    //     0: 'Billing Info',
    //     1: "Upload Image",
    //     2: "Confirm Image"
    // }

    const [page, setPage] = useState(0)
    const [step, setStep] = useState(1);

    const [signUpFormData, setSignUpFormData] = useState({
      first_name: "",
      last_name: "",
      title: "",
      phone_number: "",
      id_type: "",
      id_number: "",
      account_type: "",
      email: "",
      upload: "",
      confirm: ""
  })
  

    // const { handleSubmit, register, watch, setValue, formState: {errors, isValid}, reset, trigger } = useForm({
    //     mode: "onTouched",
    //     defaultValues: {
    //       first_name: "",
    //       last_name: "",
    //       title: "",
    //       phone_number: "",
    //       id_type: "",
    //       id_number: "",
    //       account_type: "",
    //       email: "",
    //       upload: "",
    //       confirm: ""
    
    //     }
    //   })


    const { handleSubmit, register, watch, setValue, formState: {errors, isValid}, reset, trigger } = useForm({
      mode: "onTouched",
      defaultValues: signUpFormData
    })

   
    const updateFormData = (data) => {
        setSignUpFormData((prevData) => ({
          ...prevData,
          ...data,
        }));
      };


      const onNext = () => {
        setStep((prevStep) => prevStep + 1);
      };
    
      const onBack = () => {
        setStep((prevStep) => prevStep - 1);
      };


    return (
        <SignUpContext.Provider value={{handleSubmit, register, watch, setValue, errors, isValid, reset, trigger, setSignUpFormData, signUpFormData, page, setPage, updateFormData, Box, Paper, Button, TextField, onNext, onBack }}>
            {children}
        </SignUpContext.Provider>
    )
}