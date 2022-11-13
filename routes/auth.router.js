const express = require("express");
const router = express.Router();

const {
    author,
} = require("../controllers/auth.controller")
router.get("/author",author)
module.exports = router;