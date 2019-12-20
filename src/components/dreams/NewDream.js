import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from "react-redux"
import { addDream } from "../../reducers/dreamsReducer"
import { newNotificationActionCreator } from "../../reducers/notificationReducer"



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
    paper:{
      paddingRight: 8,
      backgroundColor: "white"
      
    },
    button:{
      margin: 10
    }
  }));

const NewDream = (props) => {
    const classes = useStyles();
    const [dream, setDream] = useState({name: "", content:""})
    const [thisHidden, setHidden] = useState(false)
    const style = thisHidden ? {display:"none"} :{}
   

    function handleChange(e){
      setDream({...dream, [e.target.name] : e.target.value})
    }

    const handleSaveClick = async() => {
      const newDream = {
        name: dream.name,
        content: dream.content,
        lucid: true
      }
      try{
        const response = await props.addDream(newDream)
        if(!response) {
          // eslint-disable-next-line no-undef
          throw new Exception()
        }
        props.newNotificationActionCreator("Dream was saved")
        setHidden(true)
        setDream({name:"", content:""})
      }catch(exception){
        console.error("ggggg",exception)
        props.newNotificationActionCreator("Wasn't able to save the dream")
      }
      
   }

   const handleClose = () => {
    setHidden(true)
   }

    return (
      <Grid item sm={4} xs={12} style={style}>
        <Paper className={classes.paper}  >
       
        <IconButton edge="end" color="inherit" aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
           <h5 style={{margin: 8}}>Dream {props.number}</h5>
            <form className={classes.paper}>
                <TextField
                    id="filled-textarea"
                    label="Name Of The Dream"
                    placeholder="Placeholder"
                    multiline
                    name = "name"
                    value={dream.name}
                    onChange={(e) => handleChange(e)}
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                />
                <TextField
                    id="filled-textarea"
                    label="Write Down The Dream"
                    placeholder="Placeholder"
                    multiline
                    fullWidth
                    name = "content"
                    value={dream.content}
                    onChange={(e) => handleChange(e)}
                    style={{height: "100%"}}
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                />
                <Button variant="contained"className={classes.button} onClick={handleSaveClick}>
                  Save
                </Button>
          </form>
        </Paper>
        
        </Grid>
        
    );
};

export default connect(null, { addDream, newNotificationActionCreator })(NewDream);