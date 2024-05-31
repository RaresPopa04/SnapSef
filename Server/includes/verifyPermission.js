const jwt = require('jsonwebtoken');

const authMiddleWare = (req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1];

    if(!token) return res.status(401).json({error:"You are not authorized"});
    
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        next()
    } catch (error) {
        res.status(401).json({error:"Token is not valid"});   
    }
}

module.exports = authMiddleWare;