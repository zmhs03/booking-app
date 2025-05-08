import React, {createContext, useState} from 'react'

export const AuthContext=createContext();

function AuthProvider({children}) {
  const[isAuthenticated, setIsAuthenticated]=useState(false);
  const [users, SetUsers]=useState([
{
  name: 'admin',
  surname: 'user',
  phone: '0000000000',
  email: 'admin@example.com',
  password:'password'

}
    
  ])

  function Login(email, password){

    const user=users.find((u)=>u.email=== email && u.password === password);

    if(user){
        setIsAuthenticated(true);
        return true;
    }
    else{
        return false;
    }

  }
function SignUp(name, surname,phone, email, password){
  const existingUser=users.find((u)=> u.email===email);

  if(!existingUser){
    const newUser={name, surname, phone, email, password};
    SetUsers([...users,newUser]);
    setIsAuthenticated(true);
    return true;
  } else {
    return false;
  }
}

  function logout(){
    setIsAuthenticated(false);

  }
  return(
    <AuthContext.Provider value={{Login, SignUp, logout, isAuthenticated}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider