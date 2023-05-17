import { useContext } from "react";
import { SignUpContext } from "../contexts/Sign-up.context";


const useSignUpFormContext = () => {

    return useContext(SignUpContext)
}

export default useSignUpFormContext