import  { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import Logo from '../../assets/images/logo/custom_logo_partie_1.png'
import LogoText from '../../assets/images/logo/custom_logo_partie_2.png'
import './header.scss';


function Header({open, setOpen, main, setMain}) {

   
    const homeRef = useRef();
    const entryRef = useRef();
    const nav_header = useRef();
    const accueil = useRef();
    const accueilRef = useRef();
    const logo1 = useRef();
    const logo2 = useRef();

    const [header, setHeader] = useState(sessionStorage.getItem('header'));

    if (header === true) {
        homeRef.current.classList.add('header');
    }

    const toggle = () => {
        setMain(true)
        setOpen(true)
        setHeader(true)
        sessionStorage.setItem('header', true);
        logo1.current.classList.remove('animation_LogoImg')
        logo2.current.classList.remove('animation_LogoText')
        entryRef.current.remove()
        accueil.current.style.flexDirection ='row'
        nav_header.current.style.display ='flex'
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

                    <nav ref={nav_header} id='nav_header'>
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