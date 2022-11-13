const { deleteMany, findOneAndDelete } = require("../models/Tugas");
const Tugas = require("../models/Tugas")

module.exports = {
  //melihat semua toddo/tugas
  getAllTugas: async (req, res) => {
    const tugas = await Tugas.find().populate("user", "name")
    .then( doc => {
      if(!doc) {return res.status(404).end();}
      return res.status(200).json({doc , message: "all tugas has been displayed"});
    })
  },

  //melihat detail tugas/todo
  getTugasByID: async (req, res) => {
    const tugas = await Tugas.findById(req.params.id)
    .then( doc => {
      if(!doc) {return res.status(404).end();}
      return res.status(200).json({doc , message: "tugas has been found"});
    })

  },

  //menambah todo/tugas
  addTugas: (req, res) => {
    const data = req.body
    const tugas = new Tugas(data)
    tugas.save()
    .then( doc => {
      if(!doc) {return res.status(404).end();}
      return res.status(200).json({doc , message: "tugas has been created"});
    })

  },

  //hapus tugas/todo
  deleteTugasByID: async (req, res) => {
    const tugas = await Tugas.findByIdAndDelete(req.params.id)
    .then( doc => {
      if(!doc) {return res.status(404).end();}
      return res.status(204).json({doc , message: "tugas has been deleted"});
    })
 
  },

  //update tugas/todo
  updateTugasByID: async (req, res) => {
    var conditions = { _id: req.params.id };

    const tugas = await Tugas.updateOne(conditions, req.body)
    .then( doc => {
      if(!doc) {return res.status(404).end();}
      return res.status(200).json({doc , message: "tugas has been updated"});
    })

  },

    //delete all tugas/todo by a specific user
  deleteAllTugas: async (req, res)=>{ 
    // res.send(req.params.id)
    const tugas = await Tugas.deleteMany({
      "user": req.params.id
    })
    .then( doc => {
      if(!doc) {return res.status(404).end();}
      return res.status(204).json({doc , message: "tugas has been deleted"});
    })
 
    
},
  
}
