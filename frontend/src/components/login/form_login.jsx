import { useRef } from "react";

function FormLogin(clickLogin) {

    const email = useRef();
    const password = useRef();

    return (
        <form method='post' id='form_login'>
            <label for="email">Email</label>
                <input ref={email} type='email' name='email' id='login2'/>
            <label for='password'>Password</label>
                <input ref={password} type="password" name='password' id='current-password'/>
            <button  type ='button' onClick={()=>clickLogin()} id='se_connecter'>Se connecter</button>
        </form>
    )
}

export default FormLogin;