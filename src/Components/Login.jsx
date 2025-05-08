    import React, {useContext,useState} from 'react';
    import { AuthContext } from '../Context/AuthContext';
    import { useNavigate } from 'react-router';

    function Login({visible, onClose}) {
        const [email, setEmail]= useState("");
        const[password, setPassword]=useState("");
        const[error,setError]=useState("");
        const {Login}=useContext(AuthContext);
        const navigate=useNavigate();

        if(!visible) return null;


    function handleLogin(){
        if (Login(email, password))
        {
            onClose();
            navigate("/");
        }else{
            setError("Invalid Credentials. Please Try again.");
        }
        }

    return (
    <div className='modal-background' onClick={onClose}>
        <div className='modal-content' onClick={(e)=> e.stopPropagation()}>
    <h1>Sign In</h1>
    <input type="email" placeholder="Enter Email" onChange={(e)=> setEmail(e.target.value)} value={email}/>

    <input type="password" placeholder="Enter Password" onChange={(e)=> setPassword(e.target.value)} value={password}/>

    <button onClick={handleLogin}>Sign In</button>
    {error && <p>{error}</p>}

    </div>
    </div>
    );
    }

    export default Login;