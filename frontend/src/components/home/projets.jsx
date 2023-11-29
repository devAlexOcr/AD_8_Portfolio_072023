import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './projets.scss';


function Projets({dataProjets}) {

  const [sideProjets, setSideProjets] = useState([]);
  const PreviewRef = useRef();
  const Openclassrooms = useRef();
  const container = useRef();
  const projetsId = useRef();
  const containerSideProjet = useRef();

  const [screen, setScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
  fetch('datas/sideProjets.json'
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
    setSideProjets(data);
  })
}, []);

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

  const ProjetOpenclassrooms=() => {
    Openclassrooms.current.style.display ='none';
    container.current.style.display ='flex';
    projetsId.current.style.height ='auto';
  }

  const SideProjet=() => {
    Openclassrooms.current.style.display ='none';
    containerSideProjet.current.style.display ='flex'
    projetsId.current.style.height ='auto';
  }

  const ViewCategories =() => {
    Openclassrooms.current.style.display ='block';
    container.current.style.display ='none';
    containerSideProjet.current.style.display = 'none';
  }

    return (
      
    <section id='projets' className={containerClass} ref={projetsId} >
      <h2><Link onClick={ViewCategories}>Projets</Link></h2>
        <div id='formation' ref={Openclassrooms}>
          <button id="openclassrooms" onClick={ProjetOpenclassrooms}></button>
          <button id='sideProjet' onClick={SideProjet}>Side Project</button>
        </div>
        <div className='container' ref={container}>
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
        <div className='container' ref={containerSideProjet}>
              {
                sideProjets.map(projet => (
                  <Link to={/projet/ + projet.id} key={projet.id} className='cardSideProjet' style={{backgroundImage: `url(${projet.cover})` }}>
                      <h3>{projet.name}</h3>
                  </Link>
                ))
              }
        </div>
      </section>
    
    )
  };
  export default Projets;