import express from "express";
import mongoose from "mongoose";
import path from "path";
import expressValidator from "express-validator";
import flash from "connect-flash";
import session from "express-session";
import config from "./config/database";
import passport from "passport";
const LocalStrategy = require("passport-local").Strategy;
import {User} from "./models/user";
import bcrypt from "bcryptjs";



const app = express();


// Mongoose Connection
mongoose.connect(config.database);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connecté a MongoDB !')
});

// Express Basic
app.use(express.static(path.join(__dirname,'public')));
app.use(express());
app.use(express.urlencoded({extended: false}))


// Express session
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));


// Express Validator Middleware
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
        , root    = namespace.shift()
        , formParam = root;
      while(namespace.length) {
        formParam += '[' + namespace.shift() + ']';
      }
      return {
        param : formParam,
        msg   : msg,
        value : value
      };
    }
  }));

// Passport Config
// require("./config/passport")(passport);
// import "./config/passport"
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Express Message
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});


//PUG
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("*", (req, res, next) => {
    res.locals.user = req.user || null;
    console.log(res.user)
    next();
})


// Folder Routes
import {bookRoute} from "./routes/book";
app.use("/book", bookRoute);
import {userRoute} from "./routes/user";
app.use("/user", userRoute);



// Listen Server
app.listen(3000, () => {
    console.log("Le serveur 3000 tourne !")
})


    // Local Strategy
    passport.use(new LocalStrategy(function(username, password, done) {
        // Match Username
        let query = {username: username};
        User.findOne(query, function(err, user) {
            if(err) console.log(err);
            if(!user){
                return done(null, false, {message : "No user found"})
            }

            // Match Password
            bcrypt.compare(password, user.password, function(err, isMatch) {
                if(err) console.log(err)
                if(isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, {message: "Wrong password"})
                }
            });
        })
    }))
    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });

