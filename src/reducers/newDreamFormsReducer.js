
const newDreamFormsReducer = (state = [], action) => {
    switch(action.type){
        case "NEW_DREAM_FORM":
            return state.concat(action.data)
        case "CHANGE_CONTENT":
            return state.map(x => {
                if(x.index !== action.data.index){
                    return x 
                } else {
                    return {...x, content: action.data.content}
                }
                    
            })
           
        case "DELETE_NEWDREAM_COMPONENT":
            console.log("hieer", action.index)
            return state.filter(x => {
                console.log("hieer2", x.key)
                return x.index !== action.index
            })
        default: return state   
    }
}


/*{
    component: <NewDream key={index} index={index} ></NewDream>,
    content: {name: unennimi, content: unen sisältö},
    index: index
}*/
export const newFormActionCreator = (newDreamState) => {
    return {
            type: "NEW_DREAM_FORM",
            data: newDreamState
        }
} 


/*newContentObject-olion-rakenne:
    {
        content: {name: ldklgkf, conteent: ölöldfgdf},
        index: 2
    }
*/
export const changeContent = (newContentObject) => {
    return dispatch => {
        dispatch({
            type: "CHANGE_CONTENT",
            data: newContentObject
        })
    }
}

export const deleteNewDreamComponent = (index) => {
    return dispatch => {
        dispatch({
            type: "DELETE_NEWDREAM_COMPONENT",
            index
        })
    }
}

export default newDreamFormsReducer