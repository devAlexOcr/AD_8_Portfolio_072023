import Www from '../../assets/images/logo/www_logo.png';


function Url({url}) {



     return (
            <a href={url} target = "_blank" rel="noreferrer">
                <img  className='logo_pro' src={Www} alt='logo site web'/>
            </a> 
     )
}

export default Url;