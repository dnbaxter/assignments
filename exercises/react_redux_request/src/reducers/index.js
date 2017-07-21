let defaultState = {
    style: {
        backgroundColor: "rebeccapurple"
    },
    // count: 1
    hex: "663399",
    colorName: "Rebecca Purple"
};

const mainReducer = (state = defaultState, action) => {

    if (action.type === "PARTY_TIME") {
        let hex = action.color
        let name = action.colorName;
        console.log("Hex: " + hex);
        console.log("Name: " + name);

        let newColor = "#" + hex;
        console.log(newColor + "\n\n");

        if (name === "N/A" || hex === "#") {
            return {
                ...state,
                style: {
                    background: "hotpink"
                },
                hex: "ff69b4",
                colorName: "hotpink"
            }
        } else {
            return {
                ...state,
                style: {
                    background: newColor
                },
                hex: hex,
                colorName: name
            }
        }
        // console.log(state.count);
        // if (state.count === 1) {
        //     return {
        //         ...state,
        //         style: {
        //             ...state.style,
        //             background: "#03001e", /* fallback for old browsers */
        //             background: "-webkit-linear-gradient(to right, #fdeff9, #ec38bc, #7303c0, #03001e)", /* Chrome 10-25, Safari 5.1-6 */
        //             background: "linear-gradient(to right, #fdeff9, #ec38bc, #7303c0, #03001e)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        //         },
        //         count: state.count - 1
        //     }
        // } else if (state.count === 0) {
        //     return {
        //         ...state,
        //         style: {
        //             ...state.style,
        //             background: "#000000", /* fallback for old browsers */
        //             background: "-webkit-linear-gradient(to right, #FF070B, #E5008D, #000000)", /* Chrome 10-25, Safari 5.1-6 */
        //             background: "linear-gradient(to right, #FF070B, #E5008D, #000000)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        //
        //         },
        //         count: state.count + 1
        //     }
        // }

    } else {
        return state;
    }

};
export default mainReducer;