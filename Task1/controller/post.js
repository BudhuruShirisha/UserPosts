const posts = require("../model/post")

async function insertpost(params) {
    posts.insertMany(params, (err, doc) => {
        console.log(doc)
    })
}
module.exports = { insertpost }