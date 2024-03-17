import mongoose from "mongoose";

const getConnection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
        });
        if (conn) {
            console.log(`MongoDB Connected on ${conn.connection.host}`);
        } else {
            console.log("Mongo Failed to connect DB");
        }
    } catch (error) {
        console.log(`Mongo Failed with error: ${error.message}`);
    }
};

export default getConnection;
