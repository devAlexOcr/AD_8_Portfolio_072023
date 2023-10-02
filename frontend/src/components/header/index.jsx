import  { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo/custom_logo_partie_1.png'
import LogoText from '../../assets/images/logo/custom_logo_partie_2.png'
import './header.scss';


function Header({setPage}) {

    return (
        <header>
            <Link to='/' onClick={()=>setPage('Start')}>
                <div id='logo'>
                    <img id='logo1' src={Logo} alt='logo fleche bas et fleche haut encerclées' />
                    <img id='logo2' src={LogoText} alt='Alexandre Pauc Detoc' />
                </div>
            </Link>

            <nav  id='nav_header'>
                <Link to="/home" >Accueil</Link>
                <Link to="Contact">Contact</Link> 
                <Link to="/Login">Login</Link>
                <Link to="/avis">Avis</Link>
            </nav>  
        </header>
    )
}


export default Header