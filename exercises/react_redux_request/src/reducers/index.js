import { combineReducers } from "redux";
import { call, coalesceFunks } from "redux-funk";

export const incrementAsync = () => new Promise(resolve => {
    setTimeout(() => resolve({
        type: "INCREMENT"
    }), 1000)
});

let defaultState = {
    style: {
        backgroundColor: "rebeccapurple"
    }
};

const mainReducer = (state = defaultState, action) => {

    if (action.type === "PARTY_TIME") {
        return {
            ...state,
            style: {
                ...state.style,
                backgroundColor: "blue"
            }
        }
    } else {
        return state;
    }

};

export default mainReducer;