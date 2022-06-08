import { inserirPet, listarPet} from '../repository/petRepository.js'

import{Router} from 'express'

const server = Router();

server.post('/pet', async(req, resp) => {
    try{
        const novoPet = req.body;
        const petInserido = await inserirPet(novoPet);
        resp.send(petInserido)

    }catch(err){
        resp.status(400).send({
            erro:err.message
        });
    }
})

server.get('/pet' , async (req,resp)=>{
    try{
        const pet = await listarPet()
        resp.send(pet);
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

export default server;