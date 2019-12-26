import dreamsService from "../services/dreams"
import moment from "moment"
import { arrowFunctionExpression } from "@babel/types"


const dreamReducer = (state = [], action) => {
    switch (action.type){
        case "ALL_DREAMS":
            return action.data.map(d => {
                const date = moment(d.date)
                return {...d, date: date.format('MMMM Do YYYY, h:mm:ss a')}
              }).reverse()
        case "ADD_DREAM":
            const copyOfState = [...state]
            const date = moment(action.data.date)
            copyOfState.splice(0, 0, { ...action.data, date: date.format('MMMM Do YYYY, h:mm:ss a') })
            return copyOfState
        default: return state    
    }
}

export const getDreams = () => {
    return async dispatch => {
        const response = await dreamsService.getAll()
        dispatch({
            type: "ALL_DREAMS",
            data: response
        })
    }
}

export const addDream = (dream) => {
    return async dispatch => {
        try {
            const newDream = await dreamsService.create(dream)
            if(newDream){
                dispatch({
                    type: "ADD_DREAM", 
                    data: newDream
                })
                return true
            }else {
                throw new Error("bad dream")
            }
        } catch (exception) {
            console.error(exception)
            return false
        }
            
            
        
        
    }
}

export default dreamReducer



