import React, { createContext, useEffect, useState } from 'react';

export const newcontext = createContext();
const Authencontext = ({children}) => {
  const[authen,setauthen]=useState(false);
  const[token,settoken]=useState(localStorage.getItem('authentication') || null)

  useEffect(()=>{
    if(token){
      setauthen(true)
    }
  },[token]);

  const Logout =(newtoken)=>{
    settoken(null);
    setauthen(false);
    localStorage.removeItem('authenticatontoken')

}
  return (
    <newcontext.Provider value={{authen,Logout}}>
      {children}
    </newcontext.Provider>
  );
}

export default Authencontext;
