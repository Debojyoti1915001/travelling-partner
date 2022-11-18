const User = require("../models/user");
const Worker = require("../models/worker");
const Post = require("../models/post");

const { sendMailToWorker, sendMailToUser } = require('../config/nodemailer.js')


const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require('express');
const cloudinary = require('cloudinary').v2
cloudinary.config({
  cloud_name: process.env.Cloud_Name,
  api_key: process.env.API_Key,
  api_secret: process.env.API_Secret
})
module.exports.allpost_get = async (req, res, next) => {
  try {
    const allPost = await Post.find({})
    await res.status(200).json(allPost);
  } catch (e) {
    await res.status(400).send(e.toString());
  }
};
module.exports.allpost_post = async (req, res, next) => {
  try {
    const {name,locality,city,pin,state,country}=req.body
    const picture = req.file.path
    console.log(picture)
    var pic = null
    await cloudinary.uploader.upload(picture, function (err, res) {
      pic = res.secure_url
    })
    console.log(pic)
    const post = await Post.create({
      name,locality,city,pin,state,country,pic
    });
    await res.status(200).json(pic);
  } catch (e) {
    await res.status(400).send(e.toString());
  }
};
module.exports.register = async (req, res, next) => {
  try {
    const {
      name,
      email,
      password,
      confirmPassword
    } = req.body;
    console.log(req.body)
    if (!(name && email && password && confirmPassword)) {
      return res.status(400).send("Email and password needed");
    }
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(409).send("User already exists");
    } else if (password != confirmPassword) {
      return res.status(422).send({ error: "Password not matching" })
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name: name,
      email: email,
      password: encryptedPassword,
      isEmailVerified: true,
      isActive: false,
      isDelete: false,
      createdOn: Date.now().toString(),
      updatedOn: Date.now().toString(),
      token: "",
      tokenExpiresOn: "",
    });
    const token = jwt.sign(
      { user: { user_id: user._id, email } },
      process.env.TOKEN_KEY,
      {
        expiresIn: "1h",
      }
    );
    user.token = token;
    res.cookie("xauthtoken", token);
    (user.tokenExpiresIn = "1h"), await user.save();
    await res.status(200).json(user);
  } catch (e) {
    await res.status(400).send(e.toString());
  }
};


module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    if (!email || !password) {
      return res.status(400).send("All inputs are required");
    }
    const user = await User.findOne({ email });
    //check if user mail is not verified, if not verified send a verification mail

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token

      const token = jwt.sign(
        { user: { user_id: user._id, email } },
        process.env.TOKEN_KEY,
        {
          expiresIn: "1h",
        }
      );

      // save user token
      user.token = token;
      await user.save();
      // user
      res.cookie('xauthtoken', token, { httpOnly: true })
      return res.status(200).json(user);
    }
    return res.status(400).send("Invalid Credentialjhs");
  } catch (e) {
    await res.status(400).send(e.toString());
  }
};

module.exports.isValidToken = (req, res, next) => {
  if (!req.user) {
    return res.status(400).send("Invalid Token");
  }
  return res.status(200).send("Valid Token");
};
module.exports.resetPassword = async (req, res, next) => {
  try {
    const user_id = req.user.user_id;
    const { new_password } = req.body;
    let user = await User.findById(user_id);
    if (!user) {
      res.status(400).send("No such User exists");
    }
    user.password = await bcrypt.hash(new_password, 10);
    const payload = {
      user: req.user,
    };
    const token = await jwt.sign(payload, process.env.TOKEN_KEY);
    user.token = token;
    await user.save();
    res.cookie("xauthtoken", token);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).send(e.toString());
  }
};


module.exports.refreshAccessToken = async (req, res, next) => {
  try {
    const user_id = req.user.user_id;
    let user = await User.findById(user_id);
    if (!user) {
      res.status(400).send("No such User exists");
    }
    const payload = {
      user: req.user,
    };
    const token = await jwt.sign(payload, process.env.TOKEN_KEY);
    res.cookie("xauthtoken", token);
    return res.status(200).send("Token Refreshed");
  } catch (err) {
    return res.status(400).send(e.toString());
  }
};


module.exports.verifyEmail = async (req, res, next) => {
  try {
    const user_id = req.user.user_id;
    let user = await User.findById(user_id);
    if (!user) {
      res.status(400).send("No such User exists");
    }
    user.isEmailVerified = true;
    await user.save();
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).send(e.toString());
  }
};
module.exports.mailWorker = async (req, res, next) => {
  try {
    const user = req.user;
    const worker_id=req.params.id
    let worker = await Worker.findById(worker_id);
    sendMailToWorker(worker,user,req.hostname, req.protocol)
    sendMailToUser(worker,user,req.hostname, req.protocol)
    return res.status(200).json({message:"Success"});
  } catch (err) {
    return res.status(400).send(e.toString());
  }
};
