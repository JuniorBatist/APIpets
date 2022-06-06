import { inserirPet, listarPet} from '../repository/petRepository.js'

import{Router} from 'express'
const server = Router();

server.post ('pet', async(req, resp) => {
    try{
        const novoPet = req.body;
        const petInserido = await inserirPet(novoPet);
        resp.status(400).send

    }catch(err){
        resp.status(400).send({
            erro:'Ocorreu um erro'
        });
    }
})

server.get ('pet/:id', async(req, resp) => {
    try{
        const id = Number (req.params.id);
        const resposta = await buscarPorId(id)
            if(!resposta)
                resp.status(404).send([])
            else
                resp.send(resposta);

    }catch(err){
        resp.status(400).send ({
            erro: 'Ocorreu um erro'
        });
    }
})

export default server;