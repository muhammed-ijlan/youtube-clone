import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"

import userRoutes from "./routes/users.js"
import commentRoutes from "./routes/comments.js"
import videoRoutes from "./routes/videos.js"
import authRoutes from "./routes/auth.js"

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
app.use("/api/video", videoRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/auth", authRoutes)


//PORT LISTEN
app.listen(8800, () => {
    connect();
    console.log("Server Connected!");
}) 