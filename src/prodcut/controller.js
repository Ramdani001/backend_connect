const pool = require('../../db');
const queries = require("./query");

const getProducts = (req, res) => {
    pool.query(queries.getProducts, (error, results) => {
        if(error) throw error.message;
        res.status(200).json(results);
    });
};

const getProductsById = (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(id);
    pool.query(queries.getProductsById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

module.exports = {
    getProducts,
    getProductsById,
};