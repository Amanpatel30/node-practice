import express from 'express'
import {profile} from '../controllers/profile.controller.js'
import {verifyToken} from '../middleware/auth.middleware.js'
const router = express.Router()
// console.log(")

router.get("/profile",verifyToken,profile)

export default router;