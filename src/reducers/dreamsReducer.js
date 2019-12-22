import dreamsService from "../services/dreams"

const dreamReducer = (state = [], action) => {
    switch (action.type){
        case "ALL_DREAMS":
            return action.data
        case "ADD_DREAM":
            return state.concat(action.data)
        default: return state    
    }
}

export const getDreams = () => {
    return async dispatch => {
        const response = await dreamsService.getAll()
        dispatch({
            type: "ALL_DREAMS",
            data: response.reverse()
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



