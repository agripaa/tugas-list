import express from "express";
import { 
 getTugas, 
 getTugasById,
 createTugas,
 updateTugas,
 deleteTugas
} from "../controllers/dataTugasController";

const router = express.Router();

router.get('/tugas', getTugas)
router.get('/tugas/:id', getTugasById)
router.post('/tugas', createTugas)
router.patch('/tugas/:id', updateTugas)
router.delete('/tugas/:id', deleteTugas)

export default router;