const express = require('express')
const router = express.Router()

const adminController = require('../controllers/admin_controllers')

router.get('/admin/signup', adminController.signup_get)
router.post('/admin/signup', adminController.signup_post)
router.get('/admin/profile', adminController.profile_get)



module.exports = router