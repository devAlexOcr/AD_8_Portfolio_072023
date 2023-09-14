import{ useRef } from 'react';

import './login.scss'


function Login() {
    const email = useRef();
    const password = useRef();
   
        function clickLogin(e) {
            const user = {
                email: email.current.value,
                password: password.current.value
            }
            fetch('api.alexandrepaucdetoc.fr/api/.contact.php', {
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
               console.log(data);
            })
            e.preventDefautl();
        };
  
    
    return (
        <section id="login">
            <h2>Connection</h2>
            <form method='POST' id='form_login'>
                <label for="email">Email</label>
                <input ref={email} type='email' name='email' id='login2'/>
                <label for='password'>Password</label>
                <input ref={password} type="password" name='password' id='password'/>
                <button  onClick={()=>clickLogin()} id='se_connecter'>Se connecter</button>
                <button type='Submit' onClick={()=>clickLogin()} id='register'>S'enregistrer</button>
            </form>
        </section>
    )
};

export default Login;