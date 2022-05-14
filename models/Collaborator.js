const mongoose = require('mongoose');
const collaboratorSchema = require('./CollaboratorSchema');


module.exports = mongoose.model('Collaborator', collaboratorSchema);