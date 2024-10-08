const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getProducts);
router.get("/:id", controller.getProductsById);
module.exports = router;