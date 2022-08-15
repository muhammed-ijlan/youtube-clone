import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"

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

//PORT LISTEN
app.listen(8800, () => {
    connect();
    console.log("Server Connected!");
}) 