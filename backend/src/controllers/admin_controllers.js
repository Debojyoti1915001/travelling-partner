
const express = require('express');
const Post = require("../models/post");
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
    res.cookie('admin', "admin", { httpOnly: true })
    res.send('/admin/profile')
  }
  res.send('/admin/signup')
}
module.exports.profile_get = async (req, res) => {
  if(!req.cookies.admin=="admin"){
    res.send({"message":"Failed to Access"})  
  }
  res.send("admin profile")
}
module.exports.allpost_get = async (req, res) => {
  if(!req.cookies.admin=="admin"){
    res.send({"message":"Failed to Access"})  
  }
  const post= await Post.find({})
  res.json(post)
}
module.exports.deletepost_get = async (req, res) => {
  if(!req.cookies.admin=="admin"){
    res.send({"message":"Failed to Access"})  
  }
  try {
    const id=req.params.id;
    await Post.findByIdAndDelete(id)
    return res.status(200).json({"message":"Deleted Post"});
  } catch (err) {
    return res.status(400).send(e.toString());
  }
}