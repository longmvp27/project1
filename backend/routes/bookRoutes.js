const express = require("express");
const authController = require("../controllers/authController");
const bookController = require("../controllers/bookController");

const router = express.Router();

router.get("/", bookController.getAllBooks);

module.exports = router;
