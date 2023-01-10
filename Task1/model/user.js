const { mongoose } = require("../db/db")

const userSchema = new mongoose.Schema({
    name: {
        type: String
    }
})
module.exports = mongoose.model("Users", userSchema)