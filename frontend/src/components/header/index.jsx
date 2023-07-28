
import  { Link } from 'react-router-dom';
import { useRef } from 'react';


function Header() {
    const homeRef = useRef();
    const entryRef = useRef();
    const navRef = useRef();

    const toggle = () => {
        homeRef.current.classList.add('header')
        entryRef.current.style.display ='none'
        // prevoir la redirection vers le path /home
        navRef.current.style.display ='flex'
    } 
    
    return (
        <header>
        <div id="home" ref={homeRef}> 
        <button id='entry' ref={entryRef}  onClick={toggle}>Entry</button>  
         
        <nav ref={navRef}>
            <Link to="/">Accueil</Link>
            <Link to="Contact">Contact</Link>
            <Link to="*">Error</Link>
        </nav>   
        </div>
        </header>
    )
}


export default Header