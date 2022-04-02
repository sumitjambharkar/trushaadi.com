const { strictEqual } = require("assert");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    number : {

        type : String,
      require : true
    },
    birth : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    city : {
        type : String,
        require : true
    },
    family : {
        type : String,
        require:true
    },
    maritalStatus : {
        type : String,
        require : true
    },
    diet : {
        type : String,
        require : true
    },
    height : {
        type : String,
        require: true
    },
    profileUrl : {
        type :String,
        require :true
    },
    qaulification : {
        type : String,
        require:true
    },
    collage : {
        type : String,
        require :true
    },
    work : {
        type : String,
        require :true
    },
    income : {
        type :String,
        require :true
    }

})
module.exports = mongoose.model("user",userSchema)