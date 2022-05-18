const express = require('express')
const router = express.Router()
const { getCollaborator, setCollaborator, deleteCollaborator, updateCollaborator } = require('../../controllers/api/collaborators')

// router.get("/", getCollaborator) 
//
router.post('/:projectId', setCollaborator)
//  Update
router.put('/:id', updateCollaborator)
// delete
router.delete('/:id', deleteCollaborator)

//get
router.get('/:projectId', getCollaborator)


module.exports = router;