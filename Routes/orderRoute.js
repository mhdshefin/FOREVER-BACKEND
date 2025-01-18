import express from 'express'
import {placeOrder,placeOrdreStripe,allOrders,updateOrderStatus,userOrder, verifyStripe} from '../Controllers/orderController.js'
import adminAuth from '../Middleware/adminAuth.js'
import userAuth from '../Middleware/userAuth.js'



const orderRouter = express.Router()

orderRouter.post("/list",adminAuth,allOrders)
orderRouter.post("/status",adminAuth,updateOrderStatus)

orderRouter.post("/place",userAuth,placeOrder)
orderRouter.post("/stripe",userAuth,placeOrdreStripe)

orderRouter.post('/userorders',userAuth,userOrder)

orderRouter.post("/verifyStripe",userAuth,verifyStripe)

export default orderRouter