const express = require("express");
const productRoutes = require('./src/prodcut/routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Word!");
});

app.use('/api/v1/producs', productRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));

