import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './Config/mongodb.js'
import connectCloudinary from './Config/cloudianry.js'
import userRouter from './Routes/userRouter.js'
import productRouter from './Routes/productRoute.js'
import cartRouter from './Routes/cartRoute.js'
import orderRouter from './Routes/orderRoute.js'
import cron from 'node-cron'


const app = express()
const port = process.env.PORT || 4000;
connectDB()
connectCloudinary()


app.use(express.json())
app.use(cors())


app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/', (req, res) => {
    res.send('Hello')
})

cron.schedule('* * * * * *',()=>{
    console.log("server running every second");
})

app.listen(port, () => {
    console.log(`Server running on port ${port} `);

})