import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {type: String},
    author : { type: String, index: true},
    years: {type : String, index: true},
    description : {type: String},
    img: {type: String}
})

const Book = mongoose.model("Book", bookSchema)

export { Book };