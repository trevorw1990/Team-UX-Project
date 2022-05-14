const mongoose = require('mongoose');
const messageSchema = require('./messageSchema');




module.exports = mongoose.model('Message', messageSchema);