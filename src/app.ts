import express from "express";
import productsRouter from './routes/products.routes'
import categoriesRouter from "./routes/categories.routes"


const app = express();

const port = 3000;

app.use("/api", productsRouter, categoriesRouter)













app.listen(port, () => console.log(`Server started at port ${port}`))
