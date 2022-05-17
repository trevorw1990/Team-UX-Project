const MessageThread = require('../../models/MessageThread')
//get 

const getThread = (req,res)=>{
    MessageThread.find({}, (err, foundThread) => {
        if (!err) {
          res.status(200).json(foundThread)
        } else {
          res.status(400).json(err)
        }
      })
}
//set Thread

const setThread = async (req,res)=>{
    try {
        const { body } = req
        const createdThread= await MessageThread.create(body)
        res.status(200).json({ message: "Item Created!", createdThread })
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
}


//get Thread

const updateThread= (req,res)=>{
    const {body} = req 
    MessageThread.findByIdAndUpdate(req.params.id, body,{new: true}, (err, updatedThread) => {
        if (!err) {
          res.status(200).json(updatedThread)
        } else {
          res.status(400).json(err)
        }
      })
}
//get Thread

const deleteThread = (req,res)=>{
    MessageThread.findByIdAndDelete(req.params.id, (err)=>{
        if (!err) {
            res.status(200).json({message: "Deleted Thread"})
          } else {
            res.status(400).json(err)
          }
    })
}

const showThread= (req,res)=>{
    MessageThread.findById(req.params.id, (err, Thread)=>{
        if (!err) {
            res.status(200).json({message:'showing the Thread', Thread})
          } else {
            res.status(400).json(err)
          }
    })
}

module.exports = {
    getThread,
    setThread,
    updateThread,
    deleteThread,
    showThread 
}