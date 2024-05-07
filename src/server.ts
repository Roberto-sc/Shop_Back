import dotenv from 'dotenv'
import express, { json } from 'express'
import { connectDB } from './config/db'
import productRoutes from './routes/productRoutes'


dotenv.config()
connectDB()
const app = express()

app.use(express.json())
//Routes
app.use('/api/products',productRoutes)



export default app