const ResolutionModel = require('./ResolutionModel');

//GET

module.exports.getResolution = async(req, res) => {
    const myResolution = await ResolutionModel.find();
    res.send(myResolution)
}

//POST

module.exports.saveResolution = async(req, res) => {
    const { name } = req.body; 
    ResolutionModel.create({ name })
    .then((data) => {console.log("ADDED")
    res.send(data)
    })
}

//DELETE

module.exports.deleteResolution = async(req, res) => {
    const {_id} = req.body
    ResolutionModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted resolution'))
}
//EDIT

module.exports.editResolution = async(req, res) => {
    const {_id, name} = req.body
    ResolutionModel.findByIdAndUpdate(_id, { name })
    .then(() => res.send('Edited resolution'))
}