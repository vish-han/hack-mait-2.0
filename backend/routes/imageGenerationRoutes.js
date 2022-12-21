import express from "express";
import {imageGenerator} from "../controller/imageGeneratorController.js"
import {test} from "../controller/test.js"
const router= express.Router();

router.post('/imageGenerator',imageGenerator )
router.get('/image',test)

export default router;