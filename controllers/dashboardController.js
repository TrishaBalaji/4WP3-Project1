const productModel = require("../models/productModel");

function showDashboard(req, res) {
  const username = req.query.username;

  productModel.getAllProducts((err, products) => {
    if (err) return res.send("Error loading products");

    const totalProducts = products.length;
    const avgPrice = (
      products.reduce((sum, p) => sum + parseFloat(p.price), 0) / totalProducts
    ).toFixed(2);

    const topProduct = products.reduce((a, b) =>
      parseInt(a.amount_sold) > parseInt(b.amount_sold) ? a : b
    ).item;

    const maxDiscount = products.reduce((a, b) =>
      parseFloat(a.discounts) > parseFloat(b.discounts) ? a : b
    ).discounts;

    res.render("dashboard", {
      username,
      products,
      totalProducts,
      avgPrice,
      topProduct,
      maxDiscount
    });
  });
}

module.exports = { showDashboard };
