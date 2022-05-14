const express = require('express')
const router = express.Router()
const { getProject, setProject, deleteProject, updateProject, showProject } = require('../../controllers/api/projects')

router.get("/", getProject) 
//
router.post('/', setProject)
//  Update
router.put('/:id', updateProject)
// delete
router.delete('/:id', deleteProject)

//show
router.get('/:id', showProject)


module.exports = router;