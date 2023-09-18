import './avis.scss';
import Comment from '../components/avis/comment.jsx';
import FormAvis from '../components/avis/formAvis.jsx';

function Avis () {


    return (
        <section id='avis'>
            <h2>Ils en pensent quoi ?</h2>
                <Comment />
                <FormAvis />
        </section>
 
    )
};

export default Avis;