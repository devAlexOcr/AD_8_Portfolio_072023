import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from '../src/pages/home.jsx';
import Projet from '../src/pages/projet.jsx';
import Contact from '../src/pages/contact.jsx';
import Login from '../src/pages/login.jsx';
import Error from '../src/pages/error.jsx';
import Avis from '../src/pages/avis.jsx';
import Start from '../src/pages/start.jsx';

import Header from '../src/components/header/index.jsx';
import Footer from '../src/components/footer/footer.jsx';




function App() {

   const [Page, setPage] = useState('Start')

    return (
       
        <BrowserRouter>
            {
                Page !== 'Start' && <Header setPage={setPage} />
            }
            <main className={(Page !== 'Start')? 'main' : '' } >
                <Routes>
                    <Route path='/' element={<Start  />} />
                    <Route path='/home' element={<Home setPage={setPage} />} />
                    <Route path='/projet/:id' element={<Projet setPage={setPage} />} />
                    <Route path='/contact' element={<Contact setPage={setPage} />} />
                    <Route path='/login' element={<Login setPage={setPage} />} />
                    <Route path='/avis' element={<Avis setPage={setPage} />} />
                    <Route path='*' element={<Error setPage={setPage} />} />
                </Routes>
            </main>
            {
                Page !== 'Start' && <Footer />
            }
            
        </BrowserRouter>
    )
}
 export default App;