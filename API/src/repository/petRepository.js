import { con } from './connection.js'


export async function inserirPet(pet){
    const comando=
    `INSERT INTO tb_pet(nm_pet)
        VALUES(?)`
    
const [resposta] = await con.query(comando, [pet.nome]);
pet.id=resposta.insertid;
return pet;
}

export async function listarPet() {
    const comando =
    `SELECT  id_pet     id,
         nm_pet     nome
         FROM 	tb_pet`

const [resposta] = await con.query(comando);
return resposta;
}