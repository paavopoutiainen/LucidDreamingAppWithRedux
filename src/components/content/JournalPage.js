import React, {useState, useEffect} from "react"
import NewDream from "../dreams/NewDream.js"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import store from "../../store"
import { connect } from "react-redux"
import { newFormActionCreator } from "../../reducers/newDreamFormsReducer"
 


const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function JournalPage(props) {
  const classes = useStyles();

  var index = props.newDreamForms.length !== 0 ? Math.max(...props.newDreamForms.map(x => x.index)) + 1 : 0
 
  const handleClick = () => {
      store.dispatch(newFormActionCreator({
        component: <NewDream key={index} index={index} ></NewDream>,
        content: {name: "", content: ""},
        index: index
      }))
  } 
  
  return (
    <div className="container" style={{ padding: 15 }}>
      <div>
        <Fab onClick={() => handleClick()} color="primary" aria-label="add" className={classes.fab}>
          <AddIcon />
        </Fab>
      </div>
      <Grid container spacing ={1} styles={{}}>
        {props.newDreamForms.map(x => x.component)}
      </Grid>
   
    </div>
    )
  }
 
  const mapStateToProps = (state) => {
    return {
      newDreamForms: state.newDreamForms
    }
  }

  export default connect(mapStateToProps, { newFormActionCreator })(JournalPage)