import React, {useState} from 'react';
import '../../App.css';

const SignUp = () => {

    const [credentials, setCredentials] = useState({email: "", password:"", firstName:"", lastName:""})
    
    function handleSubmit (e) {
        console.log(e)
    }

   function handleChange (e){
        console.log(e)
        setCredentials({...credentials, [e.target.id]: e.target.value})
    }

    return (
        <div className = "sign-up-page">
            <div className= "container">
            <form onSubmit = {handleSubmit} >
                <h5 className="black-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"  value={credentials.email} onChange={handleChange}></input>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"  value={credentials.password} onChange={handleChange}></input>
                </div>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" value={credentials.firstName} onChange={handleChange}></input>
                </div>
                <div className="input-field">
                    <label htmlFor="firstName">Last Name</label>
                    <input type="text" id="lastName" value={credentials.lastName} onChange={handleChange}></input>
                </div>
                
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                </div>
            </form>
            
            </div>
        </div>
        
    );
};

export default SignUp