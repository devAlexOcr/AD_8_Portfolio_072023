import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import './projet.scss';

import Html from '../assets/images/logo/html5_logo.png';
import Css from '../assets/images/logo/css3_logo.png';

function Projet({projet}) {

    const [Projet, setProjet] = useState({});
    const Params = useParams();
    const Navigate = useNavigate();
  
    useEffect(() => {
    
      fetch('../datas/projets.json'
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
        const projet = data.find((projetUnique) => projetUnique.id === Params.id)
        if (projet){
            setProjet(projet)
        }
        else {
            Navigate('/projet-inexistant')
        };
        
      })
    }, [Params.id, Navigate]);

    console.log(Projet)
    return (
        <section id="projet">
           <img id='cover_img' src={Projet.cover} alt={Projet.name} />
            <div id='info_projet'>
                <img className='logo' src={Html} alt='logo Html 5' />
                <img className='logo' src={Css} alt='logo Css 3'/>                
            </div>
           <div id='projet_description'>
            <p></p>
           </div>
        </section>
    )
};

export default Projet;