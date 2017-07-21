let defaultState = {
    todos: []
};

const mainReducer = (state = defaultState, action) => {

    if(action.type === "GET_LIST") {
        console.log(action.todoList);
        return {
            ...state,
            todos: action.todoList
        }
    } else {
        return state
    }

};

export default mainReducer;