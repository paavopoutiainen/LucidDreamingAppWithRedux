import React, {useState} from 'react';
import '../../App.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),

    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
    
    button:{
      margin: 10
    }
  }));

const SignIn = () => {

    const [credentials, setCredentials] = useState({email: "", password:""})
    const classes = useStyles();
    
    function handleSubmit (e) {
        e.preventDefault()
        console.log(e)
    }

   function handleChange (e){
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
      
      <div className = "sign-in-page">
            <div className= "container">
            <form onSubmit = {(e) => handleSubmit(e)} >
                <h5 className="black-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"  value={credentials.email} onChange={handleChange}></input>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"  value={credentials.password} onChange={handleChange}></input>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign In</button>
                </div>    
              
            </form>
            
            </div>
        </div>
     
        
        
    );
};

export default SignIn