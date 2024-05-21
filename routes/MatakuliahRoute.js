import express from "express";
import {
    getMatakuliahs,
    getMatakuliahById,
    createMatakuliah,
    updateMatakuliah,
    deleteMatakuliah,
} from "../controller/MatakuliahController.js"

const router = express.Router();

router.get('/matakuliahs', getMatakuliahs);
router.get('/matakuliahs/:id', getMatakuliahById);
router.post('/matakuliahs', createMatakuliah);
router.patch('/matakuliahs/:id', updateMatakuliah);
router.delete('/matakuliahs/:id', deleteMatakuliah);

export default router;