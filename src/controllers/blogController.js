const authorModel = require("../Models/authorModel")
const blogModel = require("../Models/blogModel")

const createblog= async function (req, res) {
    let blog = req.body
    let authorId= blog.authorid
    if(!authorId){return res.status(400).send("authorid required")}
    let author = await authorModel.findById(authorId)
    if(!author){return res.status(400).send("invalid authorId")}
    let blogCreated = await blogModel.create(blog)
    res.status(201).send({data: blogCreated})
}

module.exports.createblog = createblog

