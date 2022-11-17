const express = require('express');
const router = express.Router();
const workerController = require("../controllers/worker_controllers");
const workerauth =require("../middleware/workerauth")

require("../db/connection")

router.get('/',(req, res)=> {
    res.send("hello accountjs")
});

router.post("/register", workerController.register);

router.post("/login", workerController.login);

router.post("/is-valid-token", workerauth, workerController.isValidToken);

router.post("/reset-paasword", workerauth, workerController.resetPassword);

router.post("/verify-email", workerauth, workerController.verifyEmail);


module.exports = router;