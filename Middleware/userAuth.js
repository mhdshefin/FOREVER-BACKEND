import jwt from 'jsonwebtoken'

const userAuth = async (req, res, next) => {

    const {token} = req.headers;
    
    if (!token) {
       return res.json({ success: false, message: "Not authorized login again" })
    }
    try {
        const token_decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(token_decoded);
        console.log(token_decoded.id);
        
        req.body.userId = token_decoded.id;
        next()

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export default userAuth