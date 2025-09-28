import mongoose from "mongoose";

// function to connect to the mongodb database

const connectDB = async()=>{
    mongoose.connection.on('connected',()=> console.log('Database is connected'));
    await mongoose.connect(`${process.env.MONGODB_URI}/student-portal`)
}

export default connectDB