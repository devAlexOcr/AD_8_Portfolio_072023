import  { Link } from 'react-router-dom';
import { useRef } from 'react';
import Logo from '../../assets/images/logo/custom_logo_partie_1.png'
import LogoText from '../../assets/images/logo/custom_logo_partie_2.png'
import './header.scss';


function Header({open, setOpen, main, setMain}) {

    const homeRef = useRef();
    const entryRef = useRef();
    const navRef = useRef();
    const accueil = useRef();
    const accueilRef = useRef();
    const logo1 = useRef();
    const logo2 = useRef();

    const toggle = () => {
        setMain(!open)
        setOpen(!open)
        homeRef.current.classList.add('header')
        logo1.current.classList.remove('animation_LogoImg')
        logo2.current.classList.remove('animation_LogoText')
        entryRef.current.remove()
        accueil.current.style.flexDirection ='row'
        navRef.current.style.display ='flex'
    } 

    return (
        <header>
            <section id="home" ref={homeRef}>
                <div id='accueil' ref={accueil} >
                <div id='logo'>
                    <img id='logo1' ref={logo1} className='animation_LogoImg' src={Logo} alt='logo fleche bas et fleche haut encerclées' />
                    <img id='logo2' ref={logo2} className='animation_LogoText' src={LogoText} alt='Alexandre Pauc Detoc' />
                </div>
                    <Link to ='/' id='entry' ref={entryRef}  onClick={toggle}>Entry</Link>  
                    <nav ref={navRef}>
                        <Link to="/" ref={accueilRef} >Accueil</Link>
                        <Link to="Contact">Contact</Link> 
                        <Link to="/Login">Login</Link>  
                    </nav>
                </div>
            </section> 
        </header>
    )
}


export default Header