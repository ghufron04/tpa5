const express = require("express");
const router = express.Router();

const {
  getAllTugas,
  getTugasByID,
  addTugas,
  deleteTugasByID,
  updateTugasByID,
  deleteAllTugas,
} = require("../controllers/tugas.controller");

router.get("/", getAllTugas);
router.get("/:id", getTugasByID);
router.post("/add", addTugas);
router.delete("/:id", deleteTugasByID);
router.put("/:id", updateTugasByID);
router.delete("/delete/:id", deleteAllTugas);


module.exports = router;
