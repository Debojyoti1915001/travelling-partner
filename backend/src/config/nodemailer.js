const nodemailer = require('nodemailer')
require('dotenv').config()
const jwt = require('jsonwebtoken')

const sendMailToWorker = (worker,user, host, protocol) => {
    const PORT = 5050
    const link = `http://localhost:5050/chat.html?username=${user.name}&room=${user._id}`

    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.NODEMAILER_EMAIL, //email id

            pass: process.env.NODEMAILER_PASSWORD, // gmail password
        },
    })
    var mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: `${data.email}`,
        subject: 'Connect with your user',
        html:
            'Hello,<br> Please here to connect.<br><a href=' +
            link +
            '>Click here to join</a>',
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('Error', error)
        } else {
            console.log('Email sent: ')
        }
    })
}
const sendMailToUser = (worker,user, host, protocol) => {
    const PORT = 5050
    const link = `http://localhost:5050/chat.html?username=${worker.name}&room=${user._id}`

    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.NODEMAILER_EMAIL, //email id

            pass: process.env.NODEMAILER_PASSWORD, // gmail password
        },
    })
    var mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: `${data.email}`,
        subject: 'Connect with your worker',
        html:
            'Hello,<br> Please here to connect.<br><a href=' +
            link +
            '>Click here to join</a>',
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('Error', error)
        } else {
            console.log('Email sent: ')
        }
    })
}


module.exports = {
    sendMailToWorker, 
    sendMailToUser
}
