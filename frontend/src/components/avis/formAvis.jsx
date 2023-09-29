import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';


import Stars from './stars.jsx';

function FormAvis() {

const Navigate = useNavigate();
const commentText = useRef();
const [ratingStar, setRating] = useState(0)

const userStorage = JSON.parse(localStorage.getItem('CurrentUser'));
  
    function publish(action) {
        if (userStorage == null ) {
            console.log('message user vide')
            Navigate('/login')
        }else{ 
        const comment = {
            action: action,
            name: userStorage[0].name,
            firstname: userStorage[0].firstname,
            content : commentText.current.value,
            rating: ratingStar
        }
        console.log(comment);

         fetch('https://api.alexandrepaucdetoc.fr/avis', 
             {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 body: JSON.stringify(comment)
             }
         )
         .then (res => {
           return res.json();
         })
         .then(data => {
             return console.log(data);
         })}
     };

    return (
        <form id="formAvis">
            <label htmlFor='comment'>Commenaire</label>
            <input ref={commentText} type='text' name='comment' />
            <label htmlFor="rate">
                <p>Note</p>
                <div id='stars_Form'>
                    <div className='Stars'>
                        <Stars setRating={setRating} />
                    </div> 
                </div>               
            </label>
            <button type='button' onClick={()=>publish('publish')}>Publier</button>
        </form>
    )
};

export default FormAvis;