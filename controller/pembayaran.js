import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export const getPembayaran = async (req, res) => {
    try {
     
    const pembayaran = await prisma.pembayaran.findMany();
    return res.status(200).json({pembayaran});    
    } catch (error) {
        return res.status(500).json({error: error.message});
    } 
};

export const getPembayaranById = async (req, res) => {
    try {
        const response = await prisma.pembayaran.findFirst({
            where:{
                trx_id: req.params.trx_id
            }
        })
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

export const createPembayaran = async (req, res) => {
    try {
        const { type, client_id, trx_id, trx_amount, customer_name, customer_email, customer_phone, description, datetime_expired, virtual_account, billing_type } = req.body;
        const pembayaran = await prisma.pembayaran.create({
            data: {
                type: type,
                client_id: client_id,
                trx_id: trx_id,
                trx_amount: trx_amount,
                customer_name: customer_name,
                customer_email: customer_email,
                customer_phone: customer_phone,
                description: description,
                datetime_expired: datetime_expired,
                virtual_account: virtual_account,
                billing_type: billing_type
            }
        });
        return res.status(201).json({ msg: "Create Pembayaran Success", data: pembayaran });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
