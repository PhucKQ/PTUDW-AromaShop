const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { body, validationResult } = require('express-validator');

function getErrorMessage(errors) {
    let msg = '';
    for (let i = 0; i < errors.length; i++) {
        msg += `<p>${errors[i].msg}</p>`;
    }
    return msg;
}

router.get('/login', (req, res) => {
    req.session.returnURL = req.query.returnURL;
    res.render('login', { 
        active: {login: true}
    });
});

router.post('/login', 
    body('username').isEmail().withMessage('Username must be an email address!'),
    body('password').notEmpty().withMessage('Password must not be empty!'),
    (req, res, next) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('login', {
                message: getErrorMessage(errors.array()),
                type: 'alert-danger',
            });
        }

        let email = req.body.username;
        let password = req.body.password;
        let keepLoggedIn = (req.body.keepLoggedIn != undefined);

        userController
            .getUserByEmail(email)
            .then(user => {
                if (user) {
                    if (userController.comparePassword(password, user.password)) {
                        req.session.cookie.maxAge = keepLoggedIn ? 30 * 24 * 60 * 60 * 100 : null;
                        req.session.user = user;
                        if (req.session.returnURL) {
                            res.redirect(req.session.returnURL);
                        } else {
                            res.redirect('/');
                        }
                    } else {
                        res.render('login', {
                            message: 'Incorrect password!',
                            type: 'alert-danger',
                        });
                    }
                } else {
                    res.render('login', {
                        message: 'Email does not exists!',
                        type: 'alert-danger',
                    });
                }
            });
    }
);

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', 
    body('fullname').notEmpty().withMessage('Fullname must not be empty!'),
    body('username').isEmail().withMessage('Username must be an email address!'),
    body('password').notEmpty().withMessage('Password must not be empty!'),
    body('password').matches('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}').withMessage('Password Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters'),
    body('confirmPassword').custom((confirmPassword, { req }) => {
        if (req.body.password != confirmPassword) {
            throw new Error('Confirm password does not match!');
        }
        return true;
    }),
    (req, res, next) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('register', {
                message: getErrorMessage(errors.array()),
                type: 'alert-danger',
            });
        }
        let fullname = req.body.fullname;
        let email = req.body.username;
        let password = req.body.password;
        let keepLoggedIn = (req.body.keepLoggedIn != undefined);

        // Kiem tra username chua ton tai
        userController
            .getUserByEmail(email)
            .then(user => {
                if (user) {
                    return res.render('register', {
                        message: `Email ${email} exists! Please choose another email address.`,
                        type: 'alert-danger',
                    });
                }

                // Tao tai khoan
                user = {
                    fullname,
                    username: email,
                    password
                }
                return userController
                    .createUser(user)
                    .then(user => {
                        if (keepLoggedIn) {
                            req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 100;
                            req.session.user = user;
                            res.redirect('/');
                        } else {
                            res.render('login', {
                                message: 'You have registered, now please login!',
                                type: 'alert-primary',
                            });
                        }
                    });
                })
            .catch(error => next(error));
    }
);

router.get('/logout', (req, res, next) => {
    req.session.destroy(error => {
        if (error) {
            return next(error);
        }
        return res.redirect('/users/login');
    });
});

router.get('/forgot', (req, res, next) => {
    res.render('forgot', {
        message: "Enter your email and we'll send the instructions.",
    });
});

router.post('/forgot', 
    body('username').isEmail().withMessage('Username must be an email address!'),

    (req, res, next) =>{
        let email = req.body.username;

        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('forgot', {
                email,
                message: getErrorMessage(errors.array()),
                type: 'alert-danger',
            });
        }

        // Kiem tra email co ton tai trong db
        userController.getUserByEmail(email)
            .then(user => {
                if (user) {
                    // Neu co thi tao link
                    let token = userController.createJWT(email);
                    let host = req.header('host');
                    let url = `${req.protocol}://${host}/users/reset?u=${email}&t=${token}`;

                    // Gui email
                    userController.sendResetPasswordMail(user, host,url)
                        .then((result) => {
                            // neu thanh cong
                            return res.render('forgot', {
                                done: 1,
                                email
                            });
                        })
                        .catch((err) => {
                            return res.render('forgot', {
                                message: 'An error occurred while trying to send to your email. Please try again!',
                                type: 'alert-danger',
                                email
                            });
                        });
                } else {
                    // nguoc lai neu email khong ton tai
                    return res.render('forgot', {
                        message: 'The email is not registered yet. Please try another email or <a href="/users/register">sign up</a>',
                        type: 'alert-danger',
                        email
                    });
                }
            })
            .catch(error => next(error));
    }
);

router.get('/reset', (req, res, next) => {
    let email = req.query.u;
    let token = req.query.t;

    if (!email || !token) {
        res.redirect('/user/forgot');
    }

    let isVerify = userController.verifyJWT(token);
    if (isVerify) {
        res.render('reset', { email, message: 'Please enter your new password.' });
    } else {
        return res.render('forgot', {
            message: "Your link was expired. Enter your email and we'll send the instructions",
            type: 'alert-danger',
            email
        });
    }
});

router.post('/reset', 
    body('fullname').notEmpty().withMessage('Fullname must not be empty!'),
    body('username').isEmail().withMessage('Username must be an email address!'),
    body('password').notEmpty().withMessage('Password must not be empty!'),
    body('password').matches('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}').withMessage('Password Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters'),
    body('confirmPassword').custom((confirmPassword, { req }) => {
        if (req.body.password != confirmPassword) {
            throw new Error('Confirm password does not match!');
        }
        return true;
    }),
    (req, res, next) => {
        let email = req.body.email;

        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('reset', {
                email,
                message: getErrorMessage(errors.array()),
                type: 'alert-danger',
            });
        }
        
        let password = req.body.password;
        
        userController.getUserByEmail(email)
            .then(user => {
                if (user) {
                    user.password = password;
                    userController.updatePassword(user);
                    res.render('reset', {
                        done: 1,
                    })
                } else {
                    res.redirect('/user/forgot');
                }
            })
        res.render('/reset');
});

module.exports = router;
