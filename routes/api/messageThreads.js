const express = require('express')
const router = express.Router()
const {  getThread,
    setThread,
    updateThread,
    deleteThread,
    showThread  } = require('../../controllers/api/messagesThread')

router.get("/", getThread) 
//
router.post('/', setThread)
//  Update
router.put('/:id', updateThread)
// delete
router.delete('/:id', deleteThread)

//show
router.get('/:id', showThread)


module.exports = router;