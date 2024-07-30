import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { getPembayaran,createPembayaran, getPembayaranById } from './controller/pembayaran.js';

const app = express();

const router = express.Router();


app.use(cors({
    credentials: true,
    origin: "*"
}
))
app.use(express.json());
app.use(router);

app.listen(5432, () => {
    console.log('Server is running on port 5432');
});

router.get("/pembayaran",getPembayaran)
router.get("/pembayaran/:trx_id",getPembayaranById)
router.post("/pembayaran",createPembayaran)
