import express from "express"
import { updateUser, deleteUser, dislikeVideo, getUser, likeVideo, subscribe, unsubscribe } from "../controllers/user.js"

const router = express.Router();

// UPDATE A USER
router.put("/:id", updateUser)
// DELETE A USER
router.delete("/:id", updateUser)
// GET A USER
router.get("/find/:id", getUser)
// SUBSCRIBE A USER
router.put("/sub/:id", subscribe)
// UNSUBSCRIBE A USER
router.put("/unsub/:id", unsubscribe)
// LIKE A VIDEO 
router.put("/like/:videoId", likeVideo)
// DISLIKE A VIDEO
router.put("/dislike/:videoId", dislikeVideo)

export default router;