import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI,
    {
        dbName: "HOSPITAL_MANAGEMENT_SYSTEM"
    })
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(`some error ocuured while connecting to DB: ${err}`);
    });
}