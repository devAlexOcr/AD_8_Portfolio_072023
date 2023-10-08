import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Comment from '../components/avis/comment.jsx';
import FormAvis from '../components/avis/formAvis.jsx';

import './avis.scss';

function Avis ({setPage, Log}) {

    
    
    const [ratingStar, setRating] = useState(0)
    const [Comments, setComments] = useState({});

    const getComment = () => {
        fetch('https://api.alexandrepaucdetoc.fr/avis', 
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        )
        .then (res => {return res.json(); })
        .then (data => {
            setComments(data.slice(0,3));
            setRating(0);
         })
    };

    useEffect(() => {  
        setPage('Avis'); 
        getComment();
    }, [setPage])



    return (
        <section id='avis'>
            <h2>Ils en pensent quoi ?</h2>
            {
                Log === null && 
                    <div id='avis_login'>
                        <p>Envie de laisser votre avis ?</p>
                        <button type='button'><Link to='/login'>Connectez-vous</Link></button>
                    </div>
            }
            {
                Log !== null && 
                <FormAvis getComment={getComment} ratingStar={ratingStar} setRating={setRating} />
            }

                <div id='displayAvis'>
                    {
                        (Object.keys(Comments).length >0) ?
                            Comments.map(commentaire => (<Comment key={commentaire.idComment} commentaire={commentaire} />))  
                        :
                            <></>  
                    }
                </div>
                
        </section>
 
    )
};

export default Avis;