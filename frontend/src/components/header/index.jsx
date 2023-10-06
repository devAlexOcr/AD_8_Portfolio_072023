import  { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo/custom_logo_partie_1.png'
import LogoText from '../../assets/images/logo/custom_logo_partie_2.png'
import './header.scss';


function Header({Page, setPage}) {
//     const idUser = JSON.parse(localStorage.getItem('CurrentUser'))[0].idUser;
//     const [Log, setLog] = useState(idUser)
//    console.log(Log)
    
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
                //   Log === '0' && 
                  <Link to="/Login"   className={(Page === 'Login')? 'active' : ''}>Login</Link>
                }
                {
                //    Log !== '0' && 
                   <Link to="/"    className={(Page === 'Login')? 'active' : ''}> Log Out</Link>
                }
                <Link to="/avis"    className={(Page === 'Avis')? 'active' : ''}>Avis</Link>
            </nav>  
        </header>
    )
}


export default Header