var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    posts: [String],
    email: {
        type: String,
        required: true,
        unique: true
    },
    activeMember: Boolean
});

var user = mongoose.model("user", userSchema);
module.exports = user;