import  { Link } from 'react-router-dom';
import { useRef } from 'react';
import Logo from '../../assets/images/logo_background_home.png.png'
import './header.scss';


function Header({open, setOpen}) {

    const homeRef = useRef();
    const entryRef = useRef();
    const navRef = useRef();
    const accueilRef = useRef();

    const toggle = () => {
        setOpen(!open); 
        homeRef.current.classList.add('header')
        entryRef.current.style.display ='none'
        // prevoir la redirection vers le path /home
        navRef.current.style.display ='flex'
    } 

    const backHome =() => {
        setOpen(false)
        homeRef.current.classList.remove('header')
        entryRef.current.style.display ='block'
        navRef.current.style.display ='none'
    }

    return (
        <header>
            <div id="home" ref={homeRef}>
                <div id='logo'>
                    <img src={Logo} alt='logo AD' />
                    <button id='entry' ref={entryRef}  onClick={toggle}>Entry</button>  
                    <nav ref={navRef}>
            <Link to="/" ref={accueilRef} onClick={backHome}>Accueil</Link>
            <Link to="Contact">Contact</Link>   
                    </nav>
                </div>
            </div> 
        </header>
    )
}


export default Header