import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './projets.scss';


function Projets({dataProjets}) {

  const PreviewRef = useRef();
  const Openclassrooms = useRef();
  const container = useRef();


  const hoverEffect=(projet) => {
    PreviewRef.current.innerHTML = `<div id='container_preview'>
                                      <img id='img_preview' src=${projet.cover} alt='preview du projet' />
                                    <div id='container_logo'>` 
  }

  const ViewProjet=() => {
    Openclassrooms.current.style.display ='none';
    container.current.style.display ='flex';
  }

    return (
      
    <section id='projets' className='open' >
      <h2>Projets</h2>
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
                <li key={projet.id} onMouseOver={()=>hoverEffect(projet)} ><Link to={/projet/ + projet.id}>{projet.name}</Link></li>
              ))
              }
            </ul>
          </div>
        </div>
      </section>
    
    )
  };
  export default Projets;