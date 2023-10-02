import { useState, useEffect } from 'react';

import Presentation from '../components/home/presentation.jsx';
import Technologies from '../components/home/technologies.jsx';
import Projets from '../components/home/projets.jsx';


function Home({setPage}) {
    setPage('Home');
    const [dataProjets, setProjets] = useState([]);
    const [displaySection, setDisplaySection] = useState(1);
  
  useEffect(() => {
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
  }, []);

  

    return (
        <>
        <nav id='nav_home'>
          <button onClick={()=>setDisplaySection(1)}>Presentation</button>
          <button onClick={()=>setDisplaySection(2)}>Technologies</button>
          <button onClick={()=>setDisplaySection(3)}>Projets</button>
        </nav>
        <section>
          {
            displaySection === 1 && <Presentation />
          }
                    {
            displaySection === 2 && <Technologies />
          }
                    {
            displaySection === 3 && <Projets dataProjets={dataProjets} />
          }          
        </section>
        </>    
    )
};

export default Home;