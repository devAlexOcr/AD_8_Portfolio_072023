import{ useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './login.scss'


function Login({setPage}) {

    useEffect(() => {
        setPage('Login');
    },[setPage]);
    

    const [Form, SetForm]= useState(1);

    const Navigate = useNavigate();

    const email = useRef();
    const password = useRef();
    const name = useRef();
    const firstname = useRef();

    function User(action) { 
        if(action === 'signup') {                
            return {action: action,
                    email: email.current.value,
                    password: password.current.value,
                    name: name.current.value,
                    firstname: firstname.current.value}
        } else {
            return {action: action,
                    email: email.current.value,
                    password: password.current.value}
        }};
   
        function clickLogin(action) {

           const user = User(action)

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
                if(Form === 1) {
                    document.getElementById('form_login').reset();
                }else{
                    document.getElementById('form_signUp').reset();
                }

                if(data[0].idUser === '0'){
                    alert(' Paire identifiant / mot de passe incorrect ! ')
                }else{
                    localStorage.setItem('CurrentUser', JSON.stringify(data));
                    Navigate('/home') 
                }
            })  
        };

    

    
    
    return (
        <section id="login">
            <h2>Connection</h2> 
                <nav id='nav_login'>
                        <button onClick={()=>SetForm(1)}className={(Form === 1) ? 'active' : ''} > LogIn </button>
                        <button onClick={()=>SetForm(2)} className={(Form === 2) ? 'active' : ''} > SignUp </button>
                </nav>
                {Form === 1 &&        
                    <form method='post' id='form_login'>
                        <label htmlFor="email">Email</label>
                            <input ref={email} type='email' name='email' id='login2'/>
                        <label htmlFor='password'>Password</label>
                            <input ref={password} type="password" name='password' id='current-password'/>
                        <button  type ='button' onClick={()=>clickLogin('log')} id='se_connecter'>Se connecter</button>
                    </form>
                }
                {Form === 2 && 
                    <form method='post' id='form_signUp'>
                        <label htmlFor='name'>Name</label>
                            <input ref={name} type='text' />
                        <label htmlFor='firstname'>Firstname</label>
                            <input ref={firstname} type='text'/>
                        <label htmlFor="email">Email</label>
                            <input ref={email} type='email' name='email' id='login2'/>
                        <label htmlFor='password'>Password</label>
                            <input ref={password} type="password" name='password' id='current-password'/>
                        <button type='button' onClick={()=>clickLogin('signup')} id='register'>S'enregistrer</button>
                    </form>
                }    
        </section>
    )
};

export default Login;