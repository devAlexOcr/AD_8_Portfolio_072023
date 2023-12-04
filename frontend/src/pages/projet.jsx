import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import './projet.scss';

import Github from '../components/projet/github.jsx';
import Url from '../components/projet/url.jsx';

function Projet({setPage, dataProjets}) {

    
    
    const [Projet, setProjet] = useState({});
    const Params = useParams();
    const Navigate = useNavigate();
    
    useEffect(() => {
        setPage('projet');
        if (Params.id <= 100){
        fetch('../datas/projetsOpenclassrooms.json',
        {
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
    }else {
            fetch('../datas/sideProjets.json',
        {
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
        }
    }, [Params.id, Navigate, setPage]);





    function lien(Projet) {
        if(Projet.url) {
            return(
                <>
                    <Github github={Projet.gitHub} />
                    <Url url={Projet.url} />
                </>
            )
         }else{
            return(
                <Github github={Projet.gitHub} />
            )
        }
    }
    const next = Number(Projet.id)+1;
    const prev = Number(Projet.id)-1;
    return (
        <section id="projet">
            <div id='img_projet'>

                <img id='cover_img' src={Projet.cover} alt={Projet.name} />
            <div id='info_projet'>
            {    
            1 <= prev &&  
                <Link to={/projet/+prev}>      
                    <div id='prev' className='chevron_prev'>                    
                    </div>
                </Link>
            }                
                {
                    (Object.keys(Projet).length > 0) ?
                    Projet.languages.map( techno => (
                        <img key={techno} className='logo' src={techno} alt={techno} />
                        ))
                    :
                    <></>
                }
                
                    {
                    lien(Projet)
                    }

                {    
                dataProjets.length >= next &&  
                <Link to={/projet/+next}>      
                    <div id='next' className='chevron'>                    
                    </div>
                </Link>
                }
  
            </div>

              
            </div>
            <div id='projet_description'>
                <p>{Projet.description}</p>
                   
            {
                Params.id <= 100 &&
            <>
                   <h3>compétences</h3>
            {   
                (Object.keys(Projet).length > 0) ?
                Projet.competence.map( techno => (<li key={techno}>{techno}</li>))
                :
                <></>
            }           
           
            <h3>Problématiques et solutions</h3>
       
            {
                (Object.keys(Projet).length > 0) ?
                    Projet.problematiques.map( prob => (<li key={prob}>{prob}</li>))
                :
                <></>
            }
            {
                (Object.keys(Projet).length > 0) ?
                    Projet.solutions.map( sol => (<li key={sol}>{sol}</li>))
                :
                <></>   
            }
            </>
        }       
                
           </div>
        </section>
    )
};

export default Projet;