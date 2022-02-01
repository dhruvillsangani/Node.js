const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cookieparser = require("cookie-parser");


const app = express();

app.use(helmet());


app.use(cookieparser());

 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, "..", "public")));
app.set('view engine','ejs');
app.set('views','views')




app.get("/", (req, res) => {
 
  let username = req.cookies.username;
  if( username == undefined) {
    res.redirect("/login");
  } 
  else {
    return res.render("welcome", {
      username,
    });
  }
  
});

app.get("/login", (req, res) => {

    return res.render("login");
 
});


app.post("/adddetail", (req, res) => {
  
  let { username, password } = req.body;
    res.cookie("username",{ username,password}, {
      maxAge:10000
    });

     res.redirect("/");
 

});

app.get("/logout", (req, res) => {
  
  res.clearCookie("username");
  return res.redirect("/login");
});

app.listen(4200);