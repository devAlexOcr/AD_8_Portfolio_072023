import './error.scss'

function Error({setPage}) {

    setPage('error');
    
    return (
        <div id="error">
           <p>Error 404 page non trouvé</p>
        </div>
    )
};

export default Error;