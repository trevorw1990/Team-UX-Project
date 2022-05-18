const { Schema } = require('mongoose');


const collaboratorSchema = new Schema({
    datesAvailable: Array,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    role: {
        type: String,
        required: true
    },
    projectId: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    }
})

module.exports = collaboratorSchema;