// SignUpSignUpSignUpFormContext.js
import React, { createContext, useContext, useState } from 'react';

const SignUpFormContext = createContext();

export function useSignUpFormContext() {
  return useContext(SignUpFormContext);
}

export function SignUpFormProvider({ children }) {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);

  const handleNextStep = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <SignUpFormContext.Provider value={{ formData, step, handleNextStep, handlePrevStep }}>
      {children}
    </SignUpFormContext.Provider>
  );
}
