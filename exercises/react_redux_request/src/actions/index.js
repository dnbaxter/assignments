import axios from "axios";

export function loadColor() {
    return (dispatch) => {
        return axios.get("http://www.colr.org/json/color/random").then((response) => {
            //console.log(response.data.colors[0].tags[0].name);
            let color = response.data.colors[0].hex;
            let colorName = response.data.colors[0].tags[0];

            // console.log("Color names length: " + response.data.colors[0].tags.length);
            // console.log("Color names: " + response.data.colors[0].tags);

            let fullColor = [];

            if(response.data.colors[0].tags.length > 1) {
                for(let i = 0; i < response.data.colors[0].tags.length; i++) {
                    fullColor.push(response.data.colors[0].tags[i].name);
                }
                // console.log(fullColor.join(" "));
                colorName = fullColor.join(" ");
                dispatch(partyTime(color, colorName));

            } else {
                colorName = colorName ? response.data.colors[0].tags[0].name : "N/A";
                dispatch(partyTime(color, colorName));
            }

        })
    }
}

export function partyTime(color, colorName) {
    //console.log(color);
    return {
        type: "PARTY_TIME",
        color,
        colorName
    }
}