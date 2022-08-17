import { createError } from "../error";
import Video from "../models/Video.js"

// CREATE
export const addVideo = async (req, res, next) => {
    const newvideo = new Video({ userID: req.user.id, ...req.body })
    try {
        const savedVideo = await newvideo.save();
        res.status(200).json(savedVideo)
    } catch (er) {
        next(er)
    }
}

// UPDATE
export const updateVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) return next(createError(404, "Video not Found!"))

        if (req.user.id === video.userId) {
            const updatedVideo = await Video.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true })
            res.status(200).json(updatedVideo)
        } else {
            return next(createError(403, "You can update only your video!"))
        }

    } catch (err) {
        next(err)
    }
}
// DELETE
export const deleteVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) return next(createError(404, "No video found"))
        if (req.user.id === video.id) {
            await Video.findByIdAndDelete(req.params.id)
            res.status(200).json("VIDEO HAS BEEN DELETED!")
        } else {
            return next(createError(403, "You can delete only you video"))
        }
    } catch (err) {
        next(err)
    }
}

// GET A VIDEO
export const getVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) return next(createError(404, "No video found"))
        res.status(200).json(video)
    } catch (err) {
        next(err)
    }
}

// ADD VIEWS
export const addView = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) return next(createError(404, "No video found"))


        res.status(200).json(video)
    } catch (err) {
        next(err)
    }
}

// RANDOM
export const random = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) return next(createError(404, "No video found"))


        res.status(200).json(video)
    } catch (err) {
        next(err)
    }
}

// TREND VIDEO
export const trend = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) return next(createError(404, "No video found"))


        res.status(200).json(video)
    } catch (err) {
        next(err)
    }
}

// SUBSCRIBED VIDEO
export const sub = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) return next(createError(404, "No video found"))


        res.status(200).json(video)
    } catch (err) {
        next(err)
    }
}