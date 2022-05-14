const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message: {
        type: String,
        required: true
    },
    thread: {
        type: Schema.Types.ObjectId,
        ref: 'MessageThread',
        required: true
    }
   
    
})



module.exports = mongoose.model('Message', messageSchema);