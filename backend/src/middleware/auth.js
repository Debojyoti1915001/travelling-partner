const jwt = require("jsonwebtoken");
const User = require("../models/user");


const auth = async (req, res, next)=>{
    const token = req.cookies.xauthtoken
    // console.log(token)
    try{
        const verifyUser = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = {...verifyUser.user};
        if (!req.user.user_id){
            return res.status(400).send("No such user exists");
        }
        const user = await User.findById(req.user.user_id);
        if (!user || user.isDelete){
            return res.status(400).send("No such user exists");
        }
        
        req.user=user
        // console.log("current user", req.user)
        next()

    } catch (err) {
        res.status(401).send("Token is invalid")
    }
};

module.exports = auth;