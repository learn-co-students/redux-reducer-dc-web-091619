export function manageFriends(state = {friends:[]}, action){

    switch (action.type) { 
        case "ADD_FRIEND": 
           return {friends: state.friends.concat(action.friend)}
        case "REMOVE_FRIEND":
               let friend = state.friends.findIndex(friend=>friend.id === action.id)
               let newFriends = [...state.friends]
               newFriends.splice(friend,1)
            return{friends: newFriends}
        default: return state;
        }
    

}
