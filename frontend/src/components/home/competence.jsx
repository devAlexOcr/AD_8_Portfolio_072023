import './competence.scss';




function Competence({open}) {
     
    return (
        <section  id="competence" className={(open)? "open_section" : "close_section"} >
            <h2>Compétences</h2>
            <div id='table'>
                <div>
                    <h3>&#123; Languages &#125;</h3>
                    <ul>

                    </ul>
                </div>
                <div>
                    <h3>&#123; Outils &#125;</h3>
                    <ul>
                        
                    </ul>
                </div>
                <div>
                    <h3>&#123; Hobbies &#125;</h3>
                    <ul>
                        
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Competence;