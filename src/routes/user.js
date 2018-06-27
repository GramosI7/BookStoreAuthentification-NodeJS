import express from "express";
const userRoute = express.Router();
import bcrypt from "bcryptjs";
import passport from "passport";
import {User} from "../models/user";
import expressValidator from "express-validator";


userRoute.get("/login", (req, res) => {
    res.render("login");
});

userRoute.post("/login", (req, res, next) => {
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/user/login",
        failureFlash: true
    })(req, res, next);
})

userRoute.get("/register", (req, res) => {
    res.render("register")
})

userRoute.post("/register", (req, res) => {
    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const password2 = req.body.password2;

    req.checkBody("name", "Name is required").notEmpty();
    req.checkBody("username", "Username is required").notEmpty();
    req.checkBody("email", "Email is required").isEmail();
    req.checkBody("password", "Password is required").notEmpty();
    req.checkBody("password2", "Password do no match").equals(req.body.password);

    let errors = req.validationErrors();

    if(errors){
        res.render("register", {
            errors: errors
        });
    } else {
        let newUser = new User({
            name: name,
            username : username,
            email: email,
            password : password
        });
        
        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(newUser.password, salt, function(err, hash){
                if(err){
                    console.log(err);
                } else {
                    newUser.password = hash;
                    newUser.save((err) => {
                        if(err) {
                            console.log(err)
                            return;
                        } else {
                            req.flash("success", "You are now registered");
                            res.redirect("/user/login");
                        }
                    })
                }
            });
        })
    }
});


// Logout
userRoute.get("/logout", (req, res) => {
    req.logout();
    req.flash("success", "You are Logout");
    res.redirect("/user/login")
})


export {userRoute};