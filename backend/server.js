import express from "express";
import { data } from "./data.js";

const app = express();

const port = process.env.port || 5000;

app.get("/", (req, res) => {
  res.send("Server is ready!");
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find(
    (product) => product._id === req.params.id
  );
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found!" });
  }
});

app.listen(port, () => {
  console.log(`Server running successfully at port ${port}`);
});
