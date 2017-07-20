


module.exports = function (req, res, next) {
    req.dinosaur = {
        type: "T-req",
        name: "Sr. Fluffykins"
    };
    next();
};