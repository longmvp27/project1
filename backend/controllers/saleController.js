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


exports.createSale = async (req, res) => {
  try {
    const newSale = await Sale.create({
      ...req.body,
    });

    return res.status(200).json({
      status: "success",
      data: {
        new_sale: newSale,
      },
    });
} catch (error) {
  return res.status(400).json({
    status: "fail",
    message: "Create sale fail...",
  });
}
};

exports.updateSale = async (req, res) => {
  try {
    const sale = await Sale.findOne({ where: { id: req.params.id } });
    if (!sale) {
      return res.status(404).json({
        status: "fail",
        message: "No sale found with that ID",
      });
    }

    await sale.update({ ...req.body });

    return res.status(200).json({
      status: "success",
      data: {
        sale,
      },
    });
} catch (error) {
  return res.status(400).json({
    status: "fail",
    message: "Update sale fail...",
  });
}
};

exports.deleteSale = async (req, res) => {
  try {
    const sale = await Sale.findOne({ where: { id: req.params.id } });
    if (!sale) {
      return res.status(404).json({
        status: "fail",
        message: "No sale found with that ID",
      });
    }

    await sale.destroy();
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

exports.createSaleDetail = async (req, res) => {
  try {
    const sale = await Sale.findOne({ where: { id: req.params.id } });
    if (!sale) {
      return res.status(404).json({
        status: "fail",
        message: "No sale found with that ID",
      });
    }

    const newSaleDetail = await SaleDetail.create({
      ...req.body,
      sale_id: sale.id,
    });

    return res.status(200).json({
      status: "success",
      data: {
        saleDetail: newSaleDetail
      },
    });
} catch (error) {
  return res.status(400).json({
    status: "fail",
    message: "Create sale detail fail...",
  });
}
};

exports.updateSaleDetail = async (req, res) => {
  try {
    const saleDetail = await SaleDetail.findOne({ where: { id: req.params.id } });
    if (!saleDetail) {
      return res.status(404).json({
        status: "fail",
        message: "No sale detail found with that ID",
      });
    }

    await saleDetail.update({ ...req.body });

    return res.status(200).json({
      status: "success",
      data: {
        saleDetail,
      },
    });
} catch (error) {
  return res.status(400).json({
    status: "fail",
    message: "Update sale detail fail...",
  });
}
};

exports.deleteSaleDetail = async (req, res) => {
  try {
    const saleDetail = await SaleDetail.findOne({ where: { id: req.params.id } });
    if (!saleDetail) {
      return res.status(404).json({
        status: "fail",
        message: "No sale detail found with that ID",
      });
    }

    await saleDetail.destroy();
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