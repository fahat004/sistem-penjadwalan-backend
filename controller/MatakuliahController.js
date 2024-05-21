import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const getMatakuliahs = async (req, res) =>{
    try {
        const response = await prisma.matakuliah.findMany({
            include: {
                dosenpj: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }

}

export const getMatakuliahById = async (req, res) =>{
    try {
        const response = await prisma.matakuliah.findUnique({
            where:{
                id: Number(req.params.id)
            }
        })
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}
export const createMatakuliah = async(req, res) =>{
    const {kode, name, dosenpjId, sks, semester } = req.body;
    try {
        const matakuliah = await prisma.matakuliah.create({
            data:{
                kode: kode,
                name: name,
                dosenpjId: dosenpjId,
                sks: sks,
                semester: semester
            }
        });
        res.status(201).json(matakuliah);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }

}

export const updateMatakuliah = async(req, res) =>{
    const {kode, name, dosenpjId, sks, semester } = req.body;
    try {
        const matakuliah = await prisma.matakuliah.update({
            where:{
                id: Number(req.params.id)
            },
            data:{
                kode: kode,
                name: name,
                dosenpjId: dosenpjId,
                sks: sks,
                semester: semester
                
            }
        });
        res.status(200).json(matakuliah);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }

}

export const deleteMatakuliah = async(req, res) =>{
    try {
        const matakuliah = await prisma.matakuliah.delete({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(matakuliah);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }

}