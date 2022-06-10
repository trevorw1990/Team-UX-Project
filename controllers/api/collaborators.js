const Collaborator = require('../../models/Collaborator');
const Project = require('../../models/Project') 

//get 

const getCollaborator = (req,res)=>{
    Collaborator.find({projectId: req.params.projectId}, (err, foundCollaborator) => {
        if (!err) {
          res.status(200).json(foundCollaborator)
        } else {
          res.status(400).json(err)
        }
      })
}


const setCollaborator = (req,res)=>{
    Collaborator.create(req.body, (err, newCollaborator) => {
        if (!err){
            Project.findByIdAndUpdate(req.params.projectId, {$addToSet: {collaborators: newCollaborator}}, {returnDocument: 'after'}, (projectErr, updatedProject) => {
                if(!projectErr){
                res.status(200).json(updatedProject)
            }else{
                res.status(400).json(projectErr) 
            }
         })
        } else {
            res.status(400).json(err) 
        }
    })
    
    // try {
    //     const { body } = req
    //     const createdCollaborator = await Collaborator.create(body)
    //     res.status(200).json({ message: "Collaborator", createdCollaborator })
    // } catch (error) {
    //     res.status(400).json({ err: error.message })
    // }
}




const updateCollaborator= (req,res)=>{
    const {body} = req 
    Collaborator.findByIdAndUpdate(req.params.id, body,{new: true}, (err, updatedCollaborator) => {
        if (!err) {
          res.status(200).json(updatedCollaborator)
        } else {
          res.status(400).json(err)
        }
      })
}


const deleteCollaborator= (req,res)=>{
    Collaborator.findByIdAndDelete(req.params.id, (err)=>{
        if (!err) {
            res.status(200).json({message: "Deleted Collaborator"})
          } else {
            res.status(400).json(err)
          }
    })
}

// const showCollaborator= (req,res)=>{
//     Collaborator.findById(req.params.id, (err, foundCollaborator)=>{
//         if (!err) {
//             res.status(200).json({message:'showing the message', foundCollaborator})
//           } else {
//             res.status(400).json(err)
//           }
//     })
// }

module.exports = {
    getCollaborator,
    setCollaborator,
    updateCollaborator,
    deleteCollaborator
}