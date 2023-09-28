import Stars from './stars.jsx';
import './comment.scss';

function Comment (commentaire) {

  const dataCom = commentaire.commentaire
  const nameStr = (dataCom.name.substring(0,1)).toUpperCase();

    return (
        <div className='comment'>
          <div className='user'>
            <p>{dataCom.firstname} {nameStr}.</p>
          </div>
          <div className='text'>
            <p> {dataCom.content}</p>
          </div> 
          <Stars rating={dataCom.rating} />
        </div>
    )
};


export default Comment;