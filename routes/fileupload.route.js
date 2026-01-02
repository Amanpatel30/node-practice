import express from "express";
import multer from "multer";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

const upload = multer({
  dest: "./uploads/"
});

router.post(
  "/uploads",
  verifyToken,
  upload.single("photo"),
  (req, res) => {
      console.log(req.file); 
    res.json({
      message: "file uploaded successfully",
      file: req.file
    });
  }
);

export default router;
