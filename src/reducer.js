export const initialState = {
   users: [],
};

function reducer(state, action)
{
    switch(action.type)
    {
        case 'ADD_USER':
            state.users.forEach(element => {
                if(element.cc === action.user.cc) {
                    return {...state}
                }
            });
            return {...state, users: [...state.users, action.user], };
        case 'UPDATE_USER':
            let usersToChange = [...state.users];
            usersToChange.forEach(element => {
                if(element.cc === action.user.cc) {
                    console.log(usersToChange)
                    element.cc = action.user.cc
                    element.name = action.user.name
                    element.country = action.user.country
                }
            });
            return {...state, users: usersToChange};
            case 'DELETE_USER':
                let newUsersToDelete = [...state.users];
                const deleteIndex = state.users.findIndex((user) => user.cc === action.cc);
                if(deleteIndex >= 0)
                {
                    newUsersToDelete.splice(deleteIndex, 1);
                } 
                return {...state, users: newUsersToDelete};
            case 'EMPTY_USERS':
                console.log("EMPTY USERS")
                let emptyUsers = []
                return {...state, users: emptyUsers}
        default:
            return state;
    }
}

export default reducer;