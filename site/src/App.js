import { useEffect, useState } from 'react'

import { inserirPet, listarPet  } from './api/petpi'


function App() {

  const [nome, setNome] = useState('');
  const [pets, setPets] = useState([]);

 async function carregarTodosPets(){
      const resp = await listarPet();
      setPets(resp);
  }
  
  useEffect(()=> {
  carregarTodosPets();
  
  }, [])
  
  async function salvarClick(){
      try {
          const r = await inserirPet(nome)
          alert('Pet Cadastrado 🐶 😸')
      } catch (err) {
          alert(err.response.data.erro);
      }
  }

  return(
     <main >
      <h1>Cadastrar Pet</h1> 
      <br/>
      <input type='text' placeholder='nome do pet' value={nome} onChange={e=> setNome(e.target.value)}/>

      <div>
          <button onClick={salvarClick}>Salvar</button>
      </div>

      <table>
            <thead>
                <tr>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {pets.map(item => 
                    <tr>
                        <td>{item.nome}</td>   
                    </tr>
                )}
            </tbody>
                      
      </table>
     </main>
    
     
  )
}

export default App;
