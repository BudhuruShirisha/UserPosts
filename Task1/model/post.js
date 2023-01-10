const { mongoose } = require("../db/db")
const postSchema = new mongoose.Schema({
    userid: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Users',
    },
    title: {
        type: String
    },
    description: {
        type: String
    }
})
module.exports = mongoose.model("posts", postSchema)