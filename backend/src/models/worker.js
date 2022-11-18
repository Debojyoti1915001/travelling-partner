const mongoose = require("mongoose");
const Worker = mongoose.model(
    "Worker",
    mongoose.Schema({
        name: { type: String },
        email: { type: String },
        password: { type: String },
        ratings: { type: Number },
        isEmailVerified: { type: Boolean, default: false },
        avatar: { type: String },
        refreshToken: { type: String, default: "" },
        isActive: { type: Boolean, default: false },
        isDelete: { type: Boolean, default: false },
        createdOn: { type: String },
        updatedOn: { type: String },
        token: { type: String },
        tokenExpiresIn: { type: String },
        profileId: {
            type: String,
            default: "",
        },
    })
);
module.exports = Worker;