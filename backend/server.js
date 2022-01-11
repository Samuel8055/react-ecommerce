import express from "express";
import mongoose from "mongoose";
import { data } from "./data.js";
import userRouter from "./routers/userRouter.js";

const app = express();
mongoose.connect(
  process.env.MONGODB_URL ||
    "mongodb+srv://samuel8055:samuel8055@cluster0.vtbiw.gcp.mongodb.net/amazona?retryWrites=true&w=majority"
);

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

app.use("/api/users", userRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => {
  console.log(`Server running successfully at port ${port}`);
});
