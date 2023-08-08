import  { Link } from 'react-router-dom';
import { useRef } from 'react';
import Logo from '../../assets/images/logo/custom_logo_partie_1.png'
import LogoText from '../../assets/images/logo/custom_logo_partie_2.png'
import './header.scss';


function Header({open, setOpen}) {

    const homeRef = useRef();
    const entryRef = useRef();
    const navRef = useRef();
    const accueilRef = useRef();
    const logo1 = useRef();
    const logo2 = useRef();

    const toggle = () => {
        setOpen(!open); 
        homeRef.current.classList.add('header')
        logo1.current.classList.remove('animation_LogoImg')
        logo2.current.classList.remove('animation_LogoText')
        entryRef.current.style.display ='none'
        // prevoir la redirection vers le path /home
        navRef.current.style.display ='flex'
    } 

    const backHome =() => {
        setOpen(false)
        homeRef.current.classList.remove('header')
        entryRef.current.style.display ='block'
        entryRef.current.style.opacity ='1'
        navRef.current.style.display ='none'
    }

    return (
        <header>
            <section id="home" ref={homeRef}>
                <div id='acceuil'>
                <div id='logo'>
                    <img id='logo1' ref={logo1} className='animation_LogoImg' src={Logo} alt='logo fleche bas et fleche haut encerclées' />
                    <img id='logo2' ref={logo2} className='animation_LogoText' src={LogoText} alt='Alexandre Pauc Detoc' />
                </div>
                    <Link to ='/' id='entry' ref={entryRef}  onClick={toggle}>Entry</Link>  
                    <nav ref={navRef}>
                        <Link to="/" ref={accueilRef} onClick={backHome}>Accueil</Link>
                        <Link to="Contact">Contact</Link> 
                        <Link to="/Login">Login</Link>  
                    </nav>
                </div>
            </section> 
        </header>
    )
}


export default Header