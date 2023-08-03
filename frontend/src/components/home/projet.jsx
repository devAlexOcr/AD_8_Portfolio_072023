import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './projet.scss';



function Projet({section}) {

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
      <>
      <section id='projet' className={(section)? "section_close" : "section_open"} >
        <div id='preview_projet'>
        </div>
        <div id='titre_projet'>
          <ul id='name_projet'>
            {
              Projets.map(projet => (
                <li><Link>{projet.name}</Link></li>
              ))
            }
          </ul>
        </div>
      </section>
      </>
    )
  };
  export default Projet;
    