const Messages = require('../../models/message')
//get 

const getMessage = (req,res)=>{
    Messages.find({}, (err, foundMessage) => {
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
        const createdMessage = await Messages.create(body)
        res.status(200).json({ message: "message sent", createdMessage })
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
}


//get Project

const updateMessage= (req,res)=>{
    const {body} = req 
    Messages.findByIdAndUpdate(req.params.id, body,{new: true}, (err, updatedMessage) => {
        if (!err) {
          res.status(200).json(updatedMessage)
        } else {
          res.status(400).json(err)
        }
      })
}
//getProject

const deleteMessage = (req,res)=>{
    Messages.findByIdAndDelete(req.params.id, (err)=>{
        if (!err) {
            res.status(200).json({message: "Deleted Message"})
          } else {
            res.status(400).json(err)
          }
    })
}

const showMessage= (req,res)=>{
    Messages.findById(req.params.id, (err, message)=>{
        if (!err) {
            res.status(200).json({message:'showing the message', message})
          } else {
            res.status(400).json(err)
          }
    })
}

module.exports = {
    getMessage,
    setMessage,
    updateMessage,
    deleteMessage,
    showMessage 
}