import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const AuthRoute = ({children}) => {

  const token = sessionStorage.getItem("token")
  console.log(token)


    const dispatch = useDispatch();
  // const userAuth = useSelector(state => state?.users?.userAuth);

  // const isLogin = userAuth?.token ? true : false;
  const isLogin = token ? true : false
//   const token = sessionStorage.getItem("token");
    console.log(isLogin)
    // const {token } = userAuth
    // console.log(token)

  //   if(!userAuth.token) {
  //     window.location.href = "/login";
  //     return null
  // } 

  if(!isLogin) {
    window.location.href = "/login";
    return null
} 

    // if(userAuth.token) {
    //    window.location.href = "/user-dashboard";
    //    return 
    // } else {
    //   window.location.href = "/login";
    //   return null
    // }

  return (
    <div>
      {children}
    </div>
  )
}

export default AuthRoute
