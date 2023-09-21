import{ useRef, useState } from 'react';

import './login.scss'


function Login() {

    const [Form, SetForm]= useState(1);

    const email = useRef();
    const password = useRef();
    const name = useRef();
    const firstname = useRef();
   
        function clickLogin(action) {

                const user = {
                    action: action,
                    email: email.current.value,
                    password: password.current.value,
                    name: name.current.value,
                    firstname: firstname.current.value
                }

            fetch('https://api.alexandrepaucdetoc.fr/login', 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                }
            )
            
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
            <nav id='nav_login'>
                <button onClick={()=>SetForm(1)}>LogIn</button>
                <button onClick={()=>SetForm(2)}>SignUp</button>
            </nav>
            {Form === 1 &&        
                <form method='post' id='form_login'>
                    <label for="email">Email</label>
                        <input ref={email} type='email' name='email' id='login2'/>
                    <label for='password'>Password</label>
                        <input ref={password} type="password" name='password' id='current-password'/>
                    <button  type ='button' onClick={()=>clickLogin('log')} id='se_connecter'>Se connecter</button>
                </form>
            }
            {Form === 2 && 
                <form method='post' id='form_signUp'>
                    <label for='name'>Name</label>
                        <input ref={name} type='text' />
                    <label for='firstname'>Firstname</label>
                        <input ref={firstname} type='text'/>
                    <label for="email">Email</label>
                        <input ref={email} type='email' name='email' id='login2'/>
                    <label for='password'>Password</label>
                        <input ref={password} type="password" name='password' id='current-password'/>
                    <button type='button' onClick={()=>clickLogin('signup')} id='register'>S'enregistrer</button>
                </form>
            }    
        </section>
    )
};

export default Login;