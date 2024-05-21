import express from "express";
import {
    getDosens,
    getDosenById,
    createDosen,
    updateDosen,
    deleteDosen,
} from "../controller/DosenController.js"

const router = express.Router();

router.get('/dosens', getDosens);
router.get('/dosens/:id', getDosenById);
router.post('/dosens', createDosen);
router.patch('/dosens/:id', updateDosen);
router.delete('/dosens/:id', deleteDosen);

export default router;