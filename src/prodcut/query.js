const getProducts = "SELECT * FROM product";
const getProductsById = "SELECT * FROM product WHERE id_product=?";

module.exports = {
    getProducts,
    getProductsById,
};