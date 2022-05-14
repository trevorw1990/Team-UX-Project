const { model, Schema } = require('mongoose');
const messageSchema = require('./MessageSchema');

const messageThreadSchema = new Schema({
    Users: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],

    messages: [messageSchema]

})

const MessageThread = model('MessageThread', messageThreadSchema);

module.exports = MessageThread;