import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from '../src/pages/home.jsx';
import Projet from '../src/pages/projet.jsx';
import Contact from '../src/pages/contact.jsx';
import Error from '../src/pages/error.jsx';

import Header from '../src/components/header/index.jsx';
import { useState } from 'react';

function App() {
   const [open, setOpen] = useState(false)


    return (
        <BrowserRouter>
            <Header open={open} setOpen={setOpen} />
                <Routes>
                    <Route path='/' element={<Home open={open} />} />
                    <Route path='/projet' element={<Projet />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<Error />} />
                </Routes>
        </BrowserRouter>
    )
}
 export default App;