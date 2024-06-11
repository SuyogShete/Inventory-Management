const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

let products = [];

let cartProducts = [];

app.get("/", (req, res) => {
  res.json(products);
});

app.get("/cart", (req, res) => {
  res.json(cartProducts);
});

app.post("/add-product/:productId/:productQuantity", (req, res) => {
  const { productId } = req.params;
  const { productQuantity } = req.params;
  const { productName, productPricePerUnit } = req.body;

  const totalprice = productQuantity * productPricePerUnit;

  const newProduct = {
    productId: productId,
    productName: productName,
    productQuantity: productQuantity,
    productPrice: totalprice,
  };

  products.push(newProduct);
  res.json(newProduct);
});

app.post("/cart/add-product/:productId/:productQuantity", (req, res) => {
  const { productId } = req.params;
  const { productQuantity } = req.params;
  const { productName, productPrice } = req.body;

  const totalprice = productPrice;

  const newProduct = {
    productId: productId,
    productName: productName,
    productQuantity: productQuantity,
    productPrice: totalprice,
  };

  cartProducts.push(newProduct);
  res.json(newProduct);
});

app.delete("/delete-product/:productId/:productQuantity", (req, res) => {
  const { productId, productQuantity } = req.params;

  const productIndex = products.findIndex((p) => p.productId === productId);

  if (productIndex !== -1) {
    products.splice(productIndex, 1);
    res.json({ message: `Product with ID ${productId} deleted successfully` });
  } else {
    res.status(404).json({ error: `Product with ID ${productId} not found` });
  }
});

app.delete("/cart/delete-product/:productId/:productQuantity", (req, res) => {
  const { productId, productQuantity } = req.params;

  const productIndex = cartProducts.findIndex((p) => p.productId === productId);

  if (productIndex !== -1) {
    cartProducts.splice(productIndex, 1);
    res.json({ message: `Product with ID ${productId} deleted successfully` });
  } else {
    res.status(404).json({ error: `Product with ID ${productId} not found` });
  }
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
