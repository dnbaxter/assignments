import axios from "axios";

export function getTodo() {
    return (dispatch) => {
        return axios.get("https://api.vschool.io/dustin/todo/").then((response) => {
            let todoList = response.data;

            dispatch(getTodoList(todoList));
        })
    }
}

export function getTodoList(todoList) {
    return {
        type: "GET_LIST",
        todoList
    }
}