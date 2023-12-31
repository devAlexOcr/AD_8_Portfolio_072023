import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


import Stars from './stars.jsx';

function FormAvis({getComment, ratingStar, setRating}) {

const Navigate = useNavigate();
const commentText = useRef();

const userStorage = JSON.parse(localStorage.getItem('CurrentUser'));

  
    function publish(action) {
        if (userStorage == null ) {
            Navigate('/login')
        }else{ 
        const comment = {
            action: action,
            name: userStorage[1].name,
            firstname: userStorage[1].firstname,
            content : commentText.current.value,
            rating: ratingStar
        }
      

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
            document.getElementById('formAvis').reset()
            getComment();
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
                    <div className='Star'>
                        <Stars rating={ratingStar} setRating={setRating} />
                    </div> 
                </div>               
            </label>
            <button type='button' onClick={()=>publish('publish')}>Publier</button>
        </form>
    )
};

export default FormAvis;