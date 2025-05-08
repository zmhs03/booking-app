import React, { useContext, useState } from 'react'
import {Link} from "react-router";
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router';
import Logo from "../Assets/Logo.png";
import Login from './Login';
import SignUp from './SignUp';
import '../index.css';

function Navbar() {
    const {logout, isAuthenticated}= useContext(AuthContext);
    const navigate = useNavigate();

    const[showLogin, setShowLogin]=useState(false);
    const[showSignUp, setShowSignUp]=useState(false);

    

    function handleLogout(){
        logout();
        navigate("/Login");
    }


  return (
    <>
    <div className='navbar'>
        <Link to ={"/"}>
        <img 
        src={Logo} alt='Logo'/>
        </Link>


        {isAuthenticated ? (<button onClick={handleLogout}>Log Out</button>):
        
        (<>
        <button onClick={()=> setShowLogin(true)}>Login</button>
        <button onClick={()=> setShowSignUp(true)}>Sign Up</button>
        </>
        )}
    
        
    </div>
    <Login visible={showLogin} onClose={()=>setShowLogin(false)}/>
    <SignUp visible={showSignUp} onClose={()=>setShowSignUp(false)}/>

    </>
  )
}

export default Navbar