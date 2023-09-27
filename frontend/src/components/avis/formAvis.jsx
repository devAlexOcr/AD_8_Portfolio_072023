import { useRef } from 'react';

import Stars from './stars.jsx';

function FormAvis() {

const commentText = useRef();

    function publish() {
        const comment ={
            content : commentText.current.value
        }

         fetch('https://api.alexandrepaucdetoc.fr/login', 
             {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 body: JSON.stringify(comment)
             }
         )
         .then (res => {
            res.json();
         })
         .then(data => {
             return console.log(data);
         })
     };

    return (
        <form id="formAvis">
            <label htmlFor='comment'>Commenaire</label>
            <input ref={commentText} type='text' name='comment' />
            <label htmlFor="rate">
                <p>Note</p>
                <div id='stars_Form'>
                    <Stars rating={1} />
                </div>                
            </label>
            <button onClick={()=>publish()}>Publier</button>
        </form>
    )
};

export default FormAvis;