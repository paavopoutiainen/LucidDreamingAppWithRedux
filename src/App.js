import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AnalyzePage from "./components/content/AnalyzePage.js"
import AnalyzeDream from "./components/content/AnalyzeDream.js"
import JournalPage from "./components/content/JournalPage.js"
import IdeasPage from "./components/content/IdeasPage.js"
import Navbar from "./components/layout/Navbar"
import DreamList from "./components/dreams/Dreamlist.js"
import DreamDetails from "./components/dreams/DreamDetails.js"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import { getDreams } from "./reducers/dreamsReducer"
import { connect } from "react-redux"
import Snackbar from '@material-ui/core/Snackbar';
import { emptyNotificationActionCreator } from "./reducers/notificationReducer"



function Home() {
  return (
    <div>
      <h1>Home</h1>
    <p>This is the Home page of this app</p>
    </div>
    
  )
    
}

function App(props) {

  const [open, setOpen] = useState(false);


  useEffect(() => {
    props.getDreams()
  }, [])

  const dreamById = (id) => props.dreams.find(x => x.id === id)

  function handleClose(){
    props.emptyNotificationActionCreator()
  }
  

  return (
    <div >
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path ="/journal" component={JournalPage}></Route>
            <Route path = "/exercise_ideas" component={IdeasPage}></Route>
            <Route exact path = "/analyze" render={() => <AnalyzePage/>}></Route>
            <Route path = "/dreamlist" render={()=> <DreamList/>}></Route>
            <Route path = "/ideas" component={IdeasPage}></Route>
            <Route path = "/dreams/:id" component={DreamDetails}></Route>
            <Route path = "/signin" component={SignIn}></Route>
            <Route path = "/signup" component={SignUp}></Route>
            <Route exact path = "/analyze/dream/:id" render={({match}) => {
              console.log(match.params.id)
             
              console.log(dreamById(match.params.id))
              return <AnalyzeDream dream={dreamById(match.params.id)}></AnalyzeDream>

            }
            }></Route>
          </Switch>
      </BrowserRouter>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={props.snackbarOpen}
        onClose= {handleClose}
        autoHideDuration={2000}
      message={<span id="message-id">{props.notification}</span>}
      />
      
    </div>
    
  );
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification.notification,
    snackbarOpen: state.notification.open,
    dreams: state.dreams
  }
}



export default connect(mapStateToProps, { getDreams, emptyNotificationActionCreator })(App)
