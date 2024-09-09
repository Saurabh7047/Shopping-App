import express from "express";
import dotenv from 'dotenv'
import morgan from "morgan";
import connectDB from "./config/db.js";
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'
import categoryRoute from "./routes/categoryRoutes.js";
import productRoutes from './routes/productRoutes.js'
import path from 'path'
import { fileURLToPath } from 'URL';



//configure env
dotenv.config()

//db connection
connectDB();

// esmodule fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//rest object
const app = express();


//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,'./basic-frontend/build')))


//routes
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/category', categoryRoute)
app.use("/api/v1/product", productRoutes);


//rest api
app.use('*', function (req,res) {
  res.sendFile(path.join(__dirname, "./basic-frontend/build/index.html"));
})

//port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server run on ${process.env.DEV_MODE} mode on port ${PORT}`);
});
