import { BrowserRouter,Routes, Route } from 'react-router-dom';

import home from './pages/home'
import home from './pages/cadastrar'
import home from './pages/consultar'

export default function siteRouter(){
    <BrowserRouter>
        <Routes>
            <Route path= './pages/cadastar' element= {cadastrar}> </Route>
            <Route path= './pages/consultar' element= { consultar}> </Route>
        </Routes>
    </BrowserRouter>
    
}
