
const newDreamFormsReducer = (state = [], action) => {
    switch(action.type){
        case "NEW_DREAM_FORM":
            return state.concat(action.data)
        default: return state   
    }
}

export const newFormActionCreator = (newDreamComponent) => {
    return {
            type: "NEW_DREAM_FORM",
            data: newDreamComponent
        }
    
    
} 
export default newDreamFormsReducer