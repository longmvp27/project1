const express = require("express");
const authController = require("../controllers/authController");
const saleController = require("../controllers/saleController");

const router = express.Router();

router.get(
    "/",
    authController.protect,
    authController.restrictTo("admin"),
    saleController.getAllSales
    );

module.exports = router;