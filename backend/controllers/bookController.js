const {
    Genre,
    Book,
    BookGenre,
    User,
    sequelize,
    QueryTypes,
    Op,
} = require("../models/index");

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        // console.log(coffees);
        return res.status(200).json({
          status: "success",
          results: books.length,
          data: {
            books,
          },
        });
    } catch (error) {
      return res.status(400).json({
        status: "fail",
        message: "Get all coffees fail...",
      });
    }
  };

