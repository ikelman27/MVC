const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let dogModel = {};

const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    breed: {
        type: String,
    },
    age: {
        type: Number,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },


});


dogSchema.statics.findByName = (name, callback) => {
    const search = {
        name,
    };

    return dogModel.findOne(search, callback);
};


dogModel = mongoose.model('Dog', dogSchema);

module.exports.DogModel = dogModel;
module.exports.dogSchema = dogSchema;