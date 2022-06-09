function userReducer(state, action) {
    switch (action.type) {
      case "LOGIN":
      case "REGISTER":
        return {
            username: action.username,
            //access_token: action.access_token,
        };
      case "LOGOUT":
        return "";
      default:
        return state;
    }
}

function todoReducer(state, action) {
    switch (action.type) {
        case "CREATE_TODO":
            const newTodo = {
                id:action.id,
                title: action.title,
                description: action.description,
                author: action.author,
                dateCreated: action.dateCreated, 
                complete: action.complete, 
                dateCompleted:action.dateCompleted,
            };
            return [newTodo, ...state];
        case 'TOGGLE_TODO':
            return action.updatedTodos
        case 'DELETE_TODO':
            return action.updatedTodos
        case 'FETCH_TODOS':
            return action.todos;
        default:
            return state;
    }
}

export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        todos: todoReducer(state.todos, action)
    }
}