const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id : {type:String},
    // name:{type: String, required: true},
    email : {type: String, required: true},
    // password : {type: String, required: true},
    // mobile:{type:Number}

},{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("accAuth", userSchema)