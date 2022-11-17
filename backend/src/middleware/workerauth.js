const jwt = require("jsonwebtoken");
const Worker = require("../models/worker");


const workerauth = async (req, res, next)=>{
    const token = req.cookies.xauthtoken
    // console.log(token)
    try{
        const verifyworker = jwt.verify(token, process.env.TOKEN_KEY);
        req.worker = {...verifyworker.worker};
        if (!req.worker.worker_id){
            return res.status(400).send("No such worker exists");
        }
        const worker = await Worker.findById(req.worker.worker_id);
        if (!worker || worker.isDelete){
            return res.status(400).send("No such worker exists");
        }
        
        req.worker=worker
        // console.log("current worker", req.worker)
        next()

    } catch (err) {
        res.status(401).send("Token is invalid")
    }
};

module.exports = workerauth;