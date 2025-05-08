import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';


function SignUp({visible, onClose}) {
    const [email, setEmail]= useState("");
    const [name, setName]=useState("");
    const [surname, setSurname]=useState("");
    const [phone, setPhone]=useState("");
        const[password, setPassword]=useState("");
        const [confirmation, setConfirmation]=useState("")
        const[error,setError]=useState("");
        const navigate=useNavigate();
        const {SignUp}=useContext(AuthContext);

        

if (!visible) return null;

function handleSignUp(){
    if (SignUp(name, surname, phone, email, password)) {
        setError("All fields are required.");
        return;
      }
      if (password !== confirmation) {
        setError("Passwords do not match.");
        return;
      }

      console.log({ name, surname, phone, email, password });
      onClose();
      navigate("/");
}

  return (
    <div className='modal-background' onClick={onClose}>
        <div className='modal-content' onClick={(e)=> e.stopPropagation()}>
    <h2>Sign Up</h2>
    <input type="text" placeholder="Enter Name" onChange={(e)=> setName(e.target.value)} value={name}/>
    <input type="text" placeholder="Enter Surname" onChange={(e)=> setSurname(e.target.value)} value={surname}/>
    <input type="email" placeholder="Enter Email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
    <input type="tel" placeholder= "Enter Phone Number" onChange={(e)=>setPhone(e.target.value)} value={phone}/>
    <input type="password" placeholder="Enter Password" onChange={(e)=> setPassword(e.target.value)} value={password}/>
    <input type="password" placeholder="Confirm Password" onChange={(e)=> setConfirmation(e.target.value)} value={confirmation}/>


    <button onClick={handleSignUp}>Sign Up</button>
    {error && <p>{error}</p>}

    </div>
    </div>
  )
}

export default SignUp