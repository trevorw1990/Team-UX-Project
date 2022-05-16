const express = require('express')
const router = express.Router()
const { getMessage, setMessage, deleteMessage, updateMessage, showMessage } = require('../../controllers/api/messages')

router.get("/", getMessage) 
//
router.post('/', setMessage)
//  Update
router.put('/:id', updateMessage)
// delete
router.delete('/:id', deleteMessage)

//show
router.get('/:id', showMessage)


module.exports = router;