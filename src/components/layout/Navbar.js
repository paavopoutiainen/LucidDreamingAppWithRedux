import React from 'react';
import { Link } from "react-router-dom"
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"
import Appbar from '@material-ui/core/Appbar'
import { Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Navbar = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Appbar position="static">
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Lucid Dreaming App
                </Typography>
                <div>
                    <SignedInLinks className={classes.root}></SignedInLinks>
                </div>
                <div>
                    <SignedOutLinks></SignedOutLinks>
                </div>
                
                </Toolbar>   
                    
            </Appbar>
     </div>
    );
};

export default Navbar;