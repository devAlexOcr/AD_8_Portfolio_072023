import Projet from '../components/home/projet.jsx';
import Presentation from '../components/home/presentation.jsx';
import { useState } from 'react';



function Home({open, Projets}) {

    const [section, updateSection] = useState(true)
    console.log(Projets)
    const next= () => {
        updateSection(!section)
    }

    return (
        <>
        {
        (section === true) ? 
            <Presentation open={open} section={section} />
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