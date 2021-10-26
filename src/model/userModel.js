import mongoClient from "mongoose";

const userModel = new mongoClient.Schema({
    username : {type: String},
    password : {type : String}
})

export default userModel;