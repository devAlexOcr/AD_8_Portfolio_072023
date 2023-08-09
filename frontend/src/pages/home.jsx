import { useState } from 'react';

import Presentation from '../components/home/presentation.jsx';
import Competence from '../components/home/competence.jsx';
import Projet from '../components/home/projet.jsx';


function Home({open}) {

    return (
        <>
            <Presentation open={open} />
            <Competence open={open} />
            <Projet open={open} />
        </>    
    )
};

export default Home;