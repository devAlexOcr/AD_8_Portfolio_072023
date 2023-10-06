import { useEffect } from 'react';
import  { Link } from 'react-router-dom';

import Logo from '../assets/images/logo/custom_logo_partie_1.png'
import LogoText from '../assets/images/logo/custom_logo_partie_2.png'

import './start.scss';


function Start ({setPage}) {

    useEffect(()=> {
        setPage('Start');
    },[setPage]);

    return (
        <section id="home" >
            <div id='accueil' >
                <div id='logo'>
                    <img id='logo1'  className='animation_LogoImg' src={Logo} alt='logo fleche bas et fleche haut encerclées' />
                    <img id='logo2'  className='animation_LogoText' src={LogoText} alt='Alexandre Pauc Detoc' />
                </div>
                <Link to ='/home' id='entry'> Entry </Link>  
            </div>

        </section> 
    )
}


export default Start;