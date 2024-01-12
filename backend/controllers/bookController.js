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

    await book.update({ ...req.body });
    return res.status(200).json({
      status: "success",
      data: {
        book,
      },
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

      await book.destroy();
      return res.status(204).json({
        status: "success",
        data: null,
      });

    } catch (error) {
      return res.status(400).json({
        status: "fail",
        error: error.errors[0].message,
      });
    }
};


// Find books by genre
exports.getBooksByGenreOrTitle = async (req, res) => {
  try {
    let {query} = req.query; // pass genre as a query parameter
    
    // Find the genre based on its name

    const selectedGenre = await Genre.findOne({ where: { name: query } });

    let booksByGenre = [];

    if (selectedGenre) {
      // Find bookGenre 
        const selectedBookByGenres = await BookGenre.findAll({ where: { genre_id: selectedGenre.id } });
          
        const bookIdsByGenre = selectedBookByGenres.map(bookGenre => bookGenre.book_id);
        
        // Find books associated with the selected genre
        booksByGenre = await Book.findAll({
          where: { id: bookIdsByGenre }    
        });
    } else {
      booksByGenre = [];
    }    

    query = query.toLowerCase();
    const booksByTitle = await Book.findAll({
      where: {
        // Use Op.iLike for case-insensitive search
        title: {
          [Op.like]: `%${query}%`, // Search for the query string in the book title
        },
      },
    });

    console.log(booksByTitle);

  
    return res.status(200).json({
      status: 'success',
      results: booksByGenre.length + booksByTitle.length,
      data: {
        booksByTitle,
        booksByGenre,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 'error',
      message: 'Unable to fetch books by either genre or title',
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

    return res.status(200).json({
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
