const Worker = require("../models/worker");
const Post = require("../models/post");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require('express');



module.exports.register = async (req, res, next) => {
  try {
    const {
      name,
      email,
      password,
      confirmPassword,
      type,
      avatar,
    } = req.body;
    console.log(req.body)
    if (!(name && email && password && confirmPassword)) {
      return res.status(400).send("Email and password needed");
    }
    //0 student 1 mentor 2 admin
    if (!(type === 0 || type === 1 || type === 2)) {

      return res
        .status(400)
        .send("You can only register as student or mentor or admin");
    }
    const oldWorker = await Worker.findOne({ email });
    if (oldWorker) {
      return res.status(409).send("User already exists");
    } else if (password != confirmPassword) {
      return res.status(422).send({ error: "Password not matching" })
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const worker = await Worker.create({
      name: name,
      email: email,
      password: encryptedPassword,
      isEmailVerified: true,
      type: type,
      avatar: avatar,
      isActive: false,
      isDelete: false,
      createdOn: Date.now().toString(),
      updatedOn: Date.now().toString(),
      token: "",
      tokenExpiresOn: "",
    });
    const token = jwt.sign(
      { worker: { worker_id: worker._id, email } },
      process.env.TOKEN_KEY,
      {
        expiresIn: "1h",
      }
    );
    worker.token = token;
    res.cookie("workertoken", token);
    (worker.tokenExpiresIn = "1h"), await worker.save();
    await res.status(200).json(worker);
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
    const worker = await Worker.findOne({ email });
    //check if user mail is not verified, if not verified send a verification mail

    if (worker && (await bcrypt.compare(password, worker.password))) {
      // Create token

      const token = jwt.sign(
        { worker: { worker_id: worker._id, email } },
        process.env.TOKEN_KEY,
        {
          expiresIn: "1h",
        }
      );

      // save user token
      worker.token = token;
      await worker.save();
      // user
      res.cookie('workertoken', token, { httpOnly: true })
      return res.status(200).json(worker);
    }
    return res.status(400).send("Invalid Credentialjhs");
  } catch (e) {
    await res.status(400).send(e.toString());
  }
};

module.exports.isValidToken = (req, res, next) => {
  if (!req.worker) {
    return res.status(400).send("Invalid Token");
  }
  return res.status(200).send("Valid Token");
};
module.exports.resetPassword = async (req, res, next) => {
  try {
    const worker_id = req.worker.worker_id;
    const { new_password } = req.body;
    let worker = await Worker.findById(worker_id);
    if (!worker) {
      res.status(400).send("No such User exists");
    }
    worker.password = await bcrypt.hash(new_password, 10);
    const payload = {
      worker: req.worker,
    };
    const token = await jwt.sign(payload, process.env.TOKEN_KEY);
    worker.token = token;
    await user.save();
    res.cookie("workertoken", token);
    return res.status(200).json(worker);
  } catch (err) {
    return res.status(400).send(e.toString());
  }
};


module.exports.refreshAccessToken = async (req, res, next) => {
  try {
    const worker_id = req.worker.worker_id;
    let worker = await Worker.findById(worker_id);
    if (!worker) {
      res.status(400).send("No such User exists");
    }
    const payload = {
      worker: req.worker,
    };
    const token = await jwt.sign(payload, process.env.TOKEN_KEY);
    res.cookie("workertoken", token);
    return res.status(200).send("Token Refreshed");
  } catch (err) {
    return res.status(400).send(e.toString());
  }
};


module.exports.verifyEmail = async (req, res, next) => {
  try {
    const worker_id = req.worker.worker_id;
    let worker = await Worker.findById(worker_id);
    if (!worker) {
      res.status(400).send("No such User exists");
    }
    worker.isEmailVerified = true;
    await worker.save();
    return res.status(200).json(worker);
  } catch (err) {
    return res.status(400).send(e.toString());
  }
};
module.exports.propose_get = async (req, res, next) => {
  try {
    const worker_id = req.worker.worker_id;
    const id=req.params.id;

    let post = await Post.findById(id);
    const postWorkers=post.worker
    if(!postWorkers.includes(worker_id)){
      postWorkers.push(worker_id)
    }
    const updatedPost = await Post.findByIdAndUpdate(id, {
      worker: postWorkers,
    })
    return res.status(200).json(updatedPost);
  } catch (err) {
    return res.status(400).send(e.toString());
  }
};
module.exports.delete_get = async (req, res, next) => {
  try {
    const id=req.params.id;
    await Post.findByIdAndDelete(id)
    return res.status(200).json({"message":"Deleted Post"});
  } catch (err) {
    return res.status(400).send(e.toString());
  }
};
