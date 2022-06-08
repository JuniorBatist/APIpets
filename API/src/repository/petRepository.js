import { con } from './connection.js'

export async function inserirPet(pet){
    const comando=
    `INSERT INTO tb_pet(id_pet, nm_pet)
        VALUES(?,?)`;
    
const resposta = await con.query(comando, [pet.nome]);
return resposta;
}

export async function listarPet(id) {
    const comando =
    `SELECT  id_pet     id,
            nm_pet     nome,
     FROM tb_pet`;

const [linhas] = await con.query(comando);
return linhas;
}