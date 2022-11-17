const express = require('express');
const router = express.Router();
const workerController = require("../controllers/worker_controllers");
const workerauth =require("../middleware/workerauth")

require("../db/connection")


router.post("/worker/register", workerController.register);

router.post("/worker/login", workerController.login);

router.post("/worker/is-valid-token", workerauth, workerController.isValidToken);

router.post("/worker/reset-paasword", workerauth, workerController.resetPassword);

router.post("/worker/verify-email", workerauth, workerController.verifyEmail);

router.get("/worker/propose/:id", workerauth, workerController.propose_get);

router.get("/worker/delete/:id", workerauth, workerController.delete_get);


module.exports = router;