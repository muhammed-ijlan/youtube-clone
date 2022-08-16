import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"

import userRoutes from "./routes/users.js"
import commentRoutes from "./routes/comments.js"
import videoRoutes from "./routes/videos.js"
import authRoutes from "./routes/auth.js"

const app = express()
dotenv.config()
app.use(express.json())

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

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!"
    return res.status(status).json({
        success: false,
        status: status,
        message: message
    })
})

//PORT LISTEN
app.listen(8800, () => {
    connect();
    console.log("Server Connected!");
}) 