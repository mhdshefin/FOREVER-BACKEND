import express from 'express'

import { addToCart, getCart, updateCart } from '../Controllers/cartController.js'
import userAuth from '../Middleware/userAuth.js'

const cartRouter = express.Router()

cartRouter.post('/add', userAuth, addToCart)
cartRouter.post('/update', userAuth, updateCart)
cartRouter.post('/get', userAuth, getCart)

export default cartRouter

