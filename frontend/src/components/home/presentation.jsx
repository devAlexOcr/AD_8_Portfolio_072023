import { Link } from 'react-router-dom';

import './presentation.scss';



function Presentation() {
     
    return (
        <section  id="description" className='open' >
            <div id="portrait"></div>
            <div id='presentation'>
                <p>
                &nbsp;&nbsp;&nbsp;&nbsp; Après une carrière de 10 ans dans le domaine des laboratoires d'analyses de biologie médicale qui m'a permis d'acquérir de nombreuses soft skills telles que l'esprit d'équipe, l'autonomie, la réactivité, j'ai décidé d'évoluer vers le métier de développeur web.<br />&nbsp;&nbsp;&nbsp;&nbsp;En effet ce domaine que j'observe depuis de nombreuses années sur l'aspect technique et nouvelles technologies, a toujours suscité en moi un réel intérêt.<br />&nbsp;&nbsp;&nbsp;&nbsp;D'un naturel curieux, j'ai décidé de me former au sein d'Openclassrooms, pour relever un nouveau challenge professionnel. En effet, l'acquisition de nouvelles compétences ainsi que les nombreux défis techniques rencontrés lors de la réalisation des projets professionnalisants ont été pour moi de véritables stimulants.
                </p>
                <div>
                    <Link to="https://fr.linkedin.com/in/alexandre-pauc-detoc-b94150238"  target = "_blank" rel="noreferrer">
                        <img src='./assets/logos/linkedin_logo.png' alt='logo LinkedIn'></img>
                    </Link>
                    <Link to="https://github.com/devAlexOcr" target = "_blank" rel="noreferrer">
                        <img src='./assets/logos/github_blanc_logo.png' alt='logo GitHub'></img>
                    </Link>
                </div>
            </div>   
        </section>
    )
}

export default Presentation;