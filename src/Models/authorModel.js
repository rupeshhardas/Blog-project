const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
    "firstName": {
        type: String,
        required: true
    },
    "lastName": {
        type: String,
        required: true
    },
    "title": {
        type: String,
        required:true,
        enum: ["Mr", "Mrs", "Miss"]
    },
    "email": {
        type: String,
        validate: {
            validator: function (email) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            message: "Please enter a valid email"
        },
        unique: true
    },
    "password": {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("author", authorSchema)
