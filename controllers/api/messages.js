const Message = require('../../models/Message');

//get 

const getSendMessage = (req,res)=>{
    Message.find({sender: req.params.userId }, (err, foundMessage) => {
        if (!err) {
          res.status(200).json(foundMessage)
        } else {
          res.status(400).json(err)
        }
      })
} 

const getReceiveMessage = (req,res)=>{
  Message.find({receiver: req.params.userId }, (err, foundMessage) => {
      if (!err) {
        res.status(200).json(foundMessage)
      } else {
        res.status(400).json(err)
      }
    })
}
//set message

const setMessage = async (req,res)=>{
    try {
        const { body } = req
        const createdMessage = await Message.create(body)
        res.status(200).json({ message: "message sent", createdMessage })
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
}


//get Project

const updateMessage= (req,res)=>{
    const {body} = req 
    Message.findByIdAndUpdate(req.params.id, body,{new: true}, (err, updatedMessage) => {
        if (!err) {
          res.status(200).json(updatedMessage)
        } else {
          res.status(400).json(err)
        }
      })
}
//getProject

const deleteMessage = (req,res)=>{
    Message.findByIdAndDelete(req.params.id, (err)=>{
        if (!err) {
            res.status(200).json({message: "Deleted Message"})
          } else {
            res.status(400).json(err)
          }
    })
}

const showMessage= (req,res)=>{
    Message.findById(req.params.id, (err, message)=>{
        if (!err) {
            res.status(200).json({message:'showing the message', message})
          } else {
            res.status(400).json(err)
          }
    })
}

module.exports = {
    getSendMessage,
    getReceiveMessage,
    setMessage,
    updateMessage,
    deleteMessage,
    showMessage 
}