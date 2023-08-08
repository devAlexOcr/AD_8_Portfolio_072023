import './competence.scss';




function Competence({open}) {
     
    return (
        <section  id="competence" className={(open)? "open_section" : "close_section"} >
            <h2>Compétences</h2>
            <div id='table'>
                <div>
                    <h3>&#123; Languages &#125;</h3>
                    <ul>
                        <li>Html</li>
                        <li>Css</li>
                        <li>JavaScript</li>

                    </ul>
                </div>
                <div>
                    <h3>&#123; Outils &#125;</h3>
                    <ul>
                        <li>Visual Studio Code</li>
                        <li>React</li>
                        <li>Sass</li>
                        <li>Node</li>
                        <li>MongoDb</li>
                    </ul>
                </div>
                {/* <div>
                    <h3>&#123; Hobbies &#125;</h3>
                    <ul>
                        <li>Running</li>
                        <li>Natation</li>
                    </ul>
                </div> */}
            </div>
        </section>
    )
}

export default Competence;