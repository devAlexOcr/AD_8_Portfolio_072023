import { useState, useEffect } from 'react';

import Presentation from '../components/home/presentation.jsx';
import Technologies from '../components/home/technologies.jsx';
import Projets from '../components/home/projets.jsx';

import './home.scss';

function Home({setPage}) {
    
    const [dataProjets, setDataProjets] = useState([]);
    const [displaySection, setDisplaySection] = useState('presentation');


  useEffect(() => {
    setPage('Home');
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
  }, [setPage]);

  

    return (
        <>
        <nav id='nav_home'>
          <button onClick={()=>setDisplaySection('presentation')} className={(displaySection === 'presentation')? 'active' : ''} > Presentation </button>
          <button onClick={()=>setDisplaySection('technologie')} className={(displaySection === 'technologie')? 'active' : ''} > Technologies </button>
          <button onClick={()=>setDisplaySection('projet')} className={(displaySection === 'projet')? 'active' : ''} > Projets </button>
        </nav>
        
          {
            displaySection === 'presentation' && <Presentation />
          }
          {
            displaySection === 'technologie' && <Technologies />
          }
          {
            displaySection === 'projet' && <Projets dataProjets={dataProjets} />
          }          
        
        </>    
    )
};

export default Home;