import{ useRef } from 'react';

import './login.scss'


function Login() {
    const email = useRef();
    const password = useRef();
   
        function clickLogin() {
            const user = {
                email: email.current.value,
                password: password.current.value
            }
            fetch('https://api.alexandrepaucdetoc.fr/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            
            .then (res => {
                return res.json();
            })
            .then(data => {
                return console.log(data);
            })
            
        };
  
    
    return (
        <section id="login">
            <h2>Connection</h2>
            <form method='post' id='form_login'>
                <label for="email">Email</label>
                <input ref={email} type='email' name='email' id='login2'/>
                <label for='password'>Password</label>
                <input ref={password} type="password" name='password' id='current-password'/>
                <button  onClick={()=>clickLogin()} id='se_connecter'>Se connecter</button>
                <button type='button' onClick={()=>clickLogin()} id='register'>S'enregistrer</button>
            </form>
        </section>
    )
};

export default Login;