module.exports = (str) => {

    let storage = [];

    for (let i = 0; i < str.length; i++) {
        if(str[i] === "(") {
            storage.push("(");
        } else if (str[i] === ")") {
            if (!storage.length) return false;
            storage.pop();
        }
    }

    return storage.length === 0;

};