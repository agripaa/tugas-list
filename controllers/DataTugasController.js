import Tugas from '../models/dataTugasModel';

export const getTugas = async(req, res) => {
    try{
        const result = await Tugas.findAll();
        res.json({data:result, metadata: "perfect"})
    }catch(err){
        console.log(err)
        res.json({metadata: "error"})
    }
}

export const getTugasById = async(req, res) => {
    try{
        const result = await Tugas.findOne({
            where: {id: req.params.id}
        });
        res.json({data:result, metadata: "perfect"})
    }catch(err){
        console.log(err)
        res.json({metadata: "error"})
    }
}

export const createTugas  = async(req, res) => {
    const {nama_tugas, mapel, deadline} = req.body;
    try{
        await Tugas.create({
            nama_tugas : nama_tugas,
            mapel : mapel,
            deadline : deadline
        });
        res.status(201).json({metadata: "data created successfully!"});
    }catch(err){
        console.log(err)
        res.json({metadata: "error"})
    }
}


export const updateTugas  = async(req, res) => {
    try{
        let result = await Tugas.update(req.body,{
            where: {id: req.params.id}
        });
        if(result === 1) return null;
        res.status(200).json({data:result, metadata: "data updated successfully!"});
    }catch(err){
        console.log(err)
        res.json({data:result, metadata: "error"})
    }
}

export const deleteTugas  = async(req, res) => {
    try{
        let result = await Tugas.destroy({
            where: {id: req.params.id}
        });
        res.status(202).json({data:result, metadata: "data deleted successfully!"});
    }catch(err){
        console.log(err)
        res.json({data:result, metadata: "error"})
    }
}