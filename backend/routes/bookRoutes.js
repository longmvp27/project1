const express = require("express");
const authController = require("../controllers/authController");
const bookController = require("../controllers/bookController");

const router = express.Router();

router.get("/", bookController.getAllBooks);

router.get("/bestseller", bookController.getBestsellerBooks);

router.post(
    "/",
    authController.protect,
    authController.restrictTo("admin"),
    bookController.createBook
  );

router.delete(
    "/:id",
    authController.protect,
    authController.restrictTo("admin"),
    bookController.deleteBook
);


router.patch(
    "/:id",
    authController.protect,
    authController.restrictTo("admin"),
    bookController.updateBook
);

router.get("/search", bookController.getBooksByGenreOrTitle);



module.exports = router;
