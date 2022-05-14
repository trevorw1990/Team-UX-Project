const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectName: { type: String, required: true },
    location: {
        required: true,
        country: String,
        city: String,
        state: String
    },
    zipCode: String,
    remote: { type: Boolean, default: false },
    projectDescription: { type: String, required: true },
    tags: Array,
    date: { type: Array, required: true },
    uploadImage: String
})

// tags: Prop Maker, Costume Maker, Painter, etc.

module.exports = mongoose.model('Project', projectSchema);