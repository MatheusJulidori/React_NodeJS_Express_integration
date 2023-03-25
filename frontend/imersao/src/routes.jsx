import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home} from './pages/Home/Home'

import { Membros } from './pages/Membros/Membros'

export function AppRoutes() {

    return(

        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/membros' element={<Membros/>} />
            </Routes>
        </BrowserRouter>
        
        </>
    )

}