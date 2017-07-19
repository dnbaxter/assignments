let defaultState = {
    name: ""
};

const mainReducer = (state = defaultState, action) => {

    if (action.type === "NAME_SELECTOR") {
        console.log("Obtained", action.names);
        let arr = [];
        arr.push(action.names.first, action.names.second, action.names.third);
        console.log(arr);
        let randName = arr[Math.floor(Math.random() * arr.length)];
        console.log(randName);
            // let result;
            // let count = 0;
            // for (let prop in action.name)
            //     if (Math.random() < 1/++count)
            //         result = prop;
            // console.log(result);
            // return {
            //     ...state,
            //     names: result
            //
            // }
        return {
            ...state,
            name: randName
        }
    } else {
        return state;
    }

};

export default mainReducer;