const pool = require('../../db');
const queries = require("./query");

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};
 
const getUsersById = (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(id);
    pool.query(queries.getUsersById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
};

const addUsers = (req, res) => {
    const { email, password, created_at, updated_at } = req.body;

    if (!email) {
        return res.status(400).send("Email is required");
    }

    // check email exist
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        // res.send(results)
        if(results.length > 0){
            res.send("Email ada");
        }else{
            pool.query(queries.addUsers, [email, password, created_at, updated_at], (error, results) => {
                if(error) throw error;
                res.status(201).send("Register Succesfully");
                console.log("Berhasil menambahkan akun");
            });
        }
        
    });
}

const deleteUsers = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.removeUsers, [id], (error, results) => {

        if(error) throw error;
        res.status(200).send("Users removed successfully");
    });

}

module.exports = {
    getUsers,
    getUsersById,
    addUsers,
    deleteUsers,
};