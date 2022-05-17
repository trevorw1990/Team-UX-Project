const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CollaboratorSchema = require("./CollaboratorSchema");

const projectSchema = new Schema({
    projectName: { type: String, required: true },
    country: String,
    usState: String,
    zipCode: String,
    isRemote: { type: Boolean, default: false },
    projectDescription: { type: String, required: true },
    lookingForItems: Array,
    lookingForTags: Array,
    dateStartEnd: Array,
    datesMultiple: Array,
    isRange: { type: Boolean, default: true },
    imageUrl: String,
    collaborators: [CollaboratorSchema],
    organizer: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
})

// tags: Prop Maker, Costume Maker, Painter, etc.

module.exports = mongoose.model('Project', projectSchema);