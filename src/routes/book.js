import express from "express";
import mongoose from "mongoose";
import {Book} from "../models/book";
import multer from "multer";
// Config multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './src/public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.filename)
    }
  });
var upload = multer({ storage: storage });
const bookRoute = express.Router();


bookRoute.get("/", (req, res) => {
    Book.find({}, (err, books) => {
        if(err) console.log(err);
        res.render("list_book", {
            books : books
        })
    })
});

bookRoute.get("/add", (req, res) => {
    res.render("add_book")
});

bookRoute.post("/add", upload.single("img"), (req, res) => {
    const datas = req.body
    datas["img"] = req.file.filename;
    // console.log(req.body);
    // console.log(req.file)
    const book = new Book(datas);
    book.save((err) => {
        if(err)console.log(err);
        req.flash("success", "Article Added")
        res.redirect("/book");    
    })
});

bookRoute.get("/edit/:id", (req, res) => {
    Book.findById(req.params.id, (err, books) => {
        res.render("edit_book", {
            books: books
        })
    })
})

bookRoute.post("/edit/:id", (req, res) => {
    let id = {_id : req.params.id}
    Book.update(id, req.body, (err) => {
        if(err) console.log(err);
        req.flash("success", "Article Update")
        res.redirect("/book");
    });
});

// Delete Book DELETE
bookRoute.get("/delete/:id", (req, res) => {
    let idParams = {_id: req.params.id};
    Book.findByIdAndRemove(idParams, (err) => {
        if (err)console.log(err)
        res.redirect("/book");
    })
})

bookRoute.get("/:id", (req, res) => {
    Book.findById(req.params.id, (err, books) => {
        res.render("single_book", {
            books: books
        })
    })
})

export {bookRoute};