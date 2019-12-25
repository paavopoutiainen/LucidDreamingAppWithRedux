

const newDreamContentReducer = (state = [], action) => {
    switch(action.type) {
        case "CHANGE_CONTENT":
            console.log(state)
            const newState = state.filter(x => x.index !== action.data.index)
            //changedObject = {...changedObject, content: action.data.content } }

            return newState.concat(action.data)
        default: return state    
    }
}

export const changeContentActionCreator = (contentObject) => {
    return {
        type: "CHANGE_CONTENT",
        data: contentObject
    }
}

export default newDreamContentReducer