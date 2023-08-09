import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from '../src/pages/home.jsx';
import Projet from '../src/pages/projet.jsx';
import Contact from '../src/pages/contact.jsx';
import Login from '../src/pages/login.jsx';
import Error from '../src/pages/error.jsx';


import Header from '../src/components/header/index.jsx';
import Footer from '../src/components/footer/footer.jsx';

import { useState } from 'react';


function App() {



   const [open, setOpen] = useState(false)
   const [main, setMain] = useState(false)
   console.log(main)


    return (
        <BrowserRouter>
            <Header open={open} setOpen={setOpen} main={main} setMain={setMain} />
            <main className={main? 'open_main' : 'close_main'} >
                <Routes>
                    <Route path='/' element={<Home open={open} />} />
                    <Route path='/projet' element={<Projet />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}
 export default App;