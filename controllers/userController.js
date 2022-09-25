const controller = {};
const models = require('../models');
const User = models.User;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "sldkfj";

controller.getUserByEmail = email => {
    return User.findOne({
        where: { username: email },
    });
};

controller.createUser = (user) => {
    let salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);
    return User.create(user);
};

controller.comparePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
};

controller.isLoggedIn = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect(`/users/login?returnURL=${req.originalUrl}`);
    }
};

controller.createJWT = (email) => {
    return jwt.sign(
        { email },
        SECRET_KEY,
        { expiresIn: "30m" }
    );
};

controller.verifyJWT = (token) => {
    try {
        jwt.verify(token, SECRET_KEY);
        return true;
    } catch (error) {
        return false ;
    }
};

controller.sendResetPasswordMail = (user, host, url) => {
    const Mailjet = require('node-mailjet');
    const mailjet = Mailjet.apiConnect(
        process.env.MJ_APIKEY_PUBLIC || '951d892e3eeadfedbcc23ca32ae23c70',
        process.env.MJ_APIKEY_PRIVATE || '4e507fd3fad3fefd9a2c1c4543114d8c',
        {}
    );

    const request = mailjet
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: "pilot@mailjet.com",
                Name: "Aroma Shop"
              },
              To: [
                {
                  Email: user.username,
                  Name: user.fullname
                }
              ],
              Subject: "Reset password",
            //   TextPart: "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
              HTMLPart: `<p>
              Hi ${user.fullname},</p>
              <br/>
              <p>You recently requested to reset the password for your ${host} account. Click the button below to proceed.</p>
              <br/>
              <p><a href="${url}">Reset password</a></p>
              <br/>
              <p>If you did not request a password reset, please ignore this email or reply to let us know. This password reset link is only valid for the next 30 minutes.</p>
              <br/>
              <p>Thanks,</p>
              <p>Aroma Shop</p>`,
            }
          ]
        });

    return request;
};

controller.updatePassword = (user) => {
    let salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);
    return User.update({
        password: user.password 
    }, {
        where: { id: user.id }
    });
};

module.exports = controller;