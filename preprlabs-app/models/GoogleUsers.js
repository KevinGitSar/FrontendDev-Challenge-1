const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const googleUserSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },

    lastName:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    userType:{
        type: String,
        required: true
    },


    refreshToken: String

});

module.exports = mongoose.model('GoogleUser', googleUserSchema);