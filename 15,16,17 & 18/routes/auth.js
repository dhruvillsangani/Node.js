const express = require('express');
const {check,body} = require('express-validator/check')
const authController = require('../controllers/auth');

const router = express.Router();

router.get('/login', authController.getLogin);

router.post('/login', authController.postLogin);

router.get('/logout',authController.postLogout);

router.get('/signup',authController.getSignup);

router.post('/signup', [
    check('email')
    .isEmail()
    .withMessage("Please enter a valid email"),

    body('password','Please enter a only numbers and text at  least 5 characters ')
    .isLength({ min : 5 })
    .isAlphanumeric(),
     body('confirmPassword')
     .custom((value,{req}) => {
         if(value !== req.body.password) {
            throw new Error('Passwords do not match')
            }
            return true;
        })
    ],authController.postSignup);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;