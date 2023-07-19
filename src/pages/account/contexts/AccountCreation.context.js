import React, { createContext, useState, useContext } from 'react';

export const FormContext = createContext({});

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
 
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    title: '',
    phone_number: '',
    id_type: '',
    id_number: '',
    account_type: '',
    email: '',
    upload: '',
  });

 

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const formContextValue = {
    
    formData,
    
    handleChange,
    
  };

  return (
    <FormContext.Provider value={[formContextValue]}>
      {children}
    </FormContext.Provider>
  );
};
