const User = require('../models/users');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer')







exports.getLogin = (req, res, next) => {
  console.log(req.session.isLoggedIn);
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        return res.redirect('/login');
      }
      bcrypt
        .compare(password, user.password)
        .then(doMatch => {
          if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save(err => {
              console.log(err);
              res.redirect('/');
            });
          }
          res.redirect('/login');
        })
        .catch(err => {
          console.log(err);
          res.redirect('/login');
        });
    })
    .catch(err => console.log(err));
};


exports.postLogout = (req, res, next) => {


  console.log(req.session.isLoggedIn);
  req.session.destroy((err) => {
    console.log(err);
    res.redirect('/');
  })
};


exports.getSignup = (req, res, next) => {
    res.render('auth/signup',{
      path:'/signup',
      isAuthenticated:false
    });
}


exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  User.findOne({email:email})
  .then(userDoc => {
      if(userDoc) {
        return res.redirect('/signup')
      }
     return bcrypt.hash(password,12)
     .then(hashedPassword => {
      const user  = new User ({
        email:email,
        password:hashedPassword
      });
      return user.save()

     })    
  })
  .then(result => {
    res.redirect('/login')
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'karankoriya26@gmail.com',
        pass: 'sixandtwot'
      }
    });
    var mailOptions = {
      from: 'karankoriya26@gmail.com',
      to: email,
      subject: 'Sending Email using Node.js',
      text: 'That was easy!',
      
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  })
  .catch(err => {
    console.log(err);
  })

}
