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
                {/* <img className='logo' src={Projet.} alt='logo Html 5' />
                <img className='logo' src={Css} alt='logo Css 3'/>                 */}
            </div>
           <div id='projet_description'>
            <p></p>
           </div>
        </section>
    )
};

export default Projet;