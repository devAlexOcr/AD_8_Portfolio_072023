import './technologies.scss';




function Technologies({open}) {
     
    return (
        <section  id="competence" className={(open)? "open_section" : "close_section"} >
            <h2>Technologies</h2>
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
                    <ul id='outils'>
                        <li>Visual Studio Code</li>
                        <li>GitHub</li>
                        <li>React</li>
                        <li>Sass</li>
                        <li>Node</li>
                        <li>ExpressJS</li>
                        <li>MongoDb</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Technologies;