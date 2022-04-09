const mongoose = require("mongoose");


const profileSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    image : {

        type : String,
      require : true
    },
    date : {
        type : String,
        require : true
    },
    des : {
        type : String,
        require : true
    },

})
module.exports = mongoose.model("Profile",profileSchema)