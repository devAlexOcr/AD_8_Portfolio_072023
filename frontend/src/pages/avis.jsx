import { useState } from 'react';

import Comment from '../components/avis/comment.jsx';
import FormAvis from '../components/avis/formAvis.jsx';

import './avis.scss';

function Avis () {
    const [Comments, setComments] = useState({});

function GetAllComments () {   
    fetch('https://api.alexandrepaucdetoc.fr/avis', 
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }
    )
    .then (res => {
        return res.json();
    })
    .then(data => {
       setComments(data);
    })
}

    return (
        <section id='avis'>
            <button type='button' onClick={()=>GetAllComments()}>Get All Comments</button>
            <h2>Ils en pensent quoi ?</h2>
                <Comment comments={Comments} />
                <FormAvis />
        </section>
 
    )
};

export default Avis;