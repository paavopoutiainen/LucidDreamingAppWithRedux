

const newDreamContentReducer = (state = [], action) => {
    switch(action.type) {
       
        case "DELETE_CONTENT":
            return state.filter(x => x.index !== action.index)
        default: return state    
    }
}

/*export const changeContentActionCreator = (contentObject) => {
    return {
        type: "CHANGE_CONTENT",
        data: contentObject
    }
}*/

export const deleteContent = (index) => {
    return dispatch => {
        dispatch({
            type: "DELETE_CONTENT",
            index
        })
    }
}

export default newDreamContentReducer