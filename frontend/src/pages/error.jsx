import { useEffect } from 'react';

import './error.scss'

function Error({setPage}) {

    useEffect(() => {
        setPage('error');
    }, [setPage])
        
    
    return (
        <div id="error">
           <p>Error 404 page non trouvé</p>
        </div>
    )
};

export default Error;