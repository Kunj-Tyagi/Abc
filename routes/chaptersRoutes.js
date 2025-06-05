const express=require("express");
const router=express.Router();
const {getChapters,uploadChapters,getChapter} =require("../controllers/chapterController");
const upload = require('../middleware/upload');

router.route("/")
    .get(getChapters);


router.post('/', upload.single('file'), uploadChapters);

router.route("/:id")
    .get(getChapter);   


module.exports=router;