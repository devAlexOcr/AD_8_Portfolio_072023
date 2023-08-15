import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import './projet.scss';

function Projet({}) {

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

    return (
        <section id="projet">
           <img id='cover_img' src={Projet.cover} alt={Projet.name} />
            <div id='info_projet'>
                {
                    (Object.keys(Projet).length > 0) ?
                    Projet.languages.map( techno => (
                        <img key={techno.index} className='logo' src={techno} alt={techno} />
                        )
                    )
                    :
                    <></>
                }
            </div>
           <div id='projet_description'>
            <p>{Projet.description}</p>
            <h3>compétences</h3>
            {
                    (Object.keys(Projet).length > 0) ?
                    Projet.competence.map( techno => (
                        <li>{techno}</li>
                        )
                    )
                    :
                    <></>
                }
            <h3>Problématiques et solutions</h3>
            {
                    (Object.keys(Projet).length > 0) ?
                        Projet.problematiques.map( prob => (
                        <li>{prob}</li>
                        ))
                    :
                    <></>
                }
                {
                    Projet.solutions.map( sol => (
                        <li>{sol}</li>
                    ))
                }
           </div>
        </section>
    )
};

export default Projet;