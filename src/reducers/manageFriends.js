export function manageFriends(state, action){
    // console.log("The state is: ", state, "The action is: ", action)

    switch(action.type){
        case "ADD_FRIEND":
            // let newObj = Object.assign({}, state, action.friend)
            return (
                {...state, 
                    friends: [
                        ...state.friends,
                        action.friend
                    ]
                }
            )
        case "REMOVE_FRIEND":
            let newfriends = state.friends.filter(friend => {
                return friend.id !== action.id
            })

            console.log(newfriends)
            
            return (
                {...state, 
                    friends: newfriends
                }
            )
        default:
            return state
    }
}
