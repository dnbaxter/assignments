let defaultState = {
    top: "Edit",
    bottom: "Me",
    url: "https://imgflip.com/s/meme/Success-Kid.jpg"
};

const mainReducer = (state = defaultState, action) => {

    if(action.type === "MAKE_MEME") {
        console.log("Working", action.meme);
        return {
            ...state,
            top: action.meme.top,
            bottom: action.meme.bottom,
            url: action.meme.url
        }
    } else {
        return state;
    }

};

export default mainReducer;