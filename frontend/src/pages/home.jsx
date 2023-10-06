import { useState, useEffect } from 'react';

import Presentation from '../components/home/presentation.jsx';
import Technologies from '../components/home/technologies.jsx';
import Projets from '../components/home/projets.jsx';


function Home({setPage}) {
    
    const [dataProjets, setProjets] = useState([]);
    const [displaySection, setDisplaySection] = useState(1);


  useEffect(() => {
    setPage('Home');
    fetch('datas/projets.json'
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
      setProjets(data);
      
    })
  }, [setPage]);

  

    return (
        <>
        <nav id='nav_home'>
          <button onClick={()=>setDisplaySection(1)} className={(displaySection === 1)? 'active' : ''} > Presentation </button>
          <button onClick={()=>setDisplaySection(2)} className={(displaySection === 2)? 'active' : ''} > Technologies </button>
          <button onClick={()=>setDisplaySection(3)} className={(displaySection === 3)? 'active' : ''} > Projets </button>
        </nav>
        
          {
            displaySection === 1 && <Presentation />
          }
          {
            displaySection === 2 && <Technologies />
          }
          {
            displaySection === 3 && <Projets dataProjets={dataProjets} />
          }          
        
        </>    
    )
};

export default Home;