import React, { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './projets.scss';

import GitHub from '../../assets/images/logo/github_logo.png'
import Www from '../../assets/images/logo/www_logo.png'



function Projets({open, dataProjets}) {

  const PreviewRef = useRef();
  const containerRef = useRef();

  const hoverEffect=(projet) => {
    PreviewRef.current.innerHTML = `<div id='container_preview'>
                                      <img id='img_preview' src=${projet.cover} alt='preview du projet' />
                                      <div id='container_logo'>                                      <a href=${projet.gitHub}>
                                      <img  class='logo_pro' src=${GitHub} alt='logo gitHub'/>
                                      </a>
                                      <a href=${projet.url}>
                                        <img  class='logo_pro' src=${Www} alt='logo site web'/>
                                      </a> 
                                      </div>
                                    </div>`
  }

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
                <li key={projet.id} onMouseOver={()=> hoverEffect(projet)} ><Link to={/projet/ + projet.id}>{projet.name}</Link></li>
              ))
              }
            </ul>
          </div>
        </div>
      </section>
    
    )
  };
  export default Projets;