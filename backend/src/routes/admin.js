const express = require('express')
const router = express.Router()

const adminController = require('../controllers/admin_controllers')

router.get('/admin/login', adminController.login_get)
router.post('/admin/login', adminController.login_post)
router.get('/admin/profile', adminController.profile_get)
router.get('/admin/all-post', adminController.allpost_get)

router.get('/admin/delete/:id', adminController.deletepost_get)

router.get('/admin/logout', adminController.logout_get)


module.exports = router