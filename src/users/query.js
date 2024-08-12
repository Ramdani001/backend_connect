const getUsers = "SELECT * FROM users";
const getUsersById = "SELECT * FROM users WHERE id_user=?";
const checkEmailExists = "SELECT * FROM users WHERE email=?";
const addUsers = "INSERT INTO users (email, password, created_at, updated_at) VALUES (?, ?, ?, ?)";
const removeUsers = "DELETE FROM users WHERE id_user=?";

module.exports = {
    checkEmailExists,
    getUsers,
    getUsersById,
    addUsers,
    removeUsers,
};