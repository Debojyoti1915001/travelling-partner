const express = require('express');
const router = express.Router();
const accountController = require("../controllers/account_controllers");
const auth =require("../middleware/auth")

require("../db/connection")

router.get('/',(req, res)=> {
    res.send("hello accountjs")
});

router.post("/register", accountController.register);

router.post("/login", accountController.login);

router.post("/is-valid-token", auth, accountController.isValidToken);

router.post("/reset-paasword", auth, accountController.resetPassword);

router.post("/verify-email", auth, accountController.verifyEmail);


module.exports = router;