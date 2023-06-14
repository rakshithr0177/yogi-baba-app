import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    photo: String,
    googleId: {
        type: String,
        required: true,
        unqiue:true
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default:"user"
    },
    createdAt: {
        type: Date,
        default:Date.now,
    }
})

const User = mongoose.model("User", schema);

export default User;