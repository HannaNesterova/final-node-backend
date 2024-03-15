const mongoose = require('mongoose');

const resolutionSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    }
})

module.exports = mongoose.model('Resolution', resolutionSchema);