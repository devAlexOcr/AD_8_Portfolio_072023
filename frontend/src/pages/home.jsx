import { useState, useEffect, useRef } from 'react';

import Presentation from '../components/home/presentation.jsx';
import Technologies from '../components/home/technologies.jsx';
import Projets from '../components/home/projets.jsx';


function Home({open}) {

    const centrale = useRef();

    const [dataProjets, setProjets] = useState([]);
  
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

  const presentation=()=>{

  }
  const technologies=()=>{

    }
  const projet=()=>{
  
      }

    return (
        <>
        <nav id='nav_home'>
          <button onClick={()=>presentation()}>Presentation</button>
          <button onClick={()=>technologies()}>Technologies</button>
          <button onClick={()=>projet()}>Projets</button>
        </nav>
        <section ref={centrale}>
        <Presentation  open={open} />
        <Technologies  open={open} />
        <Projets open={open} dataProjets={dataProjets} />
            
            
        </section>
        </>    
    )
};

export default Home;