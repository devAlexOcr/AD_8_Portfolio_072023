import { useState, useEffect } from 'react';

import Comment from '../components/avis/comment.jsx';
import FormAvis from '../components/avis/formAvis.jsx';

import './avis.scss';

function Avis () {
    const [Comments, setComments] = useState({});

    useEffect(() => {   
        fetch('https://api.alexandrepaucdetoc.fr/avis', 
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        )
        .then (res => { return res.json(); })
        .then (data => {setComments(data); })
    }, [])





    return (
        <section id='avis'>
            <h2>Ils en pensent quoi ?</h2>
                <div id='displayAvis'>
                    {
                        (Object.keys(Comments).length >0) ?
                            Comments.map(commentaire => (<Comment key={commentaire.idComment} commentaire={commentaire} />))  
                        :
                            <></>  
                    }
                </div>
                <FormAvis />
        </section>
 
    )
};

export default Avis;