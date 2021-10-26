import mongoClient from "mongoose";

const userModel = new mongoClient.Schema({
    name : {type: String},
    password : {type : String}
})

export default userModel;