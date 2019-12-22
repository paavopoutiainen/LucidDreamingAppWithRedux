import { createStore, combineReducers, applyMiddleware } from "redux"
import dreamReducer from "./reducers/dreamsReducer"
import notificationReducer from "./reducers/notificationReducer"
import newDreamFormsReducer from "./reducers/newDreamFormsReducer"
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    dreams: dreamReducer,
    notification: notificationReducer,
    newDreamForms: newDreamFormsReducer 
})

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk)
  ))

export default store