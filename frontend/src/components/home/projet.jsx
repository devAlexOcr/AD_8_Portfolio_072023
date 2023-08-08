import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './projet.scss';



function Projet({open}) {


  const [Projets, setProjets] = useState([]);

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
}, [setProjets]);


    return (
      
    <section id='projet' className={(open)? "open_section" : "close_section"} >
      <h2>Projets</h2>
        <div id='preview_projet'>
        </div>
        <div id='titre_projet'>
          <ul id='name_projet'>
            {
              Projets.map(projet => (
                <li key={projet.id}><Link>{projet.name}</Link></li>
              ))
            }
          </ul>
        </div>
      </section>
    
    )
  };
  export default Projet;
    