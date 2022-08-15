import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"

import userRoutes from "./routes/users.js"

const app = express()
dotenv.config()

//MONGOOSE CONNECTION
const connect = () => {
    mongoose.connect(process.env.MONGO).then(() => {
        console.log("Connected TO DB")
    }).catch((err) => {
        throw err
    })
}

app.use("/api/users", userRoutes)


//PORT LISTEN
app.listen(8800, () => {
    connect();
    console.log("Server Connected!");
}) 