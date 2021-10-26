import { Schema } from "mongoose";
import moongose from "moongose";

Schema = moongose.Schema;

const userModel = new Schema({
    name : {type: String},
    password : {type : String}
})

module.exports = mongoose.model("User", userModel);