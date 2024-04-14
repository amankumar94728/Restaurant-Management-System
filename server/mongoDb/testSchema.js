import { Schema, model } from "mongoose";
const testSchema = new Schema({
    fName:{
        type:String,
        required:true
    },
    lName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role: {
        type:String,
        required:true,
}


});

const User = model("test",testSchema)

export default User;