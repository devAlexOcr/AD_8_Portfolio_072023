import GitHub from '../../assets/images/logo/github_logo.png';



function Github({github}) {

    return (
                                     
            <a href={github} target = "_blank" rel="noreferrer">
                <img  className='logo_pro' src={GitHub} alt='logo gitHub'/>
            </a>
    )
}

export default Github;