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
import { changeContentActionCreator } from "../../reducers/newDreamContentReducer"
import store from "../../store"
 

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

    var reduxStateOfThisInstance = props.contents.find(x => x.index === props.index)
  
    useEffect(() => {
      console.log(props.index)
      

      if(reduxStateOfThisInstance){
        console.log("here2")
        setDream(reduxStateOfThisInstance.content)
        setHidden(reduxStateOfThisInstance.hidden)
      }
    }, [])


    // myös eka renderöinti aiheuttaa tämän hookin kutsun, eli ilmeisesti koska state luodaan
    useEffect(() => {
      console.log("here")
      store.dispatch(changeContentActionCreator({
        index: props.index,
        content: dream,
        hidden: thisHidden
      }))
    }, [dream])

    /* okei eli nyt me varmaan halutaan siirtää toi newDreamin state kokonaan redux 
    storeen koska meillä pitää näköjään kuitenkin olla se siellä, niin sama kai se on pitää siellä 
    yksinomaan
    
    ja se state, joka kuvastaa tätä newDreamii voisi olla taulukko, jossa olisi se content ja sitten se hidden kenttä ja index
    eli 
    [
      {
        index: 1,
        content: {name: klsjklfdjsf, content: dsgfjkldfhdf},
        hidden: true
      }

    ]
    
    */

   
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
        console.log("yhyy",response)
        if(!response){
          throw new Error("Dream not saved")
        }
        props.newNotificationActionCreator("Dream was saved")
        setHidden(true)
        //täällä me voitais oikeastaan tehdö siten, että poistetaan redux stoesta kokonaan se kyseisen indeksin newDream tai sitten ei 
        //koska se aiheuttaa ongelmia siihen että sitten pitäisi poistaa myös se kyseinen newDreamkomponentti storesta
        store.dispatch(changeContentActionCreator({
          index: props.index,
          content: {name: "", content: ""},
          hidden: true
        }))
      }catch(exception){
        console.error(exception)
        props.newNotificationActionCreator("Wasn't able to save the dream")
      }
    }

   const handleClose = () => {
    store.dispatch(changeContentActionCreator({
      index: props.number,
      content: {name: "", content: ""},
      hidden: true
    }))
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

const mapStateToProps = (state) => {
  return {
    contents: state.newDreamContent
  }
}

export default connect(mapStateToProps, { addDream, newNotificationActionCreator,  })(NewDream);