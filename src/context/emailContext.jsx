import { createContext, useState } from "react";



//actual value I want to access
export const EmailContext = createContext({
    currentEmail: null,
    setCurrentEmail: () => null

})


//context provider for the email context 
export const EmailProvider = ({children}) => {

    const [currentEmail, setCurrentEmail] = useState(null)
    const value = {currentEmail, setCurrentEmail}

    return <EmailContext.Provider value={value}>{children}</EmailContext.Provider>

}


