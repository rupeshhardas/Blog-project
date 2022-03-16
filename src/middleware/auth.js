const jwt = require("jsonwebtoken");
const blogModel = require("../Models/blogModel");

const authenticate = function (req, res, next) {
    let token = req.headers["x-api-key"];
    if (!token) return res.send({ status: false, mssg: "token must be present" });

    let decodedtoken = jwt.verify(token, "Blog-Project");
    if (!decodedtoken) return res.send({ status: false, mssg: "invalid token" })
    next()
}



const authorisation = async function (req, res, next) {

    let blogId = req.params.blogId
    let findBlog = await blogModel.findById(blogId)
    let authortobemodified = findBlog.authorid
    let token = req.headers["x-api-key"];
    if (!token) return res.send({ status: false, mssg: "token must be present" });

    let decodedtoken = jwt.verify(token, "Blog-Project");
    if (!decodedtoken) return res.send({ status: false, mssg: "invalid token" })
    let userloggedin = decodedtoken.authorid

    if (authortobemodified != userloggedin) return res.send({ status: false, msg: "user is not allowed to modify other's blog" })

    next()
}

module.exports.authenticate = authenticate
module.exports.authorisation = authorisation