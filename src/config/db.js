import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Mongodb connected successfully!`)
    } catch (error) {
        console.log(error, "Unable to connect to database");
        process.exit(1);
    }
}

export default connectDB;