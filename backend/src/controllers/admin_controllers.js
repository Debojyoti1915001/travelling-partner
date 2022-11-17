const Course = require('../models/Course')
const Videos = require('../models/Videos')
const Post = require('../models/Post')
const express = require('express');
// const multer = require('multer');
// const multerS3 = require('multer-s3');
// const { v4: uuidv4 } = require('uuid')

// const spacesEndpoint = new aws.Endpoint('sgp1.digitaloceanspaces.com');
// const s3 = new aws.S3({
//   endpoint: spacesEndpoint,
//   credentials: {
//     accessKeyId: 'DO00NP8HKYPAADAX4CRP',
//     secretAccessKey: 'meYUTXAbP67jEXQsc289rQXXf0KzYL/lvtAwbvUbARA',
//   },
// });




module.exports.signup_get = async (req, res) => {
  res.send("Signup")
}
module.exports.signup_post = async (req, res) => {
  const name = req.body.name
  const password = req.body.password
  if (name === "admin" && password === "admin") {
    res.send('/admin/profile')
  }
  res.send('/admin/signup')
}
module.exports.profile_get = async (req, res) => {
  res.send("admin profile")
}
