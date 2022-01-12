import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

mongoose.connect(
  process.env.MONGODB_URL ||
    "mongodb+srv://samuel8055:samuel8055@cluster0.vtbiw.gcp.mongodb.net/amazona?retryWrites=true&w=majority"
);

const port = process.env.port || 5000;

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => {
  console.log(`Server running successfully at port ${port}`);
});
