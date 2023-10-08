import  { Link } from 'react-router-dom';
import { useEffect } from 'react';

import Logo from '../../assets/images/logo/custom_logo_partie_1.png'
import LogoText from '../../assets/images/logo/custom_logo_partie_2.png'

import './header.scss';


function Header({Page, setPage, Log, setLog}) {
    const currentUserData = localStorage.getItem('CurrentUser');
    const idUser = currentUserData ? JSON.parse(currentUserData)[1][0]?.idUser : null;
    
    useEffect(() => {
        setLog(idUser);
    }, [setLog, idUser])
    
    function disconnect() {
        localStorage.removeItem('CurrentUser');
        setLog(null);
    }

    return (
        <header>
            <Link to='/' onClick={()=>setPage('Start')}>
                <div id='logo'>
                    <img id='logo1' src={Logo} alt='logo fleche bas et fleche haut encerclées' />
                    <img id='logo2' src={LogoText} alt='Alexandre Pauc Detoc' />
                </div>
            </Link>

            <nav  id='nav_header'>
                <Link to="/home"    className={(Page === 'Home')? 'active' : ''}>Accueil </Link>
                <Link to="Contact"  className={(Page === 'Contact')? 'active' : ''}>Contact </Link> 
                {
                  Log === null && 
                  <Link to="/Login"   className={(Page === 'Login')? 'active' : ''}>Login</Link>
                }
                {
                   Log !== null && 
                   <Link to="/login"    onClick={()=>disconnect()} className={(Page === 'Login')? 'active' : ''}> Log Out</Link>
                }
                <Link to="/avis"    className={(Page === 'Avis')? 'active' : ''}>Avis</Link>
            </nav>  
        </header>
    )
}


export default Header