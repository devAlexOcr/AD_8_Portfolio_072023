import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


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
           <img src={Projet.cover} alt={Projet.name} />
        </section>
    )
};

export default Projet;