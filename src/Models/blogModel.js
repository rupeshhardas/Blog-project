const mongoose = require("mongoose")
const objectId = mongoose.Schema.Types.ObjectId
const blogSchema = new mongoose.Schema({

    "title": {
        type: String,
        required: true
    },
    "body": {
        type: String,
        required: true
    },
    "authorid": {
        type: objectId, ref: "author"
    },
    "tags": {
        type:Array
    },

    "category": {
        type: String,
        required: true
    },
    "subcategory": [String],
    "isPublished": {
        type: Boolean,
        default: false
    },
    "publishedAt": Date,
    "deleted": {
        type: Boolean,
        default: false
    },
    "deletedAt": Date


}, { timestamps: true })

module.exports = mongoose.model("blog", blogSchema)