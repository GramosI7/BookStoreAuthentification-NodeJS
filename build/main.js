require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("connect-flash");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    userImg: { type: String }
});

const User = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model("User", userSchema);



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express_validator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express_validator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_connect_flash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_connect_flash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_connect_flash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_session__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_express_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__config_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_passport__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_user__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_bcryptjs__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_bcryptjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_bcryptjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__routes_book__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes_user__ = __webpack_require__(17);








const LocalStrategy = __webpack_require__(12).Strategy;



const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

// Mongoose Connection
__WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_6__config_database___default.a.database);
const db = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connecté a MongoDB !');
});

// Express Basic
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__WEBPACK_IMPORTED_MODULE_2_path___default.a.join(__dirname, 'public')));
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default()());
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.urlencoded({ extended: false }));

// Express session
app.set('trust proxy', 1); // trust first proxy
app.use(__WEBPACK_IMPORTED_MODULE_5_express_session___default()({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

// Express Validator Middleware
app.use(__WEBPACK_IMPORTED_MODULE_3_express_validator___default()({
    errorFormatter: function (param, msg, value) {
        var namespace = param.split('.'),
            root = namespace.shift(),
            formParam = root;
        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));

// Passport Config
// require("./config/passport")(passport);
// import "./config/passport"
// Passport Middleware
app.use(__WEBPACK_IMPORTED_MODULE_7_passport___default.a.initialize());
app.use(__WEBPACK_IMPORTED_MODULE_7_passport___default.a.session());

// Express Message
app.use(__webpack_require__(2)());
app.use(function (req, res, next) {
    res.locals.messages = __webpack_require__(13)(req, res);
    next();
});

//PUG
app.set("views", __WEBPACK_IMPORTED_MODULE_2_path___default.a.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("*", (req, res, next) => {
    res.locals.user = req.user || null;
    console.log(res.user);
    next();
});

// Folder Routes

app.use("/book", __WEBPACK_IMPORTED_MODULE_10__routes_book__["a" /* bookRoute */]);

app.use("/user", __WEBPACK_IMPORTED_MODULE_11__routes_user__["a" /* userRoute */]);

// Listen Server
app.listen(3000, () => {
    console.log("Le serveur 3000 tourne !");
});

// Local Strategy
__WEBPACK_IMPORTED_MODULE_7_passport___default.a.use(new LocalStrategy(function (username, password, done) {
    // Match Username
    let query = { username: username };
    __WEBPACK_IMPORTED_MODULE_8__models_user__["a" /* User */].findOne(query, function (err, user) {
        if (err) console.log(err);
        if (!user) {
            return done(null, false, { message: "No user found" });
        }

        // Match Password
        __WEBPACK_IMPORTED_MODULE_9_bcryptjs___default.a.compare(password, user.password, function (err, isMatch) {
            if (err) console.log(err);
            if (isMatch) {
                return done(null, user);
            } else {
                return done(null, false, { message: "Wrong password" });
            }
        });
    });
}));
__WEBPACK_IMPORTED_MODULE_7_passport___default.a.serializeUser(function (user, done) {
    done(null, user.id);
});

__WEBPACK_IMPORTED_MODULE_7_passport___default.a.deserializeUser(function (id, done) {
    __WEBPACK_IMPORTED_MODULE_8__models_user__["a" /* User */].findById(id, function (err, user) {
        done(err, user);
    });
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src"))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express-validator");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {
    database: 'mongodb://localhost/authentification-re',
    secret: "mysecret"
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("express-messages");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bookRoute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_book__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_multer__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_multer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_multer__);




// Config multer
var storage = __WEBPACK_IMPORTED_MODULE_3_multer___default.a.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/public/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.filename);
    }
});
var upload = __WEBPACK_IMPORTED_MODULE_3_multer___default()({ storage: storage });
const bookRoute = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

bookRoute.get("/", (req, res) => {
    __WEBPACK_IMPORTED_MODULE_2__models_book__["a" /* Book */].find({}, (err, books) => {
        if (err) console.log(err);
        res.render("list_book", {
            books: books
        });
    });
});

bookRoute.get("/add", (req, res) => {
    res.render("add_book");
});

bookRoute.post("/add", upload.single("img"), (req, res) => {
    const datas = req.body;
    datas["img"] = req.file.filename;
    // console.log(req.body);
    // console.log(req.file)
    const book = new __WEBPACK_IMPORTED_MODULE_2__models_book__["a" /* Book */](datas);
    book.save(err => {
        if (err) console.log(err);
        req.flash("success", "Article Added");
        res.redirect("/book");
    });
});

bookRoute.get("/edit/:id", (req, res) => {
    __WEBPACK_IMPORTED_MODULE_2__models_book__["a" /* Book */].findById(req.params.id, (err, books) => {
        res.render("edit_book", {
            books: books
        });
    });
});

bookRoute.post("/edit/:id", (req, res) => {
    let id = { _id: req.params.id };
    __WEBPACK_IMPORTED_MODULE_2__models_book__["a" /* Book */].update(id, req.body, err => {
        if (err) console.log(err);
        req.flash("success", "Article Update");
        res.redirect("/book");
    });
});

// Delete Book DELETE
bookRoute.get("/delete/:id", (req, res) => {
    let idParams = { _id: req.params.id };
    __WEBPACK_IMPORTED_MODULE_2__models_book__["a" /* Book */].findByIdAndRemove(idParams, err => {
        if (err) console.log(err);
        res.redirect("/book");
    });
});

bookRoute.get("/:id", (req, res) => {
    __WEBPACK_IMPORTED_MODULE_2__models_book__["a" /* Book */].findById(req.params.id, (err, books) => {
        res.render("single_book", {
            books: books
        });
    });
});



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const bookSchema = new Schema({
    title: { type: String },
    author: { type: String, index: true },
    years: { type: String, index: true },
    description: { type: String },
    img: { type: String }
});

const Book = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model("Book", bookSchema);



/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userRoute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcryptjs__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcryptjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bcryptjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_passport__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_validator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express_validator__);

const userRoute = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();





userRoute.get("/login", (req, res) => {
    res.render("login");
});

userRoute.post("/login", (req, res, next) => {
    __WEBPACK_IMPORTED_MODULE_2_passport___default.a.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/user/login",
        failureFlash: true
    })(req, res, next);
});

userRoute.get("/register", (req, res) => {
    res.render("register");
});

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

    if (errors) {
        res.render("register", {
            errors: errors
        });
    } else {
        let newUser = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]({
            name: name,
            username: username,
            email: email,
            password: password
        });

        __WEBPACK_IMPORTED_MODULE_1_bcryptjs___default.a.genSalt(10, function (err, salt) {
            __WEBPACK_IMPORTED_MODULE_1_bcryptjs___default.a.hash(newUser.password, salt, function (err, hash) {
                if (err) {
                    console.log(err);
                } else {
                    newUser.password = hash;
                    newUser.save(err => {
                        if (err) {
                            console.log(err);
                            return;
                        } else {
                            req.flash("success", "You are now registered");
                            res.redirect("/user/login");
                        }
                    });
                }
            });
        });
    }
});

// Logout
userRoute.get("/logout", (req, res) => {
    req.logout();
    req.flash("success", "You are Logout");
    res.redirect("/user/login");
});



/***/ })
/******/ ]);
//# sourceMappingURL=main.map