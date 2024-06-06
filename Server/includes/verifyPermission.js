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




const authCookMiddleWare = (req,res,next)=>{
    const tokenString = req.headers.authorization;
    if(!tokenString) res.status(401).json({error:"Nu ai acces"});
    const token = tokenString.split(" ")[1];
    if(!token) return res.status(401).json({error:"Nu ai acces"});
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded) return res.status(401).send({errod:"Nu ai acces"})
        if(!decoded.cook) return res.status(401).send({error:"Nu esti bucatar"});
        req.user = decoded;
    
    } catch (error) {
        return res.status(401).send({ error: "Invalid token" });
    }
    next();
}
module.exports = {authMiddleWare, authCookMiddleWare};