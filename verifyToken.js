import Jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
    const token = req.cookie.access_token;
    if (!token) {
        return next(createError(401, "You arn't authenticated!"))
    }
    Jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return next(createError(403, "Token isn't Valid!"))
        req.user = user

        next();
    })
}