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

exports.getAllSales = async (req, res) => {
    try {
        const sales = await Sale.findAll();
        // console.log(books);
        return res.status(200).json({
          status: "success",
          results: sales.length,
          data: {
            sales,
          },
        });
    } catch (error) {
      return res.status(400).json({
        status: "fail",
        message: "Get all sales fail...",
      });
    }
  };