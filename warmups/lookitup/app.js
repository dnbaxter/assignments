let dict = {};

addWord = (word, def) => {
    dict[word] = def;
};

lookItUp = (word) => {
    return dict[word];
};





module.exports = {
    addWord,
    lookItUp
};