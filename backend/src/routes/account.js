const express = require('express');
const path = require('path')
const fs = require('fs')
const router = express.Router();
const accountController = require("../controllers/account_controllers");
const auth =require("../middleware/auth")
const multer = require('multer')
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // console.log("in multer",file)
            var dir = `./public/uploads/${uuidv4()}`
        if (!fs.existsSync(dir)) {
            //console.log("making files")
            fs.mkdirSync(dir, { recursive: true }, (err) => {
                if (err) console.error('New Directory Creation Error');
            })
        }
        cb(null, dir)
    },
    filename: (req, file, cb) => {
        // const userId = req.user._id

       // fileName= path.join(`${file.fieldname}`,`File-${v4()}-${file.originalname}-${path.extname(file.originalname)}`)
        //console.log(fileName)
        cb(null,`File-${uuidv4()}-${file.originalname}` )
    },
})

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 6000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb)
    },
})
function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif|pdf/
    const extname = filetypes.test(
        path.extname(file.originalname).toLowerCase()
    )
    const mimetype = filetypes.test(file.mimetype)
    if (mimetype && extname) {
        return cb(null, true)
    } else {
        console.log("invalid file")
        // req.flash("error_msg", "Enter a valid picture of format jpeg jpg png") 
        return cb(null,false)
    }
}
require("../db/connection")

router.get('/',(req, res)=> {
    res.send("hello accountjs")
});
router.get("/all-post", accountController.allpost_get);
router.post("/all-post", upload.single('photo'), accountController.allpost_post);

router.post("/register", accountController.register);

router.post("/login", accountController.login);

router.post("/is-valid-token", auth, accountController.isValidToken);

router.post("/reset-paasword", auth, accountController.resetPassword);

router.post("/verify-email", auth, accountController.verifyEmail);


module.exports = router;