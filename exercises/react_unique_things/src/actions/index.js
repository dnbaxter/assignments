export function genItem(item) {
    return {
        type: "GEN_ITEM",
        item
    }
}

export function delItem(index) {
    return {
        type: "DEL_ITEM",
        index
    }
}

export function update(post, index) {
    return {
        type: "UPDATE_ITEM",
        post,
        index
    }
}