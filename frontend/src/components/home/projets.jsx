import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './projets.scss';

import GitHub from '../../assets/images/logo/github_logo.png'
import Www from '../../assets/images/logo/www_logo.png'



function Projets({dataProjets}) {

  const PreviewRef = useRef();
  const Openclassrooms = useRef();
  const container = useRef();


  const hoverEffect=(projet) => {
    if(projet.url) {
      PreviewRef.current.innerHTML = `<div id='container_preview'>
      <img id='img_preview' src=${projet.cover} alt='preview du projet' />
      <div id='container_logo'>                                      
        <a href=${projet.gitHub}>
          <img  class='logo_pro' src=${GitHub} alt='logo gitHub'/>
        </a>
        <a href=${projet.url}>
          <img  class='logo_pro' src=${Www} alt='logo site web'/>
        </a> 
      </div>
    </div>`
    }else{
      PreviewRef.current.innerHTML = `<div id='container_preview'>
      <img id='img_preview' src=${projet.cover} alt='preview du projet' />
      <div id='container_logo'>                                      
        <a href=${projet.gitHub}>
          <img  class='logo_pro' src=${GitHub} alt='logo gitHub'/>
        </a>
      </div>
    </div>`
    }

  }

  const ViewProjet=() => {
    Openclassrooms.current.style.display ='none';
    container.current.style.display ='flex';
  }

  const ViewFormation=() => {
    Openclassrooms.current.style.display ='flex';
    container.current.style.display ='none';
  }

    return (
      
    <section id='projets' className='open' >
      <button id='Btn_projets' onClick={()=>ViewFormation()}><h2>Projets</h2></button>
        <div id='formation' ref={Openclassrooms}>
          <button onClick={() =>ViewProjet()}></button>
        </div>
        <div id='container' ref={container}>
          <div id='preview_projet' ref={PreviewRef}>
          </div>
          <div id='titre_projet'>
            <ul id='name_projet'>
              {
              dataProjets.map(projet => (
                <li key={projet.id} onMouseOver={()=>setInterval(hoverEffect(projet), 3000) } ><Link to={/projet/ + projet.id}>{projet.name}</Link></li>
              ))
              }
            </ul>
          </div>
        </div>
      </section>
    
    )
  };
  export default Projets;