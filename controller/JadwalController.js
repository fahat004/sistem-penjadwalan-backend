import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const getJadwals = async (req, res) =>{
    try {
        const response = await prisma.jadwal.findMany({
            include: {
                matakuliah: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
            }
        });
        console.log(response);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }

}

export const getJadwalById = async (req, res) =>{
    try {
        const response = await prisma.jadwal.findUnique({
            where:{
                id: Number(req.params.id)
            }
        })
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}
export const createJadwal = async(req, res) =>{
    const {matakuliahId, kelas, hari, jam, ruangan } = req.body;
    try {
        const matakuliah = await prisma.jadwal.create({
            data:{
                matakuliahId: matakuliahId,
                kelas: kelas,
                hari: hari,
                jam: jam,
                ruangan: ruangan
            }
        });
        res.status(201).json(matakuliah);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }

}

export const updateJadwal = async(req, res) =>{
    const {matakuliahId, kelas, hari, jam, ruangan  } = req.body;
    try {
        const jadwal = await prisma.jadwal.update({
            where:{
                id: Number(req.params.id)
            },
            data:{
                matakuliahId: matakuliahId,
                kelas: kelas,
                hari: hari,
                jam: jam,
                ruangan: ruangan
            }
        });
        res.status(200).json(jadwal);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }

}

export const deleteJadwal = async(req, res) =>{
    try {
        const jadwal = await prisma.jadwal.delete({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(matakuliah);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }

}