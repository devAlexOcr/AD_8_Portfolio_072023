import React, { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './projets.scss';



function Projets({open, dataProjets}) {

  const PreviewRef = useRef();


    return (
      
    <section id='projets' className={(open)? "open_section" : "close_section"} >
      <h2>Projets</h2>
        <div id='container'>
          <div id='preview_projet' ref={PreviewRef}>
          </div>
          <div id='titre_projet'>
            <ul id='name_projet'>
              {
              dataProjets.map(projet => (
                
                <li key={projet.id} ><Link to={/projet/ + projet.id}>{projet.name}</Link></li>
              ))
              }
            </ul>
          </div>
        </div>
      </section>
    
    )
  };
  export default Projets;
    