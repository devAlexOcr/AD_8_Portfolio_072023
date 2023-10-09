import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './projets.scss';


function Projets({dataProjets}) {

  const PreviewRef = useRef();
  const Openclassrooms = useRef();
  const container = useRef();
  const projetsId = useRef();

  const [screen, setScreen] = useState(window.innerWidth < 768);
  useEffect(() => {
    function handleResize() {
      setScreen(window.innerWidth < 768);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const containerClass = screen ? 'mobile' : '';

  const hoverEffect=(projet) => {
    PreviewRef.current.innerHTML = `<img id='img_preview' src=${projet.cover} alt='preview du projet' />` 
  }

  const ViewProjet=() => {
    Openclassrooms.current.style.display ='none';
    container.current.style.display ='flex';
    projetsId.current.style.height ='auto';
  }

    return (
      
    <section id='projets' className={containerClass} ref={projetsId} >
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
                  screen ? (
                    dataProjets.map(projet => (
                      <Link to={/projet/ + projet.id}><li key={projet.id}  style={{backgroundImage : `url(${projet.cover})` }} onMouseOver={()=>hoverEffect(projet)} ></li></Link>
                    ))
                  )
                  :
                  (
                    dataProjets.map(projet => (
                      <li key={projet.id} onMouseOver={()=>hoverEffect(projet)} ><Link to={/projet/ + projet.id}>{projet.name}</Link></li>
                    ))
                  )
                 }          

              
            </ul>
          </div>
        </div>
      </section>
    
    )
  };
  export default Projets;