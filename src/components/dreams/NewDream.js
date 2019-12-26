import React, {useState, useEffect} from 'react';
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
import { changeContent, deleteNewDreamComponent } from "../../reducers/newDreamFormsReducer"
 

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
  
    useEffect(() => {
      if(props.content){
        setDream(props.content)
      }
    }, [])


    // myös eka renderöinti aiheuttaa tämän hookin kutsun, eli ilmeisesti koska state luodaan
    useEffect(() => {
      console.log("here")
      
      props.changeContent({
        index: props.index,
        content: dream
      })
    }, [dream])

   
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
        if(!response){
          throw new Error("Dream not saved")
        }
        props.newNotificationActionCreator("Dream was saved")
        props.deleteNewDreamComponent(props.index)

      }catch(exception){
        console.error(exception)
        props.newNotificationActionCreator("Wasn't able to save the dream")
      }
    }

   const handleClose = () => {
    props.deleteNewDreamComponent(props.index)
   }


    return (
      <Grid item sm={4} xs={12} >
        <Paper className={classes.paper}  >
       
        <IconButton edge="end" color="inherit" aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
           <h5 style={{margin: 8}}>Dream {props.index}</h5>
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

const mapStateToProps = (state, ownProps) => {
  return {
    content: state.newDreamForms.find(x => x.index === ownProps.index).content
  }
}

export default connect(mapStateToProps, { 
  addDream, 
  newNotificationActionCreator, 
  deleteNewDreamComponent, 
  changeContent 
})(NewDream);