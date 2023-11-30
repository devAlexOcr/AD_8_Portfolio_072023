import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from '../src/pages/home.jsx';
import Projet from '../src/pages/projet.jsx';
import Contact from '../src/pages/contact.jsx';
import Login from '../src/pages/login.jsx';
import Error from '../src/pages/error.jsx';
import Avis from '../src/pages/avis.jsx';
import Start from '../src/pages/start.jsx';

import Header from './components/header/index.jsx';
import Footer from '../src/components/footer/footer.jsx';




function App() {

   const [Page, setPage] = useState('Start')
   const [Log, setLog] = useState(null)

   const [dataProjets, setDataProjets] = useState([]);
console.log(dataProjets)
   useEffect(() => {
    fetch('datas/projetsOpenclassrooms.json'
    ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(function(response){          
        return response.json();
    })
    .then(function(data) {          
      setDataProjets(data);
    })
  }, []);

    return (
       
        <BrowserRouter>
            {
                Page !== 'Start' && <Header Page={Page} setPage={setPage} Log={Log} setLog={setLog} />
            }
            <main className={(Page !== 'Start')? 'main' : '' } >
                <Routes>
                    <Route path='/' element={<Start setPage={setPage} />} />
                    <Route path='/home' element={<Home setPage={setPage} dataProjets={dataProjets} setDataProjets={setDataProjets}/>} />
                    <Route path='/projet/:id' element={<Projet setPage={setPage} dataProjets={dataProjets} />} />
                    <Route path='/contact' element={<Contact setPage={setPage} />} />
                    <Route path='/login' element={<Login setPage={setPage} />} />
                    <Route path='/avis' element={<Avis setPage={setPage} Log={Log} />} />
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