import mongoose from "mongoose";

const uri = process.env.MONGO_URI;

const connectDB = async () => {
    const { connection } = await mongoose.connect(uri);
    console.log(`Database is connected with ${connection.host}`);
}

export default connectDB;