import Stars from './stars.jsx';
import './comment.scss';

function Comment () {


    return (
      <>
        <div id='comment'>
          <div id='user'>
            <p>alexandre D.</p>
          </div>
          <div id='text'>
            <p> integration du commmentaire de maniere dynamique</p>
          </div> 
        </div>
        <Stars rating={3} />
      </>
    )
};


export default Comment;