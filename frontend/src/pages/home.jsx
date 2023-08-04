import Projet from '../components/home/projet.jsx';
import Presentation from '../components/home/presentation.jsx';
import { useState } from 'react';



function Home({open, Projets}) {

    const [section, updateSection] = useState(true)
console.log(section)
    const next= () => {
        
        updateSection(!section)
    }

    return (
        <>
        {
            
        (section === true) ? 
            <Presentation open={open} />
        :
            <>
            <Projet section={section} />
            </>
        }
        <button onClick={next} >Next</button>
        </>

    )
};

export default Home;