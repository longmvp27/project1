const {
    Genre,
    Book,
    BookGenre,
    Sale,
    SaleDetail,
    User,
    sequelize,
    QueryTypes,
    Op,
} = require("../models/index");

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        // console.log(books);
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
        message: "Get all books fail...",
      });
    }
  };

exports.createBook = async (req, res) => {
    try { 
      const newBook = await Book.create({
        ...req.body,
        posted_user: req.user.id,
      });
  
      return res.status(201).json({
        status: "success",
        data: {
          book: newBook,
        },
      });
    } catch (error) {
      return res.status(400).json({
        status: "fail",
        error: error.errors[0].message,
      });
    }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findOne({ where: { id: req.params.id } });
    if (!book) {
      return res.status(404).json({
        status: "fail",
        message: "No book found with that ID",
      });
    }

    if (req.user.role == "admin") {
      await book.update({ ...req.body });
      return res.status(200).json({
        status: "success",
        data: {
          book,
        },
      });
    }

    return res.status(400).json({
      status: "fail",
      message: "Can not update book because the user is not admin",
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      error: error.errors[0].message,
    });
  }
};


exports.deleteBook = async (req, res) => {
    try {
      const book = await Book.findOne({ where: { id: req.params.id } });
      if (!book) {
        return res.status(404).json({
          status: "fail",
          message: "No book found with that ID",
        });
      }
  
      // console.log(req.user);
  
      if (req.user.role == "admin") {
        await book.destroy();
        return res.status(204).json({
          status: "success",
          data: null,
        });
      }
  
      return res.status(400).json({
        status: "fail",
        message: "Can not delete book because the user is not admin",
      });
    } catch (error) {
      return res.status(400).json({
        status: "fail",
        error: error.errors[0].message,
      });
    }
};


// Find books by genre
exports.getBooksByGenre = async (req, res) => {
  try {
    const {genre} = req.query; // pass genre as a query parameter
    
    // Find the genre based on its name
    const selectedGenre = await Genre.findOne({ where: { name: genre } });

    if (!selectedGenre) {
      return res.status(404).json({
        status: 'error',
        message: 'Genre not found',
      });
    }

    // Find bookGenre 
    const selectedBookGenres = await BookGenre.findAll({ where: { genre_id: selectedGenre.id } });
    const bookIds = selectedBookGenres.map(bookGenre => bookGenre.book_id);

    // Find books associated with the selected genre

    const books = await Book.findAll({
      where: { id: bookIds }    
    });
  
    res.status(200).json({
      status: 'success',
      data: {
        books,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 'error',
      message: 'Unable to fetch books by genre',
    });
  }
};

// See bestseller books
exports.getBestsellerBooks = async (req, res) => {
  try {
    const bestsellingBooks = await SaleDetail.findAll({
      attributes: [
        'book_id',
        [sequelize.fn('SUM', sequelize.col('quantity')), 'total'],
      ],
      include: [
        {
          model: Sale,
          where: { status: true }, // Filter sales where status is true
        },
      ],
      group: ['book_id'],
      order: [[sequelize.literal('total'), 'DESC']],
      limit: 10, // Adjust this limit as needed
    });

    const bookIds = bestsellingBooks.map((item) => item.book_id);

    const bestsellers = await Book.findAll({
      where: {
        id: bookIds,
      },
    });

    res.status(200).json({
      status: 'success',
      data: {
        bestsellers,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 'error',
      message: 'Unable to fetch bestseller books',
    });
  }
};
