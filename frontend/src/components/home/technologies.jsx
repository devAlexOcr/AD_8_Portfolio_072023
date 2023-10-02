import { useEffect, useState } from 'react';
import './technologies.scss';




function Technologies() {



    const [Logos, setLogos] = useState([]);
    useEffect(() => {
    
        fetch('../datas/logos.json'
        ,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(function(res){          
            return res.json();
        })
        .then(function(res) {       
              setLogos(res)
        })

      }, [setLogos]);
    return (
        <section id="technologie" className='open' >
            <div id="logo_techno">
             {
                    (Object.keys(Logos).length > 0) ?
                    Logos.map( logo => (<img  key={logo.id} id={'logo_'+logo.name} src={logo.src} alt={logo.name}/>))
                    :
                    <></>
                }
            </div>
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