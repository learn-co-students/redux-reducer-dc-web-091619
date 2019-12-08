export function managePresents(state, action){
    // console.log("State is: ", state, " Action is : ", action )

    if(action.type === "INCREASE") {
        return {"numberOfPresents": state.numberOfPresents + 1}
    } else {
        return state
    }
}
