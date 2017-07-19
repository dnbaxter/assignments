let defaultState = {
    items: []
};

const mainReducer = (state = defaultState, action) => {

    if (action.type === "GEN_ITEM") {
        // console.log(action.item);
        // console.log(state);

        return {
            ...state,
            items: [...state.items, action.item]
        }

    } else if (action.type === "DEL_ITEM") {
        let index = action.index;

        // console.log("DELETING INDEX NUMBER: " + action.index);
        // console.log(state.items[index].description);

        let oldState = [...state.items];
        oldState.splice(index, 1);
        return {
            ...state.items,
            items: oldState
        }

    } else if (action.type === "UPDATE_ITEM") {
        let oldState = [...state.items];
        oldState[action.index] = action.post;

        return {
            ...state,
            items: oldState
        }

    } else {
        return {
            ...state
        };
    }

};

export default mainReducer;