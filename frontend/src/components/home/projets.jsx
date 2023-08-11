import React, { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './projets.scss';



function Projets({open, dataProjets}) {

  const PreviewRef = useRef();
  const hoverEffect=() => {
    PreviewRef.current.innerHTML = `<img id='img_preview' src=${dataProjets[0].cover} alt='preview du projet' />`
  }

  (Object.keys(dataProjets).length > 0) ?
    hoverEffect()
  :
    <></>;
 


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
                
                <li key={projet.id} onMouseOver={hoverEffect}><Link to={/projet/ + projet.id}>{projet.name}</Link></li>
              ))
              }
            </ul>
          </div>
        </div>
      </section>
    
    )
  };
  export default Projets;
    