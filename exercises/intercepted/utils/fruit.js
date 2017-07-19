module.exports = function (req, res, next) {
    req.fruit = {
        type: "cherry",
        color: "red",
        rating: 9.2
    };
    next();
};