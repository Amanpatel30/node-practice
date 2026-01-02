import express from "express";
import upload from "../middleware/upload.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();


router.post(
  "/uploads",
  verifyToken,
  upload.single("photo"),
  (req, res) => {
      // console.log(req.file); 
    res.json({
      message: "file uploaded successfully",
      filename: req.file.filename,
      file: req.file
    });
  }
);

export default router;
