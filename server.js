const express = require("express");
const productRoutes = require('./src/prodcut/routes');
const usersRoutes = require('./src/users/routes');



const app = express();

app.use((req, res, next) => {
    // Mengatur header Referrer-Policy
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

    // Mengatur header CORS
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Update sesuai dengan domain asal yang akan membuat permintaan
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    // Menangani preflight request untuk OPTIONS method
    if (req.method === 'OPTIONS') {
        return res.sendStatus(204); // No Content
    }

    next();
});
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Word!");
});

app.use('/api/v1/products', productRoutes);
app.use('/api/v1/users', usersRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));

