import { useState, useEffect } from 'react';

import Presentation from '../components/home/presentation.jsx';
import Technologies from '../components/home/technologies.jsx';
import Projets from '../components/home/projets.jsx';


function Home({open}) {

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

    return (
        <>
            <Presentation open={open} />
            <Technologies open={open} />
            <Projets open={open} dataProjets={dataProjets} />
        </>    
    )
};

export default Home;