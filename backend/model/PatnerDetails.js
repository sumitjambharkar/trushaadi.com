const mongoose = require("mongoose");

const patnerDetails = new mongoose.Schema({
    yourName : {
        type : String,
        require : true
    },
    yourPatnerName : {
        type : String,
        require : true
    },
    yourEmailId : {
        type : String,
        require : true
    },
    yourPatnerEmailID : {
        type : String,
        require : true
    },
    whenDidUMeet : {
        type : String,
        require : true
    },
    weddingDate : {
        type : String,
        require : true
    },
    tellUs : {
        type : String,
        require : true
    },
    coupleWeddingPhoto : {
        type : String,
        require: true
    }

})
module.exports = mongoose.model("PatnerDetails",patnerDetails)