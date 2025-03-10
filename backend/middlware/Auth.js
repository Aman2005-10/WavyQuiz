import jwt from 'jsonwebtoken';

export function Authmiddle(req , res , next) {

    const token = req.headers.authorization?.split(" ")[1];
    if(!token) {
        return res.status(401).json({message: 'No token provided.'});
    }

    try {
        const decoded = jwt.verify(token , 'secretkey');
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid Token" });
        
    }
    
}