import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const getDosens = async (req, res) =>{
    try {
        const response = await prisma.dosen.findMany();
        console.log(response)
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }

}

export const getDosenById = async (req, res) =>{
    try {
        const response = await prisma.dosen.findUnique({
            where:{
                id: Number(req.params.id)
            }
        })
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}
export const createDosen = async(req, res) =>{
    const {name, nip} = req.body;
    try {
        const dosen = await prisma.dosen.create({
            data:{
                name: name,
                nip: nip
            }
        });
        res.status(201).json(dosen);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }

}

export const updateDosen = async(req, res) =>{
    const {name, nip} = req.body;
    try {
        const dosen = await prisma.dosen.update({
            where:{
                id: Number(req.params.id)
            },
            data:{
                name: name,
                nip: nip
            }
        });
        res.status(200).json(dosen);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }

}

export const deleteDosen = async(req, res) =>{
    try {
        const dosen = await prisma.dosen.delete({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(dosen);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }

}