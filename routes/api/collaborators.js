const express = require('express')
const router = express.Router()
const { getCollaborator, setCollaborator, deleteCollaborator, updateCollaborator, showCollaborator } = require('../../controllers/api/collaborators')

router.get("/", getCollaborator) 
//
router.post('/', setCollaborator)
//  Update
router.put('/:id', updateCollaborator)
// delete
router.delete('/:id', deleteCollaborator)

//show
router.get('/:id', showCollaborator)


module.exports = router;