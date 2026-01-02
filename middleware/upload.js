import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");   // store in /uploads folder
  },
  filename: (req, file, cb) => {
    // console.log("file "+file)
    // console.log("cb "+ cb)
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

export default upload;
